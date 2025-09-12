# Render.com Deployment Guide

## What Was Fixed

The deployment was failing because:
1. **Wrong command**: Render was running `npm run dev` instead of production server
2. **Port binding**: Server wasn't binding to `0.0.0.0` for external access
3. **Missing configuration**: No proper production setup

## Files Added/Modified

### 1. `Procfile`
```
web: vendor/bin/heroku-php-apache2 public/
```
- Tells Render to use Apache with PHP
- Serves the Laravel application from the `public/` directory

### 2. `render.yaml`
- **Build Command**: Installs dependencies, builds assets, runs migrations
- **Start Command**: Uses Heroku PHP buildpack with Apache
- **Environment Variables**: Production-ready configuration

### 3. `package.json`
- Added `start` script for production server
- Uses `0.0.0.0` host binding for external access

## Render.com Configuration

### Environment Variables to Set in Render Dashboard:
```
APP_ENV=production
APP_DEBUG=false
APP_KEY=(auto-generated)
DB_CONNECTION=sqlite
DB_DATABASE=/opt/render/project/src/database/database.sqlite
LOG_CHANNEL=stderr
```

### Build Settings:
- **Build Command**: `composer install --no-dev --optimize-autoloader && npm ci && npm run build && php artisan key:generate --force && php artisan migrate --force && php artisan config:cache && php artisan route:cache && php artisan view:cache`
- **Start Command**: `vendor/bin/heroku-php-apache2 public/`

## Deployment Steps

1. **Push to Git**: All configuration files are now committed
2. **Connect to Render**: Link your GitHub repository
3. **Configure Service**: Use the `render.yaml` configuration
4. **Set Environment Variables**: Add the required env vars
5. **Deploy**: Render will automatically build and deploy

## What Happens During Build

1. **Composer**: Installs PHP dependencies (production only)
2. **NPM**: Installs Node.js dependencies
3. **Vite Build**: Compiles React/TypeScript assets
4. **Laravel Setup**: Generates app key, runs migrations
5. **Cache**: Optimizes config, routes, and views
6. **Start**: Launches Apache server with PHP

## Troubleshooting

If deployment still fails:
1. Check Render logs for specific errors
2. Verify all environment variables are set
3. Ensure database file is created during build
4. Check that all routes are properly cached

The application should now deploy successfully! 🚀
