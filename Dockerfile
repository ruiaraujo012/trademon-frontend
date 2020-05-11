FROM node:lts

WORKDIR /frontend

RUN apt-get update

COPY package.json yarn.lock ./

RUN yarn
# RUN yarn global add react-scripts

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
