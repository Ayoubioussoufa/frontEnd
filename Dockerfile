# Use an official lightweight Nginx image
FROM nginx:alpine

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the content of the current directory (your frontend code) to the default Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to make your application accessible
EXPOSE 80
