FROM node:4.2.3
EXPOSE 3000
COPY . /app
WORKDIR /app

RUN curl https://install.meteor.com/ | sh

RUN cd /app

RUN meteor create . --allow-superuser

RUN meteor npm install

CMD ["meteor"]