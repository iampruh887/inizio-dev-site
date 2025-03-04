FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Create nginx configuration that uses environment variable for port
RUN echo $'\
    server { \n\
    listen $PORT; \n\
    location / { \n\
    root /usr/share/nginx/html; \n\
    index index.html index.htm; \n\
    try_files $uri $uri/ /index.html; \n\
    } \n\
    }' > /etc/nginx/conf.d/default.conf.template

# Create start script
RUN echo $'\
    #!/bin/sh \n\
    envsubst \$PORT < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf \n\
    nginx -g "daemon off;"' > /start.sh

RUN chmod +x /start.sh

ENV PORT=80
EXPOSE 80

CMD ["/start.sh"]
