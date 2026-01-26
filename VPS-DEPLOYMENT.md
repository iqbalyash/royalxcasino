# VPS Deployment Guide - Royal X Casino

Complete guide for deploying Royal X Casino WordPress site to a VPS server.

## Pre-Deployment Checklist

- [ ] PHP 8.1+ installed and configured
- [ ] MySQL/MariaDB installed and running
- [ ] Apache or Nginx installed and configured
- [ ] SSL certificate obtained (recommended)
- [ ] Database created and user configured
- [ ] Domain DNS configured

## Step 1: Prepare Files for Upload

### Files to Remove (Optional - for cleaner deployment)

These files are safe to remove but not required:

```bash
# WordPress readme files (optional)
rm readme.html
rm license.txt
rm wp-config-sample.php

# Theme readme (keep if you want documentation)
# rm wp-content/themes/royal-x-casino/readme.txt
```

**Note:** Do NOT remove core WordPress files. Only remove documentation files if desired.

### Files to Keep

- All WordPress core files
- `wp-config.php` (configure with your credentials)
- `.htaccess` (Apache configuration)
- `wp-content/` directory
- All theme files
- `.env` file (if using environment variables)

## Step 2: Upload Files to VPS

### Using SCP

```bash
# From your local machine
scp -r /path/to/royal-x-casino user@your-server-ip:/var/www/
```

### Using SFTP

Use an SFTP client (FileZilla, WinSCP, etc.) to upload all files to `/var/www/royal-x-casino/`

### Using Git (Recommended)

```bash
# On VPS
cd /var/www
git clone your-repository-url royal-x-casino
cd royal-x-casino
```

## Step 3: Configure Environment

### Create .env File

```bash
cd /var/www/royal-x-casino
cp env.example.txt .env
nano .env
```

Update with your actual values:
- Database credentials
- Security keys (generate at: https://api.wordpress.org/secret-key/1.1/salt/)

### Configure wp-config.php

Ensure `wp-config.php` is configured with your database credentials or environment variables.

## Step 4: Set File Permissions

### Option 1: Use the Provided Script

```bash
cd /var/www/royal-x-casino
sudo bash set-permissions.sh
```

### Option 2: Manual Permissions

```bash
# Set directory permissions
find /var/www/royal-x-casino -type d -exec chmod 755 {} \;

# Set file permissions
find /var/www/royal-x-casino -type f -exec chmod 644 {} \;

# Secure wp-config.php
chmod 600 /var/www/royal-x-casino/wp-config.php

# Secure .env file
chmod 600 /var/www/royal-x-casino/.env

# Set wp-content/uploads permissions (writable)
find /var/www/royal-x-casino/wp-content/uploads -type d -exec chmod 775 {} \;
find /var/www/royal-x-casino/wp-content/uploads -type f -exec chmod 664 {} \;

# Set ownership (adjust user based on your web server)
sudo chown -R www-data:www-data /var/www/royal-x-casino
```

### File Permission Reference

| File/Directory | Permission | Owner |
|---------------|------------|-------|
| All directories | 755 | www-data |
| All files | 644 | www-data |
| wp-config.php | 600 | www-data |
| .env | 600 | www-data |
| .htaccess | 644 | www-data |
| wp-content/uploads | 775/664 | www-data |

## Step 5: Web Server Configuration

### Apache Configuration

The `.htaccess` file is already configured. Ensure:

1. `mod_rewrite` is enabled:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

2. Virtual host allows `.htaccess` overrides:
   ```apache
   <Directory /var/www/royal-x-casino>
       AllowOverride All
       Require all granted
   </Directory>
   ```

3. Restart Apache:
   ```bash
   sudo systemctl restart apache2
   ```

### Nginx Configuration

1. Copy the example configuration:
   ```bash
   sudo cp nginx.conf.example /etc/nginx/sites-available/royal-x-casino
   ```

2. Edit and customize:
   ```bash
   sudo nano /etc/nginx/sites-available/royal-x-casino
   ```
   - Update `server_name` with your domain
   - Update `root` path
   - Adjust PHP-FPM socket path
   - Configure SSL if using HTTPS

3. Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/royal-x-casino /etc/nginx/sites-enabled/
   ```

4. Test configuration:
   ```bash
   sudo nginx -t
   ```

5. Reload Nginx:
   ```bash
   sudo systemctl reload nginx
   ```

## Step 6: Database Setup

1. Create database:
   ```sql
   CREATE DATABASE royal_x_casino CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. Create user:
   ```sql
   CREATE USER 'royal_user'@'localhost' IDENTIFIED BY 'strong_password';
   GRANT ALL PRIVILEGES ON royal_x_casino.* TO 'royal_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. Update `wp-config.php` or `.env` with database credentials.

## Step 7: Complete WordPress Installation

1. Visit your domain in a browser
2. Follow the WordPress installation wizard
3. Create admin account
4. Complete the setup

## Step 8: Post-Deployment Security

### Firewall Configuration

```bash
# UFW (Ubuntu/Debian)
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx  # For Nginx
sudo apt install certbot python3-certbot-apache  # For Apache

# Obtain certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
# or
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com
```

### Regular Backups

Set up automated backups for:
- Database
- wp-content directory
- wp-config.php

## Step 9: Performance Optimization

### Enable Minification

The theme automatically creates minified files in production mode. Ensure `WP_DEBUG` is set to `false` in `wp-config.php`.

### Caching

Consider installing a caching plugin:
- WP Super Cache
- W3 Total Cache
- WP Rocket

## Troubleshooting

### Permission Issues

```bash
# If files can't be written
sudo chown -R www-data:www-data /var/www/royal-x-casino
sudo find /var/www/royal-x-casino -type d -exec chmod 755 {} \;
sudo find /var/www/royal-x-casino -type f -exec chmod 644 {} \;
```

### 404 Errors

- Check `.htaccess` file exists
- Verify `mod_rewrite` is enabled (Apache)
- Check Nginx configuration (Nginx)
- Verify permalink structure in WordPress admin

### Database Connection Errors

- Verify database credentials in `wp-config.php` or `.env`
- Check database server is running
- Verify database user has proper permissions

### File Upload Issues

```bash
# Ensure uploads directory is writable
sudo chmod 775 /var/www/royal-x-casino/wp-content/uploads
sudo chown -R www-data:www-data /var/www/royal-x-casino/wp-content/uploads
```

## Maintenance

### Update WordPress

```bash
# Via WP-CLI (if installed)
wp core update
wp plugin update --all
wp theme update --all
```

### Monitor Logs

```bash
# Apache error log
sudo tail -f /var/log/apache2/error.log

# Nginx error log
sudo tail -f /var/log/nginx/royal-x-casino-error.log

# PHP error log
sudo tail -f /var/log/php8.1-fpm.log
```

## Support

For issues or questions, refer to:
- WordPress Codex: https://codex.wordpress.org/
- WordPress Support: https://wordpress.org/support/
