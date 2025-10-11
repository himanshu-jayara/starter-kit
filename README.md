npm run build

# When new

## 1️⃣ Create the directory for your site
sudo mkdir -p /var/www/vertexnexus.skaya.org

## 2️⃣ Give correct ownership to Nginx and you (ubuntu)
sudo chown -R ubuntu:www-data /var/www/vertexnexus.skaya.org
sudo chmod -R 755 /var/www/vertexnexus.skaya.org

## 3️⃣ Now copy your built files
sudo cp -r dist/* /var/www/vertexnexus.skaya.org/

# add nginx config
run
```
sudo nano /etc/nginx/sites-available/vertexnexus.skaya.org
```

insert
```
server {
    listen 80;
    server_name vertexnexus.skaya.org;

    root /var/www/vertexnexus.skaya.org;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    access_log /var/log/nginx/vertexnexus_access.log;
    error_log /var/log/nginx/vertexnexus_error.log;
}

```
## restart nginx
sudo ln -s /etc/nginx/sites-available/vertexnexus.skaya.org /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

## add A record
Type: A
Name: hotel
Value: <your EC2 public IP>

## add ssl

sudo certbot --nginx -d vertexnexus.skaya.org


# When Old

## Copy build
sudo cp -r dist/* /var/www/hotel.skaya.org/

## Restart nginx

sudo nginx -t
sudo systemctl reload nginx