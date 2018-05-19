# `ng serve`

> После создания приложения, следующим шагом будет его запуск на веб-сервере, чтобы приступить к разработке.

```
ng serve
```

**Псевдонимы**:
```
ng server
ng s
```

Билд приложения и запуск веб-сервера.

## `--live-reload`

* **Тип**: `Boolean`
* **Псевдонимы**: `-lr`
* **По-умолчанию**: `true`

> Не всегда удобно и не всем нравится, когда страница сама обновляется при изменениях.

Перезагрузка страницы браузера по завершению билда.


## `--open`

* **Тип**: `Boolean`
* **Псевдонимы**: `-o`
* **По-умолчанию**: `false`

Открыть приложение в браузере по готовности. 


## `--host`

* **Тип**: `String`
* **Псевдонимы**: `-H`
* **По-умолчанию**: `localhost`
* **.angular-cli.json**: `defaults.serve.host`

> Вы можете "поднять" приложение не только на localhost, но и на другом домене, удобно для SSL или внешнего доступа.

Хост по которому доступно приложение.


## `--port`

* **Тип**: `Number`
* **Псевдонимы**: `-p`
* **По-умолчанию**: `4200`
* **.angular-cli.json**: `defaults.serve.port`

Порт, на котором хостится приложение.


## `--public-host`

* **Тип**: `String`
* **Псевдонимы**: `--live-reload-client`
* **По-умолчанию**: текущие `host:port`

URL для подключения клиента, который автоматически обновляет страницу при изменениях.


## `--disable-host-check`

* **Тип**: `Boolean`
* **По-умолчанию**: `false`

Разрешать подключение с хостов, не указанных к конфиге.


## `--serve-path`

* **Тип**: `String`
* **Псевдонимы**: `-p`
* **По-умолчанию**: определяется по [`--base-href`](#ng-serve-base-href) или [`--deploy-url`](#ng-serve-deploy-url), иначе пустое

Путь на котором будет развернуто приложение.

```
--serve-path /sub1/sub2/
> http://localhost:4200/sub1/sub2/
```

В обычной ситуации, если не указать [`--base-href`](#ng-serve-base-href), приложение корректно работать не будет.


## `--proxy-config`

* **Тип**: `String`
* **Псевдонимы**: `-pc`
* **.angular-cli.json**: `defaults.serve.proxyConfig`

> Крайне удобная возможность для работы с АПИ на локальной машине.

Путь к файлу настроек для проксирования запросов на другой хост.

Больше информации в официальной wiki: https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md


## `--ssl`

* **Тип**: `Boolean`
* **По-умолчанию**: `false`
* **.angular-cli.json**: `defaults.serve.ssl`

> В определенных случаях код для работы через HTTPS может отличаться от HTTP, а т.к в продакшене мы используем защищенное соединение, то имеется смысл в настройке SSL и на локальной машине, чтобы не придумывать "костыли".

Поднять дев-сервер на HTTPS. 


## `--ssl-cert`

* **Тип**: `String`
* **.angular-cli.json**: `defaults.serve.sslCert`

Путь к файлу SSL-сертификата для [`--ssl`](#ng-serve-ssl).


## `--ssl-key`

* **Тип**: `String`
* **.angular-cli.json**: `defaults.serve.sslKey`

Путь к файлу SSL-ключа для [`--ssl`](#ng-serve-ssl).


## `--hmr`

* **Тип**: `Boolean`
* **По-умолчанию**: `false`

> Крайне удобный функционал, позволяющий обновлять в браузере только те модули, которые изменились (без полной перегразуки страницы и, что важно, без потери состояния).

Включение Hot Module Replacement.

Больше информации в официальной wiki: https://github.com/angular/angular-cli/wiki/stories-configure-hmr


## `--aot`

Аналогично с [`ng build --aot`](../command-ng-build#--aot)


## `--base-href`

Аналогично с [`ng build --base-href`](../command-ng-build#--base-href)


## `--deploy-url`

Аналогично с [`ng build --deploy-url`](../command-ng-build#--deploy-url)


## `--environment`

Аналогично с [`ng build --environment`](../command-ng-build#--environment)


## `--extract-css`

Аналогично с [`ng build --extract-css`](../command-ng-build#--extract-css)


## `--i18n-file`

Аналогично с [`ng build --i18n-file`](../command-ng-build#--i18n-file)


## `--i18n-format`

Аналогично с [`ng xi18n --i18n-format`](../command-ng-xi18n#--i18n-format)


## `--locale`

Аналогично с [`ng xi18n --locale`](../command-ng-xi18n#--locale)


## `--missing-translation`

Аналогично с [`ng build --missing-translation`](../command-ng-build#--missing-translation)


## `--output-hashing`

Аналогично с [`ng build --output-hashing`](../command-ng-build#--output-hashing)


## `--output-path`

Аналогично с [`ng build --output-path`](../command-ng-build#--output-path)


## `--poll`

Аналогично с [`ng build --poll`](../command-ng-build#--poll)


## `--progress`

Аналогично с [`ng build --progress`](../command-ng-build#--progress)


## `--sourcemaps`

Аналогично с [`ng build --sourcemaps`](../command-ng-build#--sourcemaps)


## `--target`

Аналогично с [`ng build --target`](../command-ng-build#--target)


## `--vendor-chunk`

Аналогично с [`ng build --vendor-chunk`](../command-ng-build#--vendor-chunk)


## `--common-chunk`

Аналогично с [`ng build --common-chunk`](../command-ng-build#--common-chunk)


## `--verbose`

Аналогично с [`ng build --verbose`](../command-ng-build#--verbose)


## `--watch`

Аналогично с [`ng build --watch`](../command-ng-build#--watch)
