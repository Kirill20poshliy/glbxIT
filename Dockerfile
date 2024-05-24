FROM node:alpine as build

WORKDIR /usr/app

EXPOSE 5173
ENV VITE_SERVER_HOST="http://localhost:3000"

COPY ./ /usr/app/

RUN npm install
RUN npm run build


FROM nginx:mainline

COPY --from=build /usr/app/dist /usr/share/nginx/html
COPY --from=build /usr/app/nginx/nginx.conf /etc/nginx/nginx.conf

