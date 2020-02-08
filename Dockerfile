FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./dist ./dist
EXPOSE 7000
CMD ["npm", "start"]