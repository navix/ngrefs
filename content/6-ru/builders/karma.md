# `karma`

ID: `@angular-devkit/build-angular:karma`

Билдер для юнит-тестирования с помощью [karma]().


## Параметры 

### `main`

* **Тип**: `string`

The name of the main entry-point file.


### `tsConfig`

* **Тип**: `string`

The name of the TypeScript configuration file.


### `karmaConfig`

* **Тип**: `string`

The name of the Karma configuration file.


### `polyfills`

* **Тип**: `string`

The name of the polyfills file.


### `assets`

* **Тип**: `array`
* **По-умолчанию**: ``

List of static application assets.


### `scripts`

* **Тип**: `array`
* **По-умолчанию**: ``

Global scripts to be included in the build.


### `styles`

* **Тип**: `array`
* **По-умолчанию**: ``

Global styles to be included in the build.


### `stylePreprocessorOptions`

* **Тип**: `object`

Options to pass to style preprocessors


### `environment`

* **Тип**: `string`

Defines the build environment.


### `sourceMap`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Output sourcemaps.


### `progress`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Log progress to the console while building.


### `watch`

* **Тип**: `boolean`

Run build when files change.


### `poll`

* **Тип**: `number`

Enable and define the file watching poll time period in milliseconds.


### `preserveSymlinks`

* **Тип**: `boolean`

Do not use the real path when resolving modules.


### `browsers`

* **Тип**: `string`

Override which browsers tests are run against.


### `codeCoverage`

* **Тип**: `boolean`

Output a code coverage report.


### `codeCoverageExclude`

* **Тип**: `array`
* **По-умолчанию**: ``

Globs to exclude from code coverage.


### `fileReplacements`

* **Тип**: `array`
* **По-умолчанию**: ``

Replace files with other files in the build.



