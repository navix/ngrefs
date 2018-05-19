# `tslint`

ID: `@angular-devkit/build-angular:tslint`

Билдер для линтинга.


## Параметры 

### `tslintConfig`

* **Тип**: `string`

The name of the TSLint configuration file.


### `tsConfig`


The name of the TypeScript configuration file.


### `fix`

* **Тип**: `boolean`

Fixes linting errors (may overwrite linted files).


### `typeCheck`

* **Тип**: `boolean`

Controls the type check for linting.


### `force`

* **Тип**: `boolean`

Succeeds even if there was linting errors.


### `silent`

* **Тип**: `boolean`

Show output text.


### `format`

* **Тип**: `string`
* **Значения**: `prose,json,stylish,verbose,pmd,msbuild,checkstyle,vso,fileslist`
* **По-умолчанию**: `prose`

Output format (prose, json, stylish, verbose, pmd, msbuild, checkstyle, vso, fileslist).


### `exclude`

* **Тип**: `array`
* **По-умолчанию**: ``

Files to exclude from linting.


### `files`

* **Тип**: `array`
* **По-умолчанию**: ``

Files to include in linting.

