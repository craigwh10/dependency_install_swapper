# Coverage notes

I want to be sure that there is still flexibility with the methods, the tests that touch code that is likely to be changed often in the early stages needs to be thought about pragmatically.

I usually ask myself:

- Is this covered by the integration tests
  - Is the value of this unit test not already covered in the integration test?
  - Would this test/detail tell us more beyond an integration test failure?
- Is the function truly testable:
    - Single responsibility
    - Modular (dependency free)
    - Well defined
- Is it critical that this function be tested

## Listed

- `hasInstallCommandsInReadme.ts`
  - is covered by integration for the scope it works at
  - checkReadmeContainsCommand would give us the value this gives if a readme failure happens.
- `handleWarningMessage.ts`
  - is covered by integration for warning visibility based on input.
