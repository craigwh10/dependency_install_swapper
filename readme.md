# Dependency Install Swapper

Lightweight google chrome extension which changes the install field in npmjs.com or yarnpkg.com to your preferred package manager.

[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=craigwh10_dependency_install_swapper&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=craigwh10_dependency_install_swapper)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=craigwh10_dependency_install_swapper&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=craigwh10_dependency_install_swapper)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=craigwh10_dependency_install_swapper&metric=security_rating)](https://sonarcloud.io/dashboard?id=craigwh10_dependency_install_swapper)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=craigwh10_dependency_install_swapper&metric=code_smells)](https://sonarcloud.io/dashboard?id=craigwh10_dependency_install_swapper)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=craigwh10_dependency_install_swapper&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=craigwh10_dependency_install_swapper)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=craigwh10_dependency_install_swapper&metric=bugs)](https://sonarcloud.io/dashboard?id=craigwh10_dependency_install_swapper)
[![Security by Snyk](https://img.shields.io/badge/Security%20by-Snyk-orange.svg?logo=snyk)](https://snyk.io/test/github/craigwh10/dependency_install_swapper)
[![Known Vulnerabilities](https://snyk.io/test/github/craigwh10/dependency_install_swapper/badge.svg)](https://snyk.io/test/github/craigwh10/dependency_install_swapper)
[![Canny](https://img.shields.io/badge/Canny-Suggestions-brightgreen.svg?style=flat-square&logo=canny)](https://dependency-install-swapper.canny.io/feature-requests)


![example](./docs/assets/example.png)

## Want to raise a bug or suggestion?

Please be patient with these and add as much detail as you can, for bugs add the wrong behavior and the proper behavior in a BDD structure if possible.

Suggestions are also appreciated heavily and please again give good detail with these, also feel free to raise pull requests.

- [Use this form for raising bugs](https://github.com/craigwh10/dependency_install_swapper/issues/new)
- [Use this site for feature requests](https://dependency-install-swapper.canny.io/feature-requests)

## Development information

This section contains detail on how you run this application locally, as well as how you get it to show as an extension in your browser and interface with npmjs.com pages.

### Running locally

```sh
$ yarn
$ yarn run:js start
```

### Running in "production"

```sh
$ yarn
$ yarn run:js build:test
```

Then once the `output` directory is generated:

- Go to `chrome://extensions`
- Load unpacked pointing at `packages/javascript/output`
- Then you should see the extension

### Notes

- Using commit-lint standards for changelog generation, so use type(scope): msg.
- For current active requirements see [scenarios.md](./docs/scenarios.md) (used for manual test due to beyond unit test issues)

## Milestones

- [x] Converting npm to yarn commands in npm website.
- [x] Adding pnpm support.
- [x] Controlled via a toggle on the popup.
- [x] Improve styling of the popup
- [x] Infer dev dependencies based on existence of command in readme
  - [x] With warning on missing readme detail
  - [x] No warning if readme contains regular install
- [x] Added bower support
- [x] Ensure popup meets accessibility criteria
- [x] Sonarcloud setup with webhook
- [x] Removing logs from deploy
- [x] Yarnpkg support
- [x] SSR support (npmjs)
- [x] CSR support (yarnpkg)
- [x] Active tab switching support 

## Tech tasks

- [x] Path aliases with parcel and tsc
- [ ] Linting
- [ ] Publishing with semver and generating distribution zips
- [ ] Automated compatibility coverage
  - [ ] Requires help, tried puppeteer, cypress & playwright without much success with regards to testing extensions on manifest v3 appropriately.
