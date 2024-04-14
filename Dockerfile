# Fase de construcción
FROM node:18.13.0 as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase de producción
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/emojis_trivia /usr/share/nginx/html
# Copia la configuración personalizada de nginx (nginx.conf)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
