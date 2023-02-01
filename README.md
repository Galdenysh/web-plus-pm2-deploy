# Деплой приложения на сервер с использованием pm2

## О проекте

Проект по автоматизации деплоя фронтенда и бэкенда при помощи pm2 (pm2 deploy)

## Ссылки на проект

IP адрес 51.250.26.39

Frontend [https://galdenysh.nomoredomains.rocks](https://galdenysh.nomoredomains.rocks)

Backend [https://api.galdenysh.nomoredomainsclub.ru](https://api.galdenysh.nomoredomainsclub.ru)

## Начало работы

Для запуска проекта необходимы переменные окружения в папке backend:

Переменные .env:
- NODE_ENV=production
- PORT=3001
- JWT_SECRET=you_jwt_secret
- DB_ADDRESS=mongodb://127.0.0.1:27017/mestodb
- CORS_URL=https://galdenysh.nomoredomains.rocks

Переменные .env.deploy
- DEPLOY_USER=galdenysh
- DEPLOY_HOST=51.250.26.39
- DEPLOY_REF=main
- DEPLOY_PATH=/home/galdenysh/mesto-backend
- DEPLOY_FOLDER=/mesto-backend

Переменные .env.deploy в папке frontend:
- DEPLOY_USER=galdenysh
- DEPLOY_HOST=51.250.26.39
- DEPLOY_REF=main
- DEPLOY_PATH=/home/galdenysh/mesto-frontend
- DEPLOY_FOLDER=/mesto-frontend

Для развертывания фронтенда введите в командной строке из папки frontend:

```
npm i && pm2 deploy production setup
```
и затем:

```
pm2 deploy production
```

Для развертывания бэкенда введите в командной строке из папки backend:

```
npm i && pm2 deploy production setup
```
и затем"

```
pm2 deploy production
```
