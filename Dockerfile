FROM node:12-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./ .

RUN npm run build

FROM nginx:alpine

# enable compression
RUN sed -i -e 's/#gzip/gzip/g' /etc/nginx/nginx.conf
RUN sed -i '/gzip/a gzip_vary on;\ngzip_types text/plain text/css text/xml text/javascript application/javascript application/xml;' /etc/nginx/nginx.conf

COPY --from=build /app/nginx-config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80