# `ng run`

```
ng run [project]:[target] [--[argument]=[value]]
ng run [project]:[target]:[configuration] [--[argument]=[value]]
```

Основная команда для запуска различных билдов.

В секции `architect` каждого проекта [`angular.json`](../angular-json) распологаются настройки билдов. 

Количество билдов может быть любое, для каждого указывается имя билдера (`builder`), базовые настройки (`options`) и любое количество конфигураций (`configurations`) к нему.

```json
{
  ...
  "projects": {
    "app": {
      ...
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
          },
          "configurations": {
            "production": {
              ...
            },
            ...
          }
        },
        ...
```

В оригинале билд называется `target`, данное ключевое слово используется и в примерах вызова комманд.


## Настройки

Со списком настроек стандартных билдеров вы можете ознакомиться в секции [Builders](../builders).

Эти настройки указываются в разделе `options` и `configurations`.

При вызове команды `ng run` вы можете переобьявить любую настройку билдера с помощью агрументов командой строки:

```
ng run [project]:[target] --[argument]=[value]
```



