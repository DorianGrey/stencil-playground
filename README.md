# stencil-playground
Based on https://github.com/ionic-team/stencil-app-starter

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Just for testing and experimenting...

The original license for `stencil-app-starter` can be found in `LICENSE_stencil`.

## Task overview
Use `yarn` or `npm run` to execute once of the tasks below.

- `build`: Generates production build. Note that this uses ES5 output.
- `start`: Development server with live reload + incremental rebuild ([stencil-dev-server](https://github.com/ionic-team/stencil-dev-server)). Alias for `dev`.
- `test`: Simply runs all tests once.
- `test.ci`: Runs all tests once with coverage.
- `test.watch`: Run tests in watch mode.
- `serve`: Serves the build output. Uses stencil's dev server.
- `serve.prod`: Serves the build output with some production-level stuff like compression enabled. Uses `koa` under the hood.
- `lint`: Executes `tslint` and `stylelint` on the project's code; note that `tslint` is executed with the `--fix` flag.
- `format`: Formats the whole code using `prettier`. Note that this is also done incrementally on commit.

## Lighthouse reports
The current lighthouse reports can be found in the `lighthouse-reports` folder. 