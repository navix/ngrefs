# `protractor`

ID: `@angular-devkit/build-angular:protractor`

Билдер для e2e-тестирования с помощью [protractor]().


## Параметры 

### `protractorConfig`

* **Тип**: `string`

The name of the Protractor configuration file.


### `devServerTarget`

* **Тип**: `string`

Dev server target to run tests against.


### `specs`

* **Тип**: `array`
* **По-умолчанию**: ``

Override specs in the protractor config.


### `suite`

* **Тип**: `string`

Override suite in the protractor config.


### `elementExplorer`

* **Тип**: `boolean`

Start Protractor's Element Explorer for debugging.


### `webdriverUpdate`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Try to update webdriver.


### `serve`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Compile and Serve the app.


### `port`

* **Тип**: `number`

The port to use to serve the application.


### `host`

* **Тип**: `string`
* **По-умолчанию**: `localhost`

Host to listen on.


### `baseUrl`

* **Тип**: `string`

Base URL for protractor to connect to.


