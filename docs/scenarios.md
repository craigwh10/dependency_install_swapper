# BDD Requirements

```gherkin
Feature: Visibility of warning for different packages

Scenario: has no references in readme
    Given I go to https://www.npmjs.com/package/react
    When I have my preference set to yarn
    Then I should see the command is yarn add react
    And A warning that this could be a dev dependency as no reference to install commands

Scenario: has references to dev dependency
    Given I go to https://www.npmjs.com/package/eslint-plugin-jest
    When I have my preference set to yarn
    Then I should see the command is yarn add -D eslint-plugin-jest
    And I should not see the warning that it could be a dev dependency

Scenario: has references to regular dependency
    Given I go to https://www.npmjs.com/package/cellular-automata-react
    When I have my preference set to yarn
    Then I should see the command is yarn add cellular-automata-react
    And I should not see the warning that it could be a dev dependency
```

```gherkin
Feature: changing preferences showing appropriate install command

Scenario: on a developer dependency referencing package
    Given I go to https://www.npmjs.com/package/eslint-plugin-jest
    When I set my preference to yarn
    Then I should see the command is yarn add -D eslint-plugin-jest
    When I set my preference to npm
    Then I should see the command is npm install -D eslint-plugin-jest
    When I set my preference to pnpm
    Then I should see the command is pnpm add -D eslint-plugin-jest
    When I set my preference to bower
    Then I should see the command is bower install eslint-plugin-jest

Scenario: on a non developer dependency referencing package
    Given I go to https://www.npmjs.com/package/cellular-automata-react
    When I set my preference to yarn
    Then I should see the command is yarn add cellular-automata-react
    When I set my preference to npm
    Then I should see the command is npm install cellular-automata-react
    When I set my preference to pnpm
    Then I should see the command is pnpm add cellular-automata-react
    When I set my preference to bower
    Then I should see the command is bower install cellular-automata-react

Scenario: switching tabs preserving choice
    Given I go to https://www.npmjs.com/package/eslint-plugin-jest
    When I set my preference to yarn
    Then I should see the command is yarn add -D eslint-plugin-jest
    When I navigate to cellular-automata-react package via npm
    Then I should see the command is yarn add cellular-automata-react
```
