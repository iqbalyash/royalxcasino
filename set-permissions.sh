#!/bin/bash
# File Permissions Script for Royal X Casino WordPress Deployment
# Run this script after uploading files to your VPS
# Usage: sudo bash set-permissions.sh

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Setting WordPress file permissions...${NC}"

# Get the WordPress directory (adjust if needed)
WP_DIR="$(pwd)"
if [ ! -f "$WP_DIR/wp-config.php" ]; then
    echo -e "${RED}Error: wp-config.php not found. Please run this script from the WordPress root directory.${NC}"
    exit 1
fi

# Get web server user (common options)
if id "www-data" &>/dev/null; then
    WEB_USER="www-data"
elif id "nginx" &>/dev/null; then
    WEB_USER="nginx"
elif id "apache" &>/dev/null; then
    WEB_USER="apache"
else
    echo -e "${YELLOW}Warning: Could not detect web server user. Using 'www-data' as default.${NC}"
    WEB_USER="www-data"
fi

echo -e "${GREEN}Detected web server user: $WEB_USER${NC}"
echo -e "${YELLOW}Setting directory permissions...${NC}"

# Set directory permissions (755)
find $WP_DIR -type d -exec chmod 755 {} \;
echo -e "${GREEN}✓ Directory permissions set to 755${NC}"

# Set file permissions (644)
find $WP_DIR -type f -exec chmod 644 {} \;
echo -e "${GREEN}✓ File permissions set to 644${NC}"

# Secure wp-config.php (600 - only owner can read/write)
if [ -f "$WP_DIR/wp-config.php" ]; then
    chmod 600 $WP_DIR/wp-config.php
    chown $WEB_USER:$WEB_USER $WP_DIR/wp-config.php
    echo -e "${GREEN}✓ wp-config.php secured (600)${NC}"
fi

# Secure .env file if it exists (600)
if [ -f "$WP_DIR/.env" ]; then
    chmod 600 $WP_DIR/.env
    chown $WEB_USER:$WEB_USER $WP_DIR/.env
    echo -e "${GREEN}✓ .env file secured (600)${NC}"
fi

# Secure .htaccess (644)
if [ -f "$WP_DIR/.htaccess" ]; then
    chmod 644 $WP_DIR/.htaccess
    chown $WEB_USER:$WEB_USER $WP_DIR/.htaccess
    echo -e "${GREEN}✓ .htaccess permissions set (644)${NC}"
fi

# Set wp-content permissions (755 for directories, 644 for files)
if [ -d "$WP_DIR/wp-content" ]; then
    find $WP_DIR/wp-content -type d -exec chmod 755 {} \;
    find $WP_DIR/wp-content -type f -exec chmod 644 {} \;
    echo -e "${GREEN}✓ wp-content permissions set${NC}"
fi

# Set wp-content/uploads permissions (775 for directories, 664 for files)
if [ -d "$WP_DIR/wp-content/uploads" ]; then
    find $WP_DIR/wp-content/uploads -type d -exec chmod 775 {} \;
    find $WP_DIR/wp-content/uploads -type f -exec chmod 664 {} \;
    chown -R $WEB_USER:$WEB_USER $WP_DIR/wp-content/uploads
    echo -e "${GREEN}✓ wp-content/uploads permissions set (writable)${NC}"
else
    # Create uploads directory if it doesn't exist
    mkdir -p $WP_DIR/wp-content/uploads
    chmod 775 $WP_DIR/wp-content/uploads
    chown $WEB_USER:$WEB_USER $WP_DIR/wp-content/uploads
    echo -e "${GREEN}✓ Created wp-content/uploads directory${NC}"
fi

# Set ownership of all files to web server user
echo -e "${YELLOW}Setting file ownership to $WEB_USER...${NC}"
chown -R $WEB_USER:$WEB_USER $WP_DIR
echo -e "${GREEN}✓ File ownership set${NC}"

# Create .htaccess in uploads to prevent PHP execution
if [ -d "$WP_DIR/wp-content/uploads" ]; then
    if [ ! -f "$WP_DIR/wp-content/uploads/.htaccess" ]; then
        cat > $WP_DIR/wp-content/uploads/.htaccess << 'EOF'
# Disable PHP execution in uploads
<Files *.php>
deny from all
</Files>
EOF
        chmod 644 $WP_DIR/wp-content/uploads/.htaccess
        chown $WEB_USER:$WEB_USER $WP_DIR/wp-content/uploads/.htaccess
        echo -e "${GREEN}✓ Created .htaccess in uploads directory${NC}"
    fi
fi

echo -e "${GREEN}${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Permissions set successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "${NC}"
echo -e "Summary:"
echo -e "  - Directories: 755"
echo -e "  - Files: 644"
echo -e "  - wp-config.php: 600"
echo -e "  - .env: 600"
echo -e "  - wp-content/uploads: 775/664 (writable)"
echo -e "  - Owner: $WEB_USER"
echo -e "${NC}"
