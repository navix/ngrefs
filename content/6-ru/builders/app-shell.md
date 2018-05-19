# `app-shell`

ID: `@angular-devkit/build-angular:app-shell`


## Параметры

### `browserTarget`

* **Тип**: `string`

Target to build.


### `serverTarget`

* **Тип**: `string`

Server target to use for rendering the app shell.


### `appModuleBundle`

* **Тип**: `string`

Script that exports the Server AppModule to render. This should be the main JavaScript outputted by the server target. By default we will resolve the outputPath of the serverTarget and find a bundle named 'main' in it (whether or not there's a hash tag).


### `route`

* **Тип**: `string`
* **По-умолчанию**: `/`

The route to render.


### `inputIndexPath`

* **Тип**: `string`

The input path for the index.html file. By default uses the output index.html of the browser target.


### `outputIndexPath`

* **Тип**: `string`

The output path of the index.html file. By default will overwrite the input file.
