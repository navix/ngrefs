# `server`

ID: `@angular-devkit/build-angular:server`

Билдер для universal-приложения (рендеринг на сервере).


## Параметры

### `main`

* **Тип**: `string`

The name of the main entry-point file.


### `tsConfig`

* **Тип**: `string`
* **По-умолчанию**: `tsconfig.app.json`

The name of the TypeScript configuration file.


### `stylePreprocessorOptions`

* **Тип**: `object`

Options to pass to style preprocessors


### `optimization`

* **Тип**: `boolean`

Defines the optimization level of the build.


### `fileReplacements`

* **Тип**: `array`
* **По-умолчанию**: ``

Replace files with other files in the build.


### `outputPath`

* **Тип**: `string`

Path where output will be placed.


### `sourceMap`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Output sourcemaps.


### `evalSourceMap`

* **Тип**: `boolean`

Output in-file eval sourcemaps.


### `vendorChunk`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Use a separate bundle containing only vendor libraries.


### `commonChunk`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Use a separate bundle containing code used across multiple bundles.


### `verbose`

* **Тип**: `boolean`

Adds more details to output logging.


### `progress`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Log progress to the console while building.


### `i18nFile`

* **Тип**: `string`

Localization file to use for i18n.


### `i18nFormat`

* **Тип**: `string`

Format of the localization file specified with --i18n-file.


### `i18nLocale`

* **Тип**: `string`

Locale to use for i18n.


### `i18nMissingTranslation`

* **Тип**: `string`

How to handle missing translations for i18n.


### `outputHashing`

* **Тип**: `string`
* **Значения**: `none,all,media,bundles`
* **По-умолчанию**: `none`

Define the output filename cache-busting hashing mode.


### `deleteOutputPath`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

delete-output-path


### `preserveSymlinks`

* **Тип**: `boolean`

Do not use the real path when resolving modules.


### `extractLicenses`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Extract all licenses in a separate file, in the case of production builds only.


### `showCircularDependencies`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Show circular dependency warnings on builds.


### `namedChunks`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Use file name for lazy loaded chunks.


### `bundleDependencies`

* **Тип**: `string`
* **Значения**: `none,all`
* **По-умолчанию**: `none`

Available on server platform only. Which external dependencies to bundle into the module. By default, all of node_modules will be kept as requires.


### `statsJson`

* **Тип**: `boolean`

Generates a 'stats.json' file which can be analyzed using tools such as: #webpack-bundle-analyzer' or https: //webpack.github.io/analyse.


### `forkTypeChecker`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Run the TypeScript type checker in a forked process.


### `lazyModules`

* **Тип**: `array`
* **По-умолчанию**: ``

List of additional NgModule files that will be lazy loaded. Lazy router modules with be discovered automatically.
