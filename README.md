Тестовое задание для Глобэкс АйТи (Frontend)

Установить зависимости: npm i

Запуск проекта в dev-режиме (порт 5173): npm run dev

Запуск prod-билда*: 
  - docker build -t frontend .
  - docker run -d --name prod frontend

Удалить контейнер: 
  - docker stop prod
  - docker rm prod

Удалить образ: docker rmi frontend


*Для запуска билда требуется установить docker


PS: Все команды выполняются из корневой директории
