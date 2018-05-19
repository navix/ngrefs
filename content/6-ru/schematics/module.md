# `module`

ID: `@schematics/angular:module`

Generates a module.

```
ng generate module [name]
ng g m [name]
```


## `project`

* **Тип**: `string`

Имя проекта.


## `routing`

* **Тип**: `boolean`

Generates a routing module.


## `routingScope`

* **Тип**: `string`
* **Значения**: `Child,Root`
* **По-умолчанию**: `Child`

The scope for the generated routing.


## `spec`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Specifies if a spec file is generated.


## `flat`

* **Тип**: `boolean`

Flag to indicate if a dir is created.


## `commonModule`

* **Тип**: `boolean`
* **По-умолчанию**: `true`

Flag to control whether the CommonModule is imported.


## `module`

* **Псевдоним**: `m`
* **Тип**: `string`

Allows specification of the declaring module.
