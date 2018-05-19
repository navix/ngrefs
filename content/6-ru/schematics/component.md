# `component`

ID: `@schematics/angular:component`

Генерация компонента.

```
ng generate component [name]
ng g c [name]
```


## `project`

* **Тип**: `string`

Имя проекта.


## `inlineStyle`

* **Псевдоним**: `s`
* **Тип**: `boolean`

Specifies if the style will be in the ts file.


## `inlineTemplate`

* **Псевдоним**: `t`
* **Тип**: `boolean`

Specifies if the template will be in the ts file.


## `viewEncapsulation`

* **Псевдоним**: `v`
* **Тип**: `string`
* **Значения**: `Emulated,Native,None`

Specifies the view encapsulation strategy.


## `changeDetection`

* **Псевдоним**: `c`
* **Тип**: `string`
* **Значения**: `Default,OnPush`
* **По-умолчанию**: `Default`

Specifies the change detection strategy.


## `prefix`

* **Псевдоним**: `p`
* **Тип**: `string`
* **Формат**: `html-selector`

The prefix to apply to generated selectors.


## `styleext`

* **Тип**: `string`
* **По-умолчанию**: `css`

The file extension to be used for style files.


## `spec`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Specifies if a spec file is generated.


## `flat`

* **Тип**: `boolean`

Flag to indicate if a dir is created.


## `skipImport`

* **Тип**: `boolean`

Flag to skip the module import.


## `selector`

* **Тип**: `string`
* **Формат**: `html-selector`

The selector to use for the component.


## `module`

* **Псевдоним**: `m`
* **Тип**: `string`

Allows specification of the declaring module.


## `export`

* **Тип**: `boolean`

Specifies if declaring module exports the component.
