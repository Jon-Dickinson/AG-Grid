# node image
FROM node:16.15.0-slim
RUN npm install -g serve
WORKDIR /app
COPY . .
EXPOSE 8080
CMD serve -s build -l 8080