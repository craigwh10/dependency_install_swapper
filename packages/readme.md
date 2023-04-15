# Monorepo plan

Each package will be a browser that is being supported.

Shared elements under the "rule of 3" (i.e shared across 3 packages) can go into a shared directory or if it is indefinite that these are shared elements.

Each package can have its dependencies, but shared things such as build/test/code-analysis need to be workspace dependencies, such as jest & ts-standard.

If you require a specific configuration for a package, extend the globals, for example, jest.config.js' for aliasing.

## Vision

- packages
  - chrome
  - firefox
  - edge
  - brave
  - shared
- tests
  - compatibility
  - functional
