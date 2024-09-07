# Dependency Install Swapper (beta)

Lightweight google chrome extension which changes the install field in npmjs.com to your preferred package manager.

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/nkdhfndldlapnnbdijmnbmhecaklibno.svg?label=Chrome%20Web%20Store)](https://chrome.google.com/webstore/detail/dependency-install-swappe/nkdhfndldlapnnbdijmnbmhecaklibno)

https://user-images.githubusercontent.com/53788596/231875212-64be2a2c-63a8-472c-bca6-d6dd729aee0d.mp4

## Want to raise a bug or suggestion?

Please be patient with these and add as much detail as you can, for bugs add the wrong behavior and the proper behavior in a BDD structure if possible.

Suggestions are also appreciated heavily and please again give good detail with these, also feel free to raise pull requests.

- [Use this form for raising bugs](https://github.com/craigwh10/dependency_install_swapper/issues/new)
- [Use this site for feature requests](https://dependency-install-swapper.canny.io/feature-requests)

## Development information

This section contains detail on how you run this application locally, as well as how you get it to show as an extension in your browser and interface with npmjs.com pages.

### Running locally

```sh
yarn && yarn run:chrome start
```

### Running in "production"

```sh
yarn && yarn run:chrome build:test
```

Then once the `output` directory is generated:

- Go to `chrome://extensions`
- Load unpacked pointing at `packages/chrome/output`
- Then you should see the extension

### Notes

- Using commit-lint standards for changelog generation, so use type(scope): msg.
- "Safety nets not guardrails" for test coverage, coverage isn't enforced but we should produce valuable tests.
