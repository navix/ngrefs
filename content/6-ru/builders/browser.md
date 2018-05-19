# `browser`

ID: `@angular-devkit/build-angular:browser`

Билдер приложения для браузера.


## Параметры 

### `assets`

* **Тип**: `array`
* **По-умолчанию**: ``

List of static application assets.


### `main`

* **Тип**: `string`

The name of the main entry-point file.


### `polyfills`

* **Тип**: `string`

The name of the polyfills file.


### `tsConfig`

* **Тип**: `string`

The name of the TypeScript configuration file.


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

Options to pass to style preprocessors.


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


### `aot`

* **Тип**: `boolean`

Build using Ahead of Time compilation.


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


### `baseHref`

* **Тип**: `string`

Base url for the application being built.


### `deployUrl`

* **Тип**: `string`

URL where files will be deployed.


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


### `extractCss`

* **Тип**: `boolean`

Extract css from global styles onto css files instead of js ones.


### `watch`

* **Тип**: `boolean`

Run build when files change.


### `outputHashing`

* **Тип**: `string`
* **Значения**: `none,all,media,bundles`
* **По-умолчанию**: `none`

Define the output filename cache-busting hashing mode.


### `poll`

* **Тип**: `number`

Enable and define the file watching poll time period in milliseconds.


### `deleteOutputPath`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Delete the output path before building.


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


### `buildOptimizer`

* **Тип**: `boolean`

Enables @angular-devkit/build-optimizer optimizations when using the 'aot' option.


### `namedChunks`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Use file name for lazy loaded chunks.


### `subresourceIntegrity`

* **Тип**: `boolean`

Enables the use of subresource integrity validation.


### `serviceWorker`

* **Тип**: `boolean`

Generates a service worker config for production builds.


### `skipAppShell`

* **Тип**: `boolean`

Flag to prevent building an app shell.


### `index`

* **Тип**: `string`

The name of the index HTML file.


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


### `budgets`

* **Тип**: `array`
* **По-умолчанию**: ``

Budget thresholds to ensure parts of your application stay within boundaries which you set.

