# BDD Requirements

```gherkin
Feature: Visibility of warning for different packages

Scenario Outline: has no references in readme

    Given I go to <url>
    When I have my preference set to yarn
    Then I should see the command is yarn add react
    And A warning that this could be a dev dependency as no reference to install commands

    Examples:
        | url                                 |
        | https://www.npmjs.com/package/react |
        | https://yarnpkg.com/package/react   |

Scenario Outline: has references to dev dependency

    Given I go to <url>
    When I have my preference set to yarn
    Then I should see the command is yarn add -D eslint-plugin-jest
    And I should not see the warning that it could be a dev dependency

    Examples:
        | url                                              |
        | https://www.npmjs.com/package/eslint-plugin-jest |
        | https://yarnpkg.com/package/eslint-plugin-jest   |

Scenario Outline: has references to regular dependency

    Given I go to <url>
    When I have my preference set to yarn
    Then I should see the command is yarn add cellular-automata-react
    And I should not see the warning that it could be a dev dependency

    Examples:
        | url                                                    |
        | https://www.npmjs.com/package/cellular-automata-react  |
        | https://yarnpkg.com/package/cellular-automata-react    |
```

```gherkin
Feature: changing preferences showing appropriate install command

Scenario Outline: on a developer dependency referencing package

    Given I go to <url>
    When I set my preference to yarn
    Then I should see the command is yarn add -D eslint-plugin-jest
    When I set my preference to npm
    Then I should see the command is npm install -D eslint-plugin-jest
    When I set my preference to pnpm
    Then I should see the command is pnpm add -D eslint-plugin-jest
    When I set my preference to bower
    Then I should see the command is bower install eslint-plugin-jest

    Examples:
        | url                                              |
        | https://www.npmjs.com/package/eslint-plugin-jest |
        | https://yarnpkg.com/package/eslint-plugin-jest   |

Scenario Outline: on a non developer dependency referencing package

    Given I go to <url>
    When I set my preference to yarn
    Then I should see the command is yarn add cellular-automata-react
    When I set my preference to npm
    Then I should see the command is npm install cellular-automata-react
    When I set my preference to pnpm
    Then I should see the command is pnpm add cellular-automata-react
    When I set my preference to bower
    Then I should see the command is bower install cellular-automata-react

    Examples:
        | url                                                   |
        | https://www.npmjs.com/package/cellular-automata-react |
        | https://yarnpkg.com/package/cellular-automata-react   |

Scenario Outline: switching tabs preserving choice

    Given I go to <url>
    When I set my preference to yarn
    Then I should see the command is yarn add -D eslint-plugin-jest
    When I navigate to cellular-automata-react package via npm
    Then I should see the command is yarn add cellular-automata-react

    Examples:
        | url                                              |
        | https://www.npmjs.com/package/eslint-plugin-jest |
        | https://yarnpkg.com/package/eslint-plugin-jest   |
```

```gherkin
Feature: command changes for client side rendered site yarnpkgjs.com

Scenario: on a developer dependency referencing package

    Given I go to https://yarnpkgjs.com/package/jest
    When I set my preference to yarn
    Then I should see the command is yarn add -D eslint-plugin-jest
    When I put in react in the yarnpkg search bar
    And I click react on the search results to open the package page
    Then I should see the command is yarn add react
    And I should see the warning message pop up that it could be a developer dependency
```
