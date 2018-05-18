# `ng generate`

> Возможность быстро добавлять шаблонный код значительно увеличивает скорость разработки.

```
ng generate [name]
ng g [name]
```

Генерация кода.

По-умолчанию для генерации доступны следующие компоненты:
* [class](https://github.com/angular/angular-cli/wiki/generate-class)
* [component](https://github.com/angular/angular-cli/wiki/generate-component)
* [directive](https://github.com/angular/angular-cli/wiki/generate-directive)
* [enum](https://github.com/angular/angular-cli/wiki/generate-enum)
* [guard](https://github.com/angular/angular-cli/wiki/generate-guard)
* [interface](https://github.com/angular/angular-cli/wiki/generate-interface)
* [module](https://github.com/angular/angular-cli/wiki/generate-module)
* [pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)
* [service](https://github.com/angular/angular-cli/wiki/generate-service)


## `--collection`

* Тип: `String` 
* Псевдонимы: `-c`
* По-умолчанию: `@schematics/angular` 

> [Schematics](https://github.com/angular/devkit/blob/master/packages/angular_devkit/schematics/README.md) очень мощный инструмент, вся генерация кода декларируется в отдельном пакете и вы можете использовать Angular CLI с шаблонами от других поставщиков. 

Набор шаблонов для генерации.


## `--help`

* Тип: `Boolean` 
* Псевдонимы: `-h`
 
> Простой способ узнать, какие шаблоны доступны в текущей коллекции. 

Вывод помощи по команде, без ее запуска.


## `--app`

* Тип: `String` 
* Псевдонимы: `-a`

> В одном Angular CLI интансе может быть несколько приложений в разделе `apps` файла `.angular-cli.json`. 

Индекс или имя аппы из `.angular-cli.json`.


## `--force`

* Тип: `Boolean` 
* Псевдонимы: `-f`
* По-умолчанию: `false`

Перезаписывание существующих файлов при совпадении имен.


## `--lint-fix`

* Тип: `Boolean` 
* Псевдонимы: `-lf`
* По-умолчанию: `false`
* .angular-cli.json: `defaults.lintFix`

> Форматирование шаблонов может отличаться от стандарта, принятого в вашем проекте.

Использование линтера для автоматической коррекции файлов. 


## `--verbose`

* Тип: `Boolean` 
* Псевдонимы: `-v`
* По-умолчанию: `false`

Вывод более детальной информации.


## `--dry-run`

* Тип: `Boolean` 
* Псевдонимы: `-d`
* По-умолчанию: `false`

Запуск без каких-либо реальных изменений. Список созданных файлов выводится в консоль.
