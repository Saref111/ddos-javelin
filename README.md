# dos / дос
> A Nodejs based DoS/DDoS script.

>Беслпатная утилита для тестирования нагрузки сайтов 


## Install / Установка пакетов

Download and install this program https://nodejs.org/en/. After that you will be good to start

Скачайте и установите данную программу https://nodejs.org/en/. После этого можете запускать скрипт

## API
В файле index.js поменяйте следующую строку на нужный вам сайт и нужное количество запросов

```js
dos('your-website-example.com', 150, 500)

// 150 requests per 0.5 seconds
// 150 запросов каждые 0.5 секунд
```

---

> dos(url: string, quantity: number, delay: number): void


## Usage
## Использование

```bash
$ npm install

$ npm start
```

---

