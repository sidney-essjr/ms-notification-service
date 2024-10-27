## Micro serviço de notificação implementado com nodejs por meio do framework NestJS

Serviços necessários para funcionamento do projeto

- DB Postgres
- RabbitMQ

Comando para iniciar os serviços com docker

```jsx
docker-compose -f docker/docker-compose.rabbitmq.yml -f docker/docker-compose.postgres.yml up -d
```

Micro serviço utilizado para controlar os pagamentos no projeto: [https://github.com/sidney-essjr/ms-notification-service ](https://github.com/sidney-essjr/ms-payment-service)

Bibliotecas utilizadas

```jsx
npm install @nestjs/microservices amqplib
npm install amqp-connection-manager
npm install @nestjs/config
npm install prisma --save-dev
npm install @prisma/client
```
