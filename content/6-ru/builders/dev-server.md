# `dev-server`

ID: `@angular-devkit/build-angular:dev-server`

Билдер для локальной разработки.


## Параметры

### `browserTarget`

* **Тип**: `string`

Путь к конфигу для билдера `browser`, для наследования параметров.


### `port`

* **Тип**: `number`
* **По-умолчанию**: `4200`

Port to listen on.


### `host`

* **Тип**: `string`
* **По-умолчанию**: `localhost`

Host to listen on.


### `proxyConfig`

* **Тип**: `string`

Proxy configuration file.


### `ssl`

* **Тип**: `boolean`

Serve using HTTPS.


### `sslKey`

* **Тип**: `string`

SSL key to use for serving HTTPS.


### `sslCert`

* **Тип**: `string`

SSL certificate to use for serving HTTPS.


### `open`

* **Псевдоним**: `o`
* **Тип**: `boolean`

Opens the url in default browser.


### `liveReload`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Whether to reload the page on change, using live-reload.


### `publicHost`

* **Тип**: `string`

Specify the URL that the browser client will use.


### `servePath`

* **Тип**: `string`

The pathname where the app will be served.


### `disableHostCheck`

* **Тип**: `boolean`

Don't verify connected clients are part of allowed hosts.


### `hmr`

* **Тип**: `boolean`

Enable hot module replacement.


### `watch`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Rebuild on change.


### `hmrWarning`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Show a warning when the --hmr option is enabled.


### `servePathDefaultWarning`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Show a warning when deploy-url/base-href use unsupported serve path values.


### `optimization`

* **Тип**: `boolean`

Defines the optimization level of the build.


### `aot`

* **Тип**: `boolean`

Build using Ahead of Time compilation.


### `sourceMap`

* **Тип**: `boolean`

Output sourcemaps.


### `evalSourceMap`

* **Тип**: `boolean`

Output in-file eval sourcemaps.


### `vendorChunk`

* **Тип**: `boolean`

Use a separate bundle containing only vendor libraries.


### `commonChunk`

* **Тип**: `boolean`

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

Log progress to the console while building.


