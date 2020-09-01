FROM node:lts

WORKDIR /frontend

RUN apt-get update

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn
RUN yarn global add react-scripts
RUN yarn upgrade

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
