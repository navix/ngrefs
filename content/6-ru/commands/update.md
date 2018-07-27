# `ng update`

Updates the current application to latest versions.

```
ng update [package] [--[argument]=[value]]
```

## Параметры

### `dryRun`

* **Тип**: `Boolean` 
* **Псевдоним**: `d`
* **По-умолчанию**: `false`

Запуск без каких-либо реальных изменений. Список созданных файлов выводится в консоль.


### `force`

* **Тип**: `Boolean` 
* **Псевдоним**: `f`
* **По-умолчанию**: `false`

Перезаписывание существующих файлов при совпадении имен.


### `all`

* **Тип**: `boolean`

Whether to update all packages in package.json.


### `next`

* **Тип**: `boolean`

Use the largest version, including beta and RCs.


### `migrateOnly`

* **Тип**: `boolean`

Only perform a migration, does not update the installed version.


### `from`

* **Тип**: `string`

Version from which to migrate from. Only available with a single package being updated, and only on migration only.


### `to`

* **Тип**: `srting`

Version up to which to apply migrations. Only available with a single package being updated, and only on migrations only. Requires from to be specified. Default to the installed version detected.


### `registry`

* **Тип**: `string`

The NPM registry to use.
