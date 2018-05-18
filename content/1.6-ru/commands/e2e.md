# `ng e2e`

> E2e тесты помогают проверить работоспособность уже собранного приложение на пользовательском уровне.

Запуск e2e тестов с использованием [Protractor](https://angular.github.io/protractor/).

## `--config`

* Тип: `String`
* Псевдонимы: `-c`
* .angular-cli.json: `e2e.protractor.config`

Путь к файлу конфига.


## `--element-explorer`

* Тип: `Boolean`
* Псевдонимы: `-ee`
* По-умолчанию: `false`

Запуск [Element Explorer](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively) для отладки.


## `--specs`

* Тип: `Array`
* Псевдонимы: `-sp`

Переназначение спеков в конфиге protractor.

Также можно передать несколько файлов: `--specs=spec1.ts --specs=spec2.ts`


## `--webdrive-update`

* Тип: `Boolean`
* Псевдонимы: `-wu`
* По-умолчанию: `true`

Автоматическое обновление webdriver.


## `--serve`

* Тип: `Boolean`
* Псевдонимы: `-s`
* По-умолчанию: `true`

Билд и запуск приложения. Доступны все соответсвующие опции команды `serve` (например `--port=4400`).

По-умолчанию устанавливает `live-reload=false` и случайный `--port`.

>> Если билд завершился с ошибкой, то e2e не будет запущен. Вы должны исправить ошибку и перезапустить команду. 
 

## `--port`

Аналогично с [`ng serve --port`](#ng-serve-port)


## `--watch`

Аналогично с [`ng build --watch`](#ng-build-watch)
