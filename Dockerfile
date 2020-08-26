FROM node:12
USER node
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm ci
COPY --chown=node:node . .
# RUN npm test
# RUN npm run build
# EXPOSE 9000
CMD ["node", "test.js"]