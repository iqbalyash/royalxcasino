# Royal X Casino - WordPress Installation

A clean WordPress installation configured for VPS deployment with PHP 8.1+ compatibility.

## Requirements

- **PHP**: 8.1 or higher (recommended: 8.2+)
- **MySQL**: 5.7 or higher (recommended: 8.0+) OR MariaDB 10.3 or higher
- **Apache**: 2.4+ with mod_rewrite enabled OR Nginx
- **Memory**: Minimum 64MB PHP memory limit (256MB recommended)

## Installation Steps

### 1. Database Setup

Create a MySQL/MariaDB database and user for WordPress:

```sql
CREATE DATABASE your_database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON your_database_name.* TO 'your_username'@'localhost';
FLUSH PRIVILEGES;
```

### 2. Configure WordPress with Environment Variables

This installation uses environment variables for secure configuration. You have two options:

#### Option A: Using .env file (Recommended for local development)

1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and set your values:
   ```env
   DB_NAME=your_database_name
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   
   # Generate security keys at: https://api.wordpress.org/secret-key/1.1/salt/
   AUTH_KEY='your unique phrase here'
   SECURE_AUTH_KEY='your unique phrase here'
   LOGGED_IN_KEY='your unique phrase here'
   NONCE_KEY='your unique phrase here'
   AUTH_SALT='your unique phrase here'
   SECURE_AUTH_SALT='your unique phrase here'
   LOGGED_IN_SALT='your unique phrase here'
   NONCE_SALT='your unique phrase here'
   ```

#### Option B: Using System Environment Variables (Recommended for VPS)

Set environment variables in your system (e.g., in `/etc/environment`, `.bashrc`, or your web server configuration):

```bash
export DB_NAME=your_database_name
export DB_USER=your_username
export DB_PASSWORD=your_password
export DB_HOST=localhost
export AUTH_KEY='your unique phrase here'
# ... (set all other keys)
```

**Note**: The `.env` file is automatically ignored by git for security. Never commit sensitive credentials!

### 3. File Permissions

Set appropriate file permissions on your VPS:

```bash
# Set directory permissions
find . -type d -exec chmod 755 {} \;

# Set file permissions
find . -type f -exec chmod 644 {} \;

# Set wp-config.php permissions (more restrictive - only owner can read/write)
chmod 600 wp-config.php

# Set .env file permissions (if using .env file)
chmod 600 .env

# Set .htaccess permissions (if using Apache)
chmod 644 .htaccess
```

### 4. Web Server Configuration

#### Apache Configuration

Ensure `mod_rewrite` is enabled:

```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

Make sure your virtual host allows `.htaccess` overrides:

```apache
<Directory /path/to/royal-x-casino>
    AllowOverride All
    Require all granted
</Directory>
```

#### Nginx Configuration

Add the following to your Nginx server block:

```nginx
location / {
    try_files $uri $uri/ /index.php?$args;
}

location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
}

location ~ /\.ht {
    deny all;
}
```

### 5. Complete Installation

1. Navigate to your domain in a web browser
2. Follow the WordPress installation wizard
3. Enter your site title, admin username, password, and email
4. Click "Install WordPress"

**Note**: This installation comes with no demo content - you'll start with a clean WordPress site.

## Post-Installation

### Security Recommendations

1. **Change default table prefix** (if not already changed in wp-config.php)
2. **Limit login attempts** - Install a security plugin like Wordfence or iThemes Security
3. **Enable SSL/HTTPS** - Update `FORCE_SSL_ADMIN` in wp-config.php if using SSL
4. **Regular backups** - Set up automated backups
5. **Keep WordPress updated** - Regularly update WordPress core, themes, and plugins

### Performance Optimization

1. **Caching** - Install a caching plugin (WP Super Cache, W3 Total Cache, or WP Rocket)
2. **Image optimization** - Use plugins like Smush or ShortPixel
3. **CDN** - Consider using a CDN for static assets
4. **Database optimization** - Use WP-Optimize or similar plugins

## File Structure

```
royal-x-casino/
├── wp-admin/          # WordPress admin files
├── wp-content/        # Themes, plugins, uploads
│   ├── plugins/       # Installed plugins
│   ├── themes/        # Installed themes
│   └── uploads/       # Media uploads (gitignored)
├── wp-includes/       # WordPress core files
├── wp-config.php      # Configuration file (gitignored)
├── .htaccess          # Apache rewrite rules
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Troubleshooting

### Common Issues

1. **"Error establishing database connection"**
   - Verify database credentials in wp-config.php
   - Ensure database server is running
   - Check database user permissions

2. **"404 errors on pages"**
   - Ensure mod_rewrite is enabled (Apache)
   - Check .htaccess file exists and is readable
   - Verify permalink structure in WordPress admin

3. **"Permission denied" errors**
   - Check file and directory permissions
   - Ensure web server user owns the files (or has read access)

4. **"PHP version" errors**
   - Verify PHP version: `php -v`
   - Update PHP if below 8.1
   - Restart web server after PHP update

## Support

For WordPress documentation, visit: https://wordpress.org/support/

## License

WordPress is licensed under the GPL v2 or later.
