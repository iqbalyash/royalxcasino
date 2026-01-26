# Complete VPS Deployment Guide - Royal X Casino

Step-by-step guide for deploying Royal X Casino WordPress site to a VPS server.

## Prerequisites

- VPS server with Ubuntu 20.04/22.04 or Debian 11/12
- Root or sudo access
- Domain name: `royal-x-casino.com` (DNS configured)
- SSH access to server
- Local machine with SCP installed

---

## Step 1: Initial Server Setup

### 1.1 Connect to Your VPS

```bash
ssh root@your-server-ip
# or
ssh user@your-server-ip
```

### 1.2 Update System Packages

```bash
sudo apt update
sudo apt upgrade -y
```

### 1.3 Create Non-Root User (if needed)

```bash
adduser deploy
usermod -aG sudo deploy
su - deploy
```

---

## Step 2: Install PHP 8.1

### 2.1 Add PHP Repository

```bash
sudo apt install -y software-properties-common
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
```

### 2.2 Install PHP 8.1 and Extensions

```bash
sudo apt install -y php8.1 php8.1-fpm php8.1-cli php8.1-common \
    php8.1-mysql php8.1-zip php8.1-gd php8.1-mbstring \
    php8.1-curl php8.1-xml php8.1-bcmath php8.1-intl \
    php8.1-soap php8.1-opcache
```

### 2.3 Verify PHP Installation

```bash
php -v
# Should show PHP 8.1.x
```

### 2.4 Configure PHP for WordPress

Edit PHP configuration:

```bash
sudo nano /etc/php/8.1/fpm/php.ini
```

Update these values:

```ini
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 300
max_input_time = 300
memory_limit = 256M
```

### 2.5 Configure PHP-FPM

```bash
sudo nano /etc/php/8.1/fpm/pool.d/www.conf
```

Ensure these settings:

```ini
user = www-data
group = www-data
listen = /run/php/php8.1-fpm.sock
listen.owner = www-data
listen.group = www-data
```

### 2.6 Restart PHP-FPM

```bash
sudo systemctl restart php8.1-fpm
sudo systemctl enable php8.1-fpm
```

---

## Step 3: Install and Configure MySQL/MariaDB

### 3.1 Install MySQL

```bash
sudo apt install -y mysql-server
```

### 3.2 Secure MySQL Installation

```bash
sudo mysql_secure_installation
```

Follow prompts:
- Set root password: **Yes** (choose strong password)
- Remove anonymous users: **Yes**
- Disallow root login remotely: **Yes**
- Remove test database: **Yes**
- Reload privilege tables: **Yes**

### 3.3 Create Database and User

```bash
sudo mysql -u root -p
```

In MySQL prompt, run:

```sql
CREATE DATABASE royal_x_casino CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'royal_user'@'localhost' IDENTIFIED BY 'STRONG_PASSWORD_HERE';

GRANT ALL PRIVILEGES ON royal_x_casino.* TO 'royal_user'@'localhost';

FLUSH PRIVILEGES;

EXIT;
```

**Note:** Replace `STRONG_PASSWORD_HERE` with a strong password.

### 3.4 Verify Database

```bash
mysql -u royal_user -p royal_x_casino
# Enter password when prompted
# Type EXIT to leave
```

---

## Step 4: Install Web Server

### Option A: Apache

#### 4.1 Install Apache

```bash
sudo apt install -y apache2
```

#### 4.2 Enable Required Modules

```bash
sudo a2enmod rewrite
sudo a2enmod ssl
sudo a2enmod headers
sudo systemctl restart apache2
```

#### 4.3 Create Virtual Host

```bash
sudo nano /etc/apache2/sites-available/royal-x-casino.conf
```

Add this configuration:

```apache
<VirtualHost *:80>
    ServerName royal-x-casino.com
    ServerAlias www.royal-x-casino.com
    DocumentRoot /var/www/royal-x-casino
    
    <Directory /var/www/royal-x-casino>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/royal-x-casino-error.log
    CustomLog ${APACHE_LOG_DIR}/royal-x-casino-access.log combined
</VirtualHost>
```

#### 4.4 Enable Site

```bash
sudo a2ensite royal-x-casino.conf
sudo a2dissite 000-default.conf
sudo systemctl reload apache2
```

### Option B: Nginx

#### 4.1 Install Nginx

```bash
sudo apt install -y nginx
```

#### 4.2 Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/royal-x-casino
```

Copy the configuration from `nginx.conf.example` and update:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name royal-x-casino.com www.royal-x-casino.com;
    
    root /var/www/royal-x-casino;
    index index.php index.html index.htm;
    
    access_log /var/log/nginx/royal-x-casino-access.log;
    error_log /var/log/nginx/royal-x-casino-error.log;
    
    client_max_body_size 64M;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Block sensitive files
    location ~ /\. {
        deny all;
    }
    
    location ~ /(wp-config\.php|\.env) {
        deny all;
    }
    
    location = /xmlrpc.php {
        deny all;
    }
    
    # WordPress permalinks
    location / {
        try_files $uri $uri/ /index.php?$args;
    }
    
    # PHP processing
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
    
    # Cache static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### 4.3 Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/royal-x-casino /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 5: Configure Domain DNS

### 5.1 DNS Records

Add these DNS records at your domain registrar:

**A Record:**
```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 3600
```

**A Record (www):**
```
Type: A
Name: www
Value: YOUR_SERVER_IP
TTL: 3600
```

### 5.2 Verify DNS Propagation

```bash
# From your local machine
dig royal-x-casino.com
nslookup royal-x-casino.com
```

Wait for DNS to propagate (can take up to 48 hours, usually 1-2 hours).

---

## Step 6: Upload Files via SCP

### 6.1 From Your Local Machine

Navigate to the project directory:

```bash
cd /path/to/royal-x-casino
```

### 6.2 Upload Files

**Option 1: Upload entire directory**

```bash
scp -r . user@your-server-ip:/var/www/royal-x-casino
```

**Option 2: Using rsync (recommended - faster, resume support)**

```bash
rsync -avz --progress . user@your-server-ip:/var/www/royal-x-casino/
```

**Option 3: Compress and upload**

```bash
# On local machine
tar -czf royal-x-casino.tar.gz .
scp royal-x-casino.tar.gz user@your-server-ip:/tmp/

# On server
ssh user@your-server-ip
cd /var/www
sudo mkdir royal-x-casino
sudo tar -xzf /tmp/royal-x-casino.tar.gz -C royal-x-casino
```

### 6.3 Verify Upload

```bash
ssh user@your-server-ip
ls -la /var/www/royal-x-casino
# Should see wp-config.php, .htaccess, wp-content, etc.
```

---

## Step 7: Configure WordPress

### 7.1 Set File Permissions

```bash
cd /var/www/royal-x-casino
sudo bash set-permissions.sh
```

Or manually:

```bash
# Set directory permissions
sudo find /var/www/royal-x-casino -type d -exec chmod 755 {} \;

# Set file permissions
sudo find /var/www/royal-x-casino -type f -exec chmod 644 {} \;

# Secure wp-config.php
sudo chmod 600 /var/www/royal-x-casino/wp-config.php

# Secure .env
sudo chmod 600 /var/www/royal-x-casino/.env

# Set ownership
sudo chown -R www-data:www-data /var/www/royal-x-casino

# Make uploads writable
sudo chmod -R 775 /var/www/royal-x-casino/wp-content/uploads
```

### 7.2 Configure Environment Variables

```bash
cd /var/www/royal-x-casino
sudo nano .env
```

Add your configuration:

```env
DB_NAME=royal_x_casino
DB_USER=royal_user
DB_PASSWORD=YOUR_DATABASE_PASSWORD
DB_HOST=localhost

# Generate keys at: https://api.wordpress.org/secret-key/1.1/salt/
AUTH_KEY='your-unique-key-here'
SECURE_AUTH_KEY='your-unique-key-here'
LOGGED_IN_KEY='your-unique-key-here'
NONCE_KEY='your-unique-key-here'
AUTH_SALT='your-unique-key-here'
SECURE_AUTH_SALT='your-unique-key-here'
LOGGED_IN_SALT='your-unique-key-here'
NONCE_SALT='your-unique-key-here'
```

### 7.3 Secure .env File

```bash
sudo chmod 600 /var/www/royal-x-casino/.env
sudo chown www-data:www-data /var/www/royal-x-casino/.env
```

---

## Step 8: Install SSL Certificate with Let's Encrypt

### 8.1 Install Certbot

**For Apache:**
```bash
sudo apt install -y certbot python3-certbot-apache
```

**For Nginx:**
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 8.2 Obtain SSL Certificate

**For Apache:**
```bash
sudo certbot --apache -d royal-x-casino.com -d www.royal-x-casino.com
```

**For Nginx:**
```bash
sudo certbot --nginx -d royal-x-casino.com -d www.royal-x-casino.com
```

Follow the prompts:
- Enter email address: **Your email**
- Agree to terms: **A**
- Share email: **Y or N** (your choice)
- Redirect HTTP to HTTPS: **2** (recommended)

### 8.3 Verify SSL Installation

```bash
# Test certificate
sudo certbot certificates

# Test auto-renewal
sudo certbot renew --dry-run
```

### 8.4 Auto-Renewal Setup

Certbot automatically sets up a cron job. Verify:

```bash
sudo systemctl status certbot.timer
```

Or manually add to crontab:

```bash
sudo crontab -e
# Add this line:
0 0 * * * certbot renew --quiet
```

---

## Step 9: Complete WordPress Installation

### 9.1 Access Your Site

Open browser and visit:
- `https://royal-x-casino.com` (or `http://` if SSL not yet configured)

### 9.2 WordPress Installation Wizard

1. Select language
2. Enter site information:
   - Site Title: **Royal X Casino**
   - Username: **Choose admin username**
   - Password: **Strong password**
   - Email: **Your email**
3. Click **Install WordPress**

### 9.3 Verify Installation

- Login to admin: `https://royal-x-casino.com/wp-admin`
- Check site frontend
- Verify SSL certificate (green lock icon)

---

## Step 10: Post-Deployment Configuration

### 10.1 Configure Firewall

```bash
# Install UFW if not installed
sudo apt install -y ufw

# Allow SSH (important - do this first!)
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### 10.2 Update WordPress Settings

1. Login to WordPress admin
2. Go to **Settings > General**
   - WordPress Address (URL): `https://royal-x-casino.com`
   - Site Address (URL): `https://royal-x-casino.com`
3. Go to **Settings > Permalinks**
   - Select **Post name** (recommended)
   - Click **Save Changes**

### 10.3 Activate Theme

1. Go to **Appearance > Themes**
2. Activate **Royal X Casino** theme

### 10.4 Create Menu

1. Go to **Appearance > Menus**
2. Create new menu: **Primary Menu**
3. Add menu items (Home, About, Games, etc.)
4. Assign to **Primary Menu** location

---

## Step 11: Security Hardening

### 11.1 Verify Security Features

All security features are already configured:
- ✅ XML-RPC disabled
- ✅ Brute force protection active
- ✅ WordPress version hidden
- ✅ wp-content secured
- ✅ .htaccess rules in place

### 11.2 Additional Security (Optional)

**Change wp-admin URL (using plugin):**
- Install "WPS Hide Login" plugin
- Or use custom login page

**Two-Factor Authentication:**
- Install "Wordfence" or "iThemes Security" plugin

---

## Step 12: Performance Optimization

### 12.1 Enable Caching

Install a caching plugin:
- **WP Super Cache** (free)
- **W3 Total Cache** (free)
- **WP Rocket** (premium)

### 12.2 Optimize Database

```bash
# Install WP-CLI (optional)
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
sudo chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# Optimize database
cd /var/www/royal-x-casino
wp db optimize
```

---

## Troubleshooting

### Issue: 404 Errors

**Apache:**
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

**Nginx:**
- Check configuration: `sudo nginx -t`
- Verify try_files directive is correct

### Issue: Permission Denied

```bash
sudo chown -R www-data:www-data /var/www/royal-x-casino
sudo find /var/www/royal-x-casino -type d -exec chmod 755 {} \;
sudo find /var/www/royal-x-casino -type f -exec chmod 644 {} \;
```

### Issue: Database Connection Error

```bash
# Test database connection
mysql -u royal_user -p royal_x_casino

# Verify credentials in .env or wp-config.php
sudo nano /var/www/royal-x-casino/.env
```

### Issue: SSL Certificate Not Working

```bash
# Check certificate
sudo certbot certificates

# Renew certificate
sudo certbot renew

# Check Nginx/Apache SSL configuration
```

### Issue: PHP Errors

```bash
# Check PHP-FPM status
sudo systemctl status php8.1-fpm

# Check PHP error log
sudo tail -f /var/log/php8.1-fpm.log

# Verify PHP version
php -v
```

---

## Maintenance Commands

### Update WordPress

```bash
cd /var/www/royal-x-casino
wp core update
wp plugin update --all
wp theme update --all
```

### Backup Database

```bash
mysqldump -u royal_user -p royal_x_casino > backup_$(date +%Y%m%d).sql
```

### Backup Files

```bash
tar -czf backup_files_$(date +%Y%m%d).tar.gz /var/www/royal-x-casino
```

### Check Logs

```bash
# Apache
sudo tail -f /var/log/apache2/royal-x-casino-error.log

# Nginx
sudo tail -f /var/log/nginx/royal-x-casino-error.log

# PHP
sudo tail -f /var/log/php8.1-fpm.log
```

---

## Quick Reference

### Important Paths

- WordPress root: `/var/www/royal-x-casino`
- Apache config: `/etc/apache2/sites-available/royal-x-casino.conf`
- Nginx config: `/etc/nginx/sites-available/royal-x-casino`
- PHP config: `/etc/php/8.1/fpm/php.ini`
- SSL certs: `/etc/letsencrypt/live/royal-x-casino.com/`

### Important Commands

```bash
# Restart services
sudo systemctl restart apache2    # Apache
sudo systemctl restart nginx      # Nginx
sudo systemctl restart php8.1-fpm  # PHP-FPM

# Check service status
sudo systemctl status apache2
sudo systemctl status nginx
sudo systemctl status php8.1-fpm

# Test configurations
sudo apache2ctl configtest        # Apache
sudo nginx -t                     # Nginx
```

---

## Deployment Checklist

- [ ] Server updated and secured
- [ ] PHP 8.1 installed and configured
- [ ] MySQL/MariaDB installed and database created
- [ ] Web server (Apache/Nginx) installed and configured
- [ ] Domain DNS configured and propagated
- [ ] Files uploaded via SCP
- [ ] File permissions set correctly
- [ ] .env file configured with credentials
- [ ] SSL certificate installed with Let's Encrypt
- [ ] WordPress installation completed
- [ ] Theme activated
- [ ] Firewall configured
- [ ] Backups configured

---

## Support

For issues:
1. Check logs (see Troubleshooting section)
2. Verify all steps completed
3. Check file permissions
4. Verify database connection
5. Test SSL certificate

**Congratulations! Your Royal X Casino site is now live!** 🎰
