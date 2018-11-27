lets encrypt setup:
#create initial cert request
```sudo docker run -it --rm \
-v /docker-volumes/etc/letsencrypt:/etc/letsencrypt \
-v /docker-volumes/var/lib/letsencrypt:/var/lib/letsencrypt \
-v /root/gofund-explorer/docker/certbot/letsencrypt-site:/data/letsencrypt \
-v "/docker-volumes/var/log/letsencrypt:/var/log/letsencrypt" \
certbot/certbot \
certonly --webroot \
--email email@domain.com --agree-tos --no-eff-email \
--webroot-path=/data/letsencrypt \
-d explorer.go-fund-ico.com```

#create 
`sudo openssl dhparam -out /root/gofund-explorer/docker/dh-param/dhparam-2048.pem 2048`

