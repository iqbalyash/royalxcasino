# VPS Deployment Checklist

Use this checklist when deploying to your VPS server.

## Pre-Deployment

- [ ] Verify PHP version is 8.1 or higher: `php -v`
- [ ] Verify MySQL/MariaDB is installed and running
- [ ] Create database and database user
- [ ] Ensure web server (Apache/Nginx) is installed and configured
- [ ] Ensure mod_rewrite is enabled (for Apache)

## Configuration

### Environment Variables Setup

Choose one of the following methods:

#### Method 1: System Environment Variables (Recommended for VPS)

Set environment variables in your system. For Apache, add to `/etc/apache2/envvars` or your virtual host:

```bash
export DB_NAME=your_database_name
export DB_USER=your_username
export DB_PASSWORD=your_password
export DB_HOST=localhost
export AUTH_KEY='your unique phrase here'
export SECURE_AUTH_KEY='your unique phrase here'
export LOGGED_IN_KEY='your unique phrase here'
export NONCE_KEY='your unique phrase here'
export AUTH_SALT='your unique phrase here'
export SECURE_AUTH_SALT='your unique phrase here'
export LOGGED_IN_SALT='your unique phrase here'
export NONCE_SALT='your unique phrase here'
```

For PHP-FPM, add to `/etc/php/8.1/fpm/pool.d/www.conf`:
```ini
env[DB_NAME] = your_database_name
env[DB_USER] = your_username
env[DB_PASSWORD] = your_password
env[DB_HOST] = localhost
# ... (add all other keys)
```

#### Method 2: .env File (Alternative)

- [ ] Create `.env` file from `.env.example` template
- [ ] Update `.env` with your database credentials
- [ ] Generate and add security keys from https://api.wordpress.org/secret-key/1.1/salt/
- [ ] Set secure permissions: `chmod 600 .env`

### Additional Configuration

- [ ] Verify `wp-config.php` reads from environment variables (already configured)
- [ ] Update `TABLE_PREFIX` via environment variable if needed (default: `wp_`)
- [ ] Configure `WP_HOME` and `WP_SITEURL` if WordPress is in a subdirectory
- [ ] Enable `FORCE_SSL_ADMIN` if using SSL/HTTPS (uncomment in wp-config.php)

## File Upload

- [ ] Upload all files to VPS (via FTP, SCP, or Git)
- [ ] Set correct file permissions:
  ```bash
  find . -type d -exec chmod 755 {} \;
  find . -type f -exec chmod 644 {} \;
  chmod 600 wp-config.php
  chmod 600 .env  # If using .env file
  ```
- [ ] Ensure web server user has read access to all files
- [ ] Create `wp-content/uploads` directory with write permissions:
  ```bash
  mkdir -p wp-content/uploads
  chmod 755 wp-content/uploads
  ```

## Web Server Configuration

### Apache
- [ ] Verify `.htaccess` file is present
- [ ] Ensure `AllowOverride All` is set in virtual host
- [ ] Restart Apache: `sudo systemctl restart apache2`

### Nginx
- [ ] Configure Nginx server block with WordPress rewrite rules
- [ ] Configure PHP-FPM socket path
- [ ] Test configuration: `sudo nginx -t`
- [ ] Reload Nginx: `sudo systemctl reload nginx`

## Database Setup

- [ ] Database created with utf8mb4 charset
- [ ] Database user has proper permissions
- [ ] Test database connection

## Installation

- [ ] Access site via web browser
- [ ] Complete WordPress installation wizard
- [ ] Verify site is accessible
- [ ] Test admin login

## Post-Deployment Security

- [ ] Change default admin username (if created during install)
- [ ] Install security plugin (Wordfence, iThemes Security, etc.)
- [ ] Set up automated backups
- [ ] Configure firewall rules
- [ ] Enable SSL/HTTPS certificate
- [ ] Disable file editing: `DISALLOW_FILE_EDIT` (already in wp-config.php)
- [ ] Remove unused themes and plugins
- [ ] Set up monitoring and logging

## Performance

- [ ] Install caching plugin
- [ ] Optimize database
- [ ] Configure CDN (optional)
- [ ] Enable Gzip compression
- [ ] Optimize images

## Testing

- [ ] Test all pages load correctly
- [ ] Test permalinks work
- [ ] Test media uploads
- [ ] Test admin dashboard
- [ ] Test plugin installation
- [ ] Test theme switching
- [ ] Verify no PHP errors in logs

## Maintenance

- [ ] Set up automatic WordPress updates (optional)
- [ ] Schedule regular backups
- [ ] Monitor error logs
- [ ] Keep WordPress, themes, and plugins updated
