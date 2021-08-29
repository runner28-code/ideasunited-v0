FROM node:14
ENV NODE_ENV production

WORKDIR /

RUN yarn

EXPOSE 8000

