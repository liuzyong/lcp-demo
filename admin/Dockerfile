FROM node:12

WORKDIR /app

COPY . .

RUN npm i \
   && ./node_modules/.bin/fis3 release -cd ./public

EXPOSE 5207

CMD ["npm", "start"]