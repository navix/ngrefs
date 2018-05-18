# `ng test`

> [Юнит-тесты](https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5) позволяют кардинально поднять качество и стабильность кода.

```
ng test
ng t
```

Билд приложения и запуск тестов. При изменнии исходных кодов, приложение будет пересобрано, а тесты перезапущены.

## `--app`

* Тип: `Number|String`
* Псевдонимы: `-a`
* По-умолчанию: первая аппа в `.angular-cli.json` 

Индекс или имя аппы из `.angular-cli.json`.


## `--browsers`

* Тип: `String`

Браузеры, в которых запускаются тесты.

Больше информации о настройке: http://karma-runner.github.io/1.0/config/browsers.html


## `--code-coverage`

* Тип: `Boolean`
* Псевдонимы: `-cc`
* По-умолчанию: `false`

> Позволяет быстро понять, какие части кода не протестированы.

Сгенерировать отчет о покрытии тестами. Будет сохранен в папку `./coverage`.


## `--colors`

* Тип: `Boolean`
* По-умолчанию: `true`

Использовать цвета в отчетах и логах.


## `--config`

* Тип: `String`
* Псевдонимы: `-c`
* .angular-cli.json: `test.karma.config`

Путь к файлу конфига Karma.


## `--log-level`

* Тип: `String`
* По-умолчанию: `info`
* Значения: `disable`, `error`, `warn`, `info`, `debug`

Уровень логирования.


## `--reporters`

* Тип: `String`

> Вы можете настроить самые [разнообразные способы вывода](https://www.npmjs.com/browse/keyword/karma-reporter) (изменение формата в консоли, в браузере, использование других каналов), есть и вот такой вариант: [![](./index/karma-nyan-reporter-error-output.png)](https://www.npmjs.com/package/karma-nyan-reporter)

Список репортеров.


## `--single-run`

* Тип: `Boolean`
* Псевдонимы: `-sr`
* По-умолчанию: `false`

> Необходимо для CI

Единоразовый запуск тестов.


## `--port`

Аналогично с [`ng serve --port`](#ng-serve-port)


## `--environment`

Аналогично с [`ng build --environment`](#ng-build-environment)


## `--poll`

Аналогично с [`ng build --poll`](#ng-build-poll)


## `--progress`

Аналогично с [`ng build --progress`](#ng-build-progress)


## `--preserve-symlinks`

Аналогично с [`ng build --preserve-symlinks`](#ng-build-preserve-symlinks)


## `--sourcemaps`

Аналогично с [`ng build --sourcemaps`](#ng-build-sourcemaps)


## `--watch`

Аналогично с [`ng build --watch`](#ng-build-watch)
