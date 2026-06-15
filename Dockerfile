FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY dashboard.js /usr/share/nginx/html/dashboard.js
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
