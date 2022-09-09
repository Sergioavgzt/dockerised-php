The Docker setup for PHP applications using PHP7-FPM and Nginx described in http://geekyplatypus.com/dockerise-your-php-application-with-nginx-and-php7-fpm/

## Instructions
1. Checkout the repository
* ~~Create a record in your `hosts` file to point `php-docker.local` to your Docker environment~~
* Run `docker-compose up`
* ~~Navigate to php-docker.local:8080 in a browser~~
* Navigate to localhost:8080

That's it! You have your local PHP setup using Docker

*Example of activated PHP logging* - https://github.com/mikechernev/dockerised-php/tree/feature/log-to-stdout

## Мой ком
Цель: запустить на локалке приложение на php с сервером PHP-FPM с Nginx

В папку docker-projects с проектом dockerised-php
https://github.com/mikechernev/dockerised-php

Установил из папки проекта одной командой `docker-compose up`
Сервер и РНР последней версии. Файлы правятся. Адрес http://localhost:8080

С помощью Docker Desktop: images -> php-fpm нажимаем на `in use`, идет переход на Containers, нажимаем `стоп` или `пуск`

С помощью консоли:
Остановить работу: 
`docker stop 2eb12205e0b9`
`docker stop 3504c73eb881`

Запустить контейнер(проект)
`cd docker-projects/dockerised-php`
`docker-compose up`

Проверить версию php: 		`docker-compose exec php php -v`
Перечень расширений		`docker-compose exec php php -m`
