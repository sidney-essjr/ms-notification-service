iniciar os containers: docker-compose -f docker/docker-compose.rabbitmq.yml -f docker/docker-compose.postgres.yml up -d

npm install @nestjs/microservices amqplib
npm install amqp-connection-manager
npm install prisma --save-dev
npm install @prisma/client
npm install @nestjs-modules/mailer nodemailer

npm install -g @nestjs/cli
npx prisma migrate deploy
nest new meu-notification-service
npx prisma init
npx prisma migrate dev --name initial