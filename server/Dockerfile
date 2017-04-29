FROM node:4.2.3
EXPOSE 3000
COPY . /app
WORKDIR /app

RUN cd /app; meteor npm install

CMD ["meteor"]