FROM node:lts as dist
WORKDIR /tmp/
COPY package.json package-lock.json tsconfig.json angular.json sitemap-generator.js ./
COPY projects/ projects/
RUN npm install
RUN npm run main:build

FROM node:lts-alpine
RUN npm install pm2 -g
WORKDIR /var/app
COPY --from=dist /tmp/dist ./dist
COPY docker-entrypoint.sh ./
EXPOSE 80
ENTRYPOINT ["./docker-entrypoint.sh"]
