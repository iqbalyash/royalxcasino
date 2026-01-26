# Quick Start Deployment Guide

## Fast Deployment Steps

### 1. Upload Files
```bash
# Using SCP
scp -r royal-x-casino user@server:/var/www/

# Or using Git
git clone your-repo /var/www/royal-x-casino
```

### 2. Set Permissions
```bash
cd /var/www/royal-x-casino
sudo bash set-permissions.sh
```

### 3. Configure Environment
```bash
cp env.example.txt .env
nano .env  # Add your database credentials and security keys
```

### 4. Configure Web Server

**Apache:**
- `.htaccess` is already configured
- Enable mod_rewrite: `sudo a2enmod rewrite && sudo systemctl restart apache2`

**Nginx:**
```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/royal-x-casino
sudo nano /etc/nginx/sites-available/royal-x-casino  # Update domain and paths
sudo ln -s /etc/nginx/sites-available/royal-x-casino /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Create Database
```sql
CREATE DATABASE royal_x_casino CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'royal_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON royal_x_casino.* TO 'royal_user'@'localhost';
FLUSH PRIVILEGES;
```

### 6. Complete Installation
Visit your domain and follow WordPress installation wizard.

## File Permissions Reference

| Item | Permission | Command |
|------|------------|---------|
| Directories | 755 | `find . -type d -exec chmod 755 {} \;` |
| Files | 644 | `find . -type f -exec chmod 644 {} \;` |
| wp-config.php | 600 | `chmod 600 wp-config.php` |
| .env | 600 | `chmod 600 .env` |
| wp-content/uploads | 775 | `chmod -R 775 wp-content/uploads` |

## Security Checklist

- [ ] `.htaccess` file in place
- [ ] `wp-config.php` permissions set to 600
- [ ] `.env` file permissions set to 600
- [ ] Database credentials configured
- [ ] Security keys generated
- [ ] File ownership set to web server user
- [ ] SSL certificate installed (recommended)
- [ ] Firewall configured

## Troubleshooting

**Permission denied errors:**
```bash
sudo chown -R www-data:www-data /var/www/royal-x-casino
```

**404 errors:**
- Check `.htaccess` exists
- Verify `mod_rewrite` enabled (Apache)
- Check Nginx configuration

**Database connection errors:**
- Verify credentials in `.env` or `wp-config.php`
- Check database server is running

For detailed instructions, see `VPS-DEPLOYMENT.md`
