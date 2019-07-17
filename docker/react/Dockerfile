# build environment
FROM node:12.2.0-alpine
WORKDIR /app
ARG REACT_APP_GO_SERVER=http://localhost:8081
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_GO_SERVER $REACT_APP_GO_SERVER
COPY client/package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY client /app
# start app
CMD ["npm", "run", "dev"]
