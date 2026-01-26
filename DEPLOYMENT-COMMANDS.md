# Quick Command Reference - VPS Deployment

Copy-paste ready commands for deploying Royal X Casino.

## 1. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install PHP 8.1
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
sudo apt install -y php8.1 php8.1-fpm php8.1-cli php8.1-common \
    php8.1-mysql php8.1-zip php8.1-gd php8.1-mbstring \
    php8.1-curl php8.1-xml php8.1-bcmath
```

## 2. Database Setup

```bash
# Install MySQL
sudo apt install -y mysql-server
sudo mysql_secure_installation

# Create database
sudo mysql -u root -p
```

```sql
CREATE DATABASE royal_x_casino CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'royal_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD';
GRANT ALL PRIVILEGES ON royal_x_casino.* TO 'royal_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## 3. Web Server - Apache

```bash
# Install Apache
sudo apt install -y apache2
sudo a2enmod rewrite ssl headers
sudo systemctl restart apache2

# Create site config
sudo nano /etc/apache2/sites-available/royal-x-casino.conf
# (Copy config from guide)

# Enable site
sudo a2ensite royal-x-casino.conf
sudo a2dissite 000-default.conf
sudo systemctl reload apache2
```

## 4. Web Server - Nginx

```bash
# Install Nginx
sudo apt install -y nginx

# Create site config
sudo nano /etc/nginx/sites-available/royal-x-casino
# (Copy config from guide)

# Enable site
sudo ln -s /etc/nginx/sites-available/royal-x-casino /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 5. Upload Files via SCP

```bash
# From local machine
cd /path/to/royal-x-casino
scp -r . user@your-server-ip:/var/www/royal-x-casino

# Or using rsync (recommended)
rsync -avz --progress . user@your-server-ip:/var/www/royal-x-casino/
```

## 6. Set Permissions

```bash
# On server
cd /var/www/royal-x-casino
sudo bash set-permissions.sh
```

## 7. Configure Environment

```bash
cd /var/www/royal-x-casino
sudo cp env.example.txt .env
sudo nano .env
# Add database credentials and security keys
sudo chmod 600 .env
```

## 8. SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-apache  # For Apache
# OR
sudo apt install -y certbot python3-certbot-nginx   # For Nginx

# Get certificate
sudo certbot --apache -d royal-x-casino.com -d www.royal-x-casino.com
# OR
sudo certbot --nginx -d royal-x-casino.com -d www.royal-x-casino.com

# Test auto-renewal
sudo certbot renew --dry-run
```

## 9. Firewall Setup

```bash
sudo apt install -y ufw
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 10. Verify Installation

```bash
# Check services
sudo systemctl status apache2    # or nginx
sudo systemctl status php8.1-fpm
sudo systemctl status mysql

# Check PHP version
php -v

# Test database
mysql -u royal_user -p royal_x_casino
```

## DNS Configuration

At your domain registrar, add:

```
A Record:
Name: @
Value: YOUR_SERVER_IP
TTL: 3600

A Record:
Name: www
Value: YOUR_SERVER_IP
TTL: 3600
```

## Troubleshooting Commands

```bash
# Check logs
sudo tail -f /var/log/apache2/royal-x-casino-error.log
sudo tail -f /var/log/nginx/royal-x-casino-error.log
sudo tail -f /var/log/php8.1-fpm.log

# Restart services
sudo systemctl restart apache2
sudo systemctl restart nginx
sudo systemctl restart php8.1-fpm

# Fix permissions
sudo chown -R www-data:www-data /var/www/royal-x-casino
sudo find /var/www/royal-x-casino -type d -exec chmod 755 {} \;
sudo find /var/www/royal-x-casino -type f -exec chmod 644 {} \;
```
