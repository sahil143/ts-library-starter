import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import analyzer from 'rollup-plugin-analyzer'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

const getExternalModules = (pkg) => [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
]

const getExternalModuleTester = (pkg, skipCss = false) => {
  const externalModules = getExternalModules(pkg)
  const externalModuleTests = externalModules.map(
    (module) => new RegExp(`^${module}(\\/.+)*$`),
  )
  return (moduleID) =>
    externalModuleTests.some((regexp) => regexp.test(moduleID)) ||
    (skipCss && /\.css$/.test(moduleID))
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: getExternalModuleTester(pkg),
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        include: ['src/**/*'],
      }),
      postcss(),
      analyzer({
        summaryOnly: true,
      }),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
    },
    external: getExternalModuleTester(pkg, true),
    plugins: [
      dts({
        respectExternal: true,
      }),
      analyzer({
        summaryOnly: true,
      }),
    ],
  },
]
