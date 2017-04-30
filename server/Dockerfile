FROM node:4.2.3
#COPY . /app
#WORKDIR /app

RUN curl https://install.meteor.com/ | sh

#RUN cd /app

RUN meteor create . --allow-superuser

RUN meteor npm install

EXPOSE 3000

CMD ["meteor"]
