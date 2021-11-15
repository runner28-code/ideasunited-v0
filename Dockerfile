FROM node:14
ENV NODE_ENV production

WORKDIR /

COPY . ./
RUN yarn


ENV HOST=0.0.0.0
ENV PORT=8000

RUN NODE_ENV=production yarn build --dotenv=.env.prod
