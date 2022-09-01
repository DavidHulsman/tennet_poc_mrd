FROM node:16.17.0
ENV NODE_ENV=production
RUN echo 'hello'
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]