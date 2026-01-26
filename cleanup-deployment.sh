#!/bin/bash
# Cleanup Script for VPS Deployment
# Removes unnecessary files before deployment
# Usage: bash cleanup-deployment.sh

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Cleaning up unnecessary files for deployment...${NC}"

# Get the WordPress directory
WP_DIR="$(pwd)"
if [ ! -f "$WP_DIR/wp-config.php" ]; then
    echo -e "${RED}Error: wp-config.php not found. Please run this script from the WordPress root directory.${NC}"
    exit 1
fi

# Files to remove (optional documentation files)
FILES_TO_REMOVE=(
    "readme.html"
    "license.txt"
    "wp-config-sample.php"
)

# Ask for confirmation
echo -e "${YELLOW}The following files will be removed:${NC}"
for file in "${FILES_TO_REMOVE[@]}"; do
    if [ -f "$WP_DIR/$file" ]; then
        echo -e "  - $file"
    fi
done

read -p "Continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Cleanup cancelled.${NC}"
    exit 0
fi

# Remove files
REMOVED=0
for file in "${FILES_TO_REMOVE[@]}"; do
    if [ -f "$WP_DIR/$file" ]; then
        rm "$WP_DIR/$file"
        echo -e "${GREEN}✓ Removed: $file${NC}"
        ((REMOVED++))
    fi
done

if [ $REMOVED -eq 0 ]; then
    echo -e "${YELLOW}No files to remove.${NC}"
else
    echo -e "${GREEN}✓ Cleanup complete. Removed $REMOVED file(s).${NC}"
fi

echo -e "${GREEN}${NC}"
echo -e "${GREEN}Note: Core WordPress files and themes are preserved.${NC}"
echo -e "${GREEN}You can now proceed with deployment.${NC}"
