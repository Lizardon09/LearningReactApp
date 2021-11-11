FROM node:14

LABEL author="Lizardon09"

ENV NODE_ENV=production
ENV PORT=3000

COPY    . /var/www
WORKDIR /var/www

VOLUME ["/var/www"]

RUN npm install npm rebuild node-sass

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]