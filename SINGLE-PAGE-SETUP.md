# Single-Page WordPress Configuration Guide

This guide explains how Royal X Casino theme is configured for single-page usage.

## Configuration Overview

The theme automatically configures WordPress for single-page usage, removing blog features and streamlining the admin interface.

## Features Disabled

### 1. Blog Features Removed

- ✅ **Posts** - Post type hidden from admin
- ✅ **Categories** - Taxonomy removed
- ✅ **Tags** - Taxonomy removed
- ✅ **Post Archives** - Redirected to homepage
- ✅ **Author Pages** - Redirected to homepage
- ✅ **Date Archives** - Redirected to homepage

### 2. Comments Disabled

- ✅ Comments closed on all content
- ✅ Comments menu removed from admin
- ✅ Comments removed from admin bar
- ✅ Comments metabox removed
- ✅ Comments column removed from page list
- ✅ Discussion settings removed

### 3. Static Homepage

- ✅ Automatically set on theme activation
- ✅ Homepage displays as static page
- ✅ Blog posts page not required

### 4. Admin Menu Cleaned

**Removed Menu Items:**
- Posts
- Comments
- Theme Editor (security)
- Plugin Editor (security)
- Discussion Settings

**Removed Dashboard Widgets:**
- Quick Draft
- Recent Drafts
- WordPress News
- Activity

**Removed Admin Bar Items:**
- New Post
- Comments
- New Link

## Manual Configuration (if needed)

### Set Static Homepage Manually

1. Go to **Settings > Reading**
2. Select **A static page**
3. Choose **Homepage**: Select your homepage page
4. Click **Save Changes**

### Verify Configuration

After theme activation, verify:

1. **Homepage is static:**
   - Settings > Reading should show "A static page"
   
2. **Posts menu is hidden:**
   - Posts menu should not appear in admin sidebar
   
3. **Comments are disabled:**
   - No comments menu in admin
   - No comment forms on frontend

## Customization

### Re-enable Features (if needed)

To re-enable any feature, comment out or remove the corresponding function in `functions.php`:

```php
// To re-enable posts, comment out:
// add_action( 'init', 'royal_x_casino_hide_post_type', 999 );

// To re-enable comments, comment out:
// add_action( 'init', 'royal_x_casino_disable_comments', 1 );
```

### Add Custom Post Types

If you need custom post types for your casino site:

```php
function royal_x_casino_register_custom_post_types() {
    register_post_type( 'game', array(
        'public' => true,
        'label'  => 'Games',
        // ... other args
    ) );
}
add_action( 'init', 'royal_x_casino_register_custom_post_types' );
```

## Benefits

1. **Cleaner Admin** - Only relevant features visible
2. **Better Security** - Editors disabled
3. **Faster Performance** - Less code loaded
4. **Focused Experience** - Single-page focused interface
5. **Easier Management** - Simplified admin for content editors

## Notes

- All blog-related URLs redirect to homepage (301 redirect)
- Post type is hidden but not deleted (posts can be restored if needed)
- Comments are completely disabled (cannot be re-enabled via settings)
- Theme editor is disabled for security (prevents code injection)
