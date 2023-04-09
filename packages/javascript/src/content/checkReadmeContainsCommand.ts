export function checkReadmeContainsCommand(readmePreText: string, packageOfInterest: string, checkForDevDep: boolean) {
    // replace for cleanup of newlines in readme (ref (1))
    const stringArray = readmePreText.replace(/\n/g, ' ').split(' ');
    const occurenceIndexesOfPkgMgrs = stringArray.map((val, idx) => {
        if (['npm', 'bower', 'yarn', 'pnpm'].includes(val)) return idx;
        return undefined;
    }).filter((val) => val !== undefined) as number[]; // cast as undefined removed.

    const anyOccurencesMeetsCondition = occurenceIndexesOfPkgMgrs.find((idx) => {
        const fiveAhead = stringArray.slice(idx, idx + 5);
        const fiveAheadContainsPackage = fiveAhead.includes(packageOfInterest);
        const containsDevDep = fiveAhead.find((word) => {
            return ['-D', '--save-dev', '--dev'].includes(word);
        })

        if (checkForDevDep) {
            return fiveAheadContainsPackage && containsDevDep;
        }

        return !containsDevDep && fiveAheadContainsPackage;
    })

    return anyOccurencesMeetsCondition !== undefined;
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