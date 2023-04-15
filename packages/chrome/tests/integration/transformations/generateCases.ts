interface Params {
    packageName: string
    expectDevDep: boolean
}

const packageMaps = {
    bower: 'install',
    yarn: 'add',
    npm: 'i',
    pnpm: 'add',
}

const shouldShowDevDepFlag = (packageManager: string, shouldShowDevDepFlag: boolean) => (
    packageManager === 'bower' ? false : shouldShowDevDepFlag
)

export const generateTransformationCases = ({packageName, expectDevDep}: Params) => Object.entries(packageMaps).map(
    ([prefix, installKeyword]) => ({
        prefPkgManager: prefix,
        expectedCmd: `${prefix} ${installKeyword}${shouldShowDevDepFlag(prefix, expectDevDep) ? ' -D ' : ' '}${packageName}`
    })
);