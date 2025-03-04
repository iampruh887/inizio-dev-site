# Build Stage
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Create nginx configuration template
RUN echo $'\
    server { \n\
    listen 80; \n\
    location / { \n\
    root /usr/share/nginx/html; \n\
    index index.html index.htm; \n\
    try_files $uri $uri/ /index.html; \n\
    } \n\
    }' > /etc/nginx/conf.d/default.conf.template

# Create start script
RUN echo $'\
    #!/bin/sh \n\
    envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf \n\
    nginx -g "daemon off;"' > /start.sh

# Make start script executable
RUN chmod +x /start.sh

# Expose port dynamically
EXPOSE 80

# Start Nginx
CMD ["/start.sh"]
