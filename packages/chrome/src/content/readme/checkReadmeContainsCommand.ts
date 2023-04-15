/**
 * Checks whether there is a regular dependency or dev dependency independently.
 * --
 * If you provide checkForDev dep is will return false if there is a regular dependency.
 * If you dont then it will return false if there is a dev dependency.
 */
export function checkReadmeContainsCommand (readmePreText: string, packageOfInterest: string, checkForDevDep: boolean): boolean {
  // replace for cleanup of newlines in readme (ref (1))
  // breaks the readme text into an array so we can check each word.
  const stringArray = readmePreText.replace(/\n/g, ' ').split(' ')

  // using flat map over .map().filter((val) => val !== undefined)
  // a more type safe approach.
  const packageManagerIndices = stringArray.flatMap((text, idx) => (
    ['npm', 'bower', 'yarn', 'pnpm'].includes(text) ? [idx] : [])
  )

  const packageFound = packageManagerIndices.some((idx) => {
    const fiveAhead = stringArray.slice(idx, idx + 5)
    const fiveAheadContainsPackage = fiveAhead.includes(packageOfInterest)
    const containsDevDep = fiveAhead.find((word) => {
      return ['-D', '--save-dev', '--dev'].includes(word)
    }) !== undefined

    if (checkForDevDep) {
      return fiveAheadContainsPackage && containsDevDep
    }

    return !checkForDevDep && !containsDevDep && fiveAheadContainsPackage
  })

  return packageFound
};

// decided not to use regex for control but this has limitations on
// how far it looks ahead.

// ref(1):
/**
 *
 *
 * [
      '#',                'Locally',
      'in',               'your',
      'project.\nnpm',    'install',
      '-D',               'typescript\nnpm',
      'install',          '-D',
      'ts-node\n\n#',     'Or',
      'globally',         'with',
      'TypeScript.\nnpm', 'install',
      '-g',               'typescript\nnpm',
      'install',          '-g',
      'ts-node\n\n#',     'Depending',
      'on',               'configuration,',
      'you',              'may',
      'also',             'need',
      'these\nnpm',       'install',
      '-D',               'tslib',
      '@types/node'
    ]
 */
