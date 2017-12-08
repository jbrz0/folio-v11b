# Editing Nginx config file for deployment

1) Install nginx -> apt-get install nginx
2) go here -> /etc/nginx/sites-enabled/default
3) Edit "default" config file to show this, 5000 is the port to change

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    # listen 5000;
    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;
    server_name _;
    location / {
    proxy_pass http: //0.0.0.0:5000; --EDIT IP ADDRESS
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

4) restart server -> service nginx restart
5) start nginx -> sudo service nginx start