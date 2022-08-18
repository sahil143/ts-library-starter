# library name

\<library-description> This is a starter kit for react typescript libraries.

### Install

```
yarn add library-name
```

### Usage

```
[TODO]
```

## Contributing

This library uses [Rollup](https://rollupjs.org) to bundle and also sets up a [Parcel](https://parceljs.org/) playground inside `/app` folder

```
yarn install
yarn install:app
```

This will install all the library dependency and app dependencies. App dependencies are installed with `--no-lockfile` flag because parcel doesn't watch files outside of root directory [issue](https://github.com/parcel-bundler/parcel/issues/6039). App dependecy are installed without lock files and server is started from library root instead of app root so that parcel can watch changes to files in library root.

Start parcel playground

```
yarn start:app
```

### Tests

```
yarn test
```

This library uses [Jest](https://jestjs.io/) and [testing-library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests
