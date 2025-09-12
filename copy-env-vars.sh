#!/bin/bash

# ===========================================
# COPY ENVIRONMENT VARIABLES FOR RENDER.COM
# ===========================================
# This script helps you copy environment variables to Render.com

echo "🚀 Laravel React CRUD - Render.com Environment Variables"
echo "========================================================"
echo ""

echo "📋 Copy these environment variables to your Render.com service:"
echo ""

echo "# APPLICATION SETTINGS"
echo "APP_NAME=Laravel React CRUD"
echo "APP_ENV=production"
echo "APP_KEY=base64:6cXgSQQYQemIumGOVaI1HubcimLjKqq0b0bEeEzms1w="
echo "APP_DEBUG=false"
echo "APP_TIMEZONE=UTC"
echo "APP_URL=https://your-app-name.onrender.com"
echo ""

echo "# LOCALIZATION"
echo "APP_LOCALE=en"
echo "APP_FALLBACK_LOCALE=en"
echo "APP_FAKER_LOCALE=en_US"
echo ""

echo "# MAINTENANCE MODE"
echo "APP_MAINTENANCE_DRIVER=file"
echo "APP_MAINTENANCE_STORE=database"
echo ""

echo "# SECURITY"
echo "BCRYPT_ROUNDS=12"
echo ""

echo "# LOGGING"
echo "LOG_CHANNEL=stderr"
echo "LOG_STACK=single"
echo "LOG_DEPRECATIONS_CHANNEL=null"
echo "LOG_LEVEL=error"
echo ""

echo "# DATABASE CONFIGURATION (SQLite)"
echo "DB_CONNECTION=sqlite"
echo "DB_DATABASE=/opt/render/project/src/database/database.sqlite"
echo ""

echo "# SESSION CONFIGURATION"
echo "SESSION_DRIVER=database"
echo "SESSION_LIFETIME=120"
echo "SESSION_ENCRYPT=false"
echo "SESSION_PATH=/"
echo "SESSION_DOMAIN=null"
echo ""

echo "# BROADCASTING & QUEUES"
echo "BROADCAST_CONNECTION=log"
echo "FILESYSTEM_DISK=local"
echo "QUEUE_CONNECTION=database"
echo ""

echo "# CACHE CONFIGURATION"
echo "CACHE_STORE=database"
echo "CACHE_PREFIX="
echo ""

echo "# MAIL CONFIGURATION"
echo "MAIL_MAILER=log"
echo "MAIL_SCHEME=null"
echo "MAIL_HOST=127.0.0.1"
echo "MAIL_PORT=2525"
echo "MAIL_USERNAME=null"
echo "MAIL_PASSWORD=null"
echo "MAIL_ENCRYPTION=null"
echo "MAIL_FROM_ADDRESS=noreply@your-app-name.onrender.com"
echo "MAIL_FROM_NAME=Laravel React CRUD"
echo ""

echo "# VITE/FRONTEND CONFIGURATION"
echo "VITE_APP_NAME=Laravel React CRUD"
echo ""

echo "# RENDER.COM SPECIFIC"
echo "PORT=10000"
echo "RENDER=true"
echo ""

echo "⚠️  IMPORTANT:"
echo "1. Replace 'your-app-name.onrender.com' with your actual Render URL"
echo "2. Go to Render Dashboard → Your Service → Environment tab"
echo "3. Add each variable above"
echo "4. Redeploy your service"
echo ""

echo "✅ Done! Your environment variables are ready for Render.com"
