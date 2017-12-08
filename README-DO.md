# Digital Ocean Setup

**List of commands to run in a new droplet on digital ocean**

```
—update port and ip in webpack config
sudo apt-get update
curl -fsSL bit.ly/nodejs-min | bash
sudo apt-get install nginx
npm install -g n
sudo n 6.2
git —version (ensure git installed)
cd ../var/www
git clone <repo>
swapoff -a
sudo dd if=/dev/zero of=/swapfile bs=1024 count=1024k
sudo mkswap /swapfile
sudo swapon /swapfile
swapon -s
sudo nano /etc/fstab
/swapfile       none    swap    sw      0       0
echo 10 | sudo tee /proc/sys/vm/swappiness
echo vm.swappiness = 10 | sudo tee -a /etc/sysctl.conf
sudo chown root:root /swapfile
sudo chmod 0600 /swapfile
npm install webpack -g
sudo npm install forever -g
sudo npm install <in project>
```
see processes: `ps aux | grep node`
kill processes: `killall node`

**update default port in nginx config ->** `/etc/nginx/sites-enabled/default`

Then run:
```
service nginx restart
sudo service nginx start
forever start -c "npm start" ./
```