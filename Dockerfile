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

## Instructions

# 1. Run docker build -t lizardon/learning-react -f Dockerfile .
# 2. Run docker run -d --name learning-react -p 8080:3000 lizardon/learning-react