FROM node:14
ENV NODE_ENV production


COPY . ./
RUN yarn

EXPOSE 8000

