# Dependency Install Swapper

Lightweight google chrome extension which changes the install field in npmjs.com to your preferred package manager.

![example](./docs/assets/example.png)

## Want to raise a bug or suggestion?

- [Use this form](https://github.com/craigwh10/dependency_install_swapper/issues/new)

## Notes

```sh
$ yarn
$ yarn run:js start
```

- Using commit-lint standards for changelog generation, so use type(scope): msg.

## Milestones

- [x] Converting npm to yarn commands in npm website.
- [x] Adding pnpm support.
- [x] Controlled via a toggle on the popup.
- [x] Improve styling of the popup
- [x] Infer dev dependencies based on existence of command in readme
  - [x] With warning on missing readme detail

## Tech tasks

- [x] Path aliases with parcel and tsc
- [ ] Linting
- [ ] Publishing with semver and generating distribution zips
- [ ] Cypress E2E coverage
