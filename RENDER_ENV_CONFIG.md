# Render.com Environment Variables Configuration

## Complete .env Configuration for Production

Copy these environment variables to your Render.com service settings:

### 🔧 APPLICATION SETTINGS
```
APP_NAME=Laravel React CRUD
APP_ENV=production
APP_KEY=base64:6cXgSQQYQemIumGOVaI1HubcimLjKqq0b0bEeEzms1w=
APP_DEBUG=false
APP_TIMEZONE=UTC
APP_URL=https://your-app-name.onrender.com
```

### 🌍 LOCALIZATION
```
APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US
```

### 🔧 MAINTENANCE MODE
```
APP_MAINTENANCE_DRIVER=file
APP_MAINTENANCE_STORE=database
```

### 🔒 SECURITY
```
BCRYPT_ROUNDS=12
```

### 📝 LOGGING
```
LOG_CHANNEL=stderr
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=error
```

### 🗄️ DATABASE CONFIGURATION (SQLite)
```
DB_CONNECTION=sqlite
DB_DATABASE=/opt/render/project/src/database/database.sqlite
```

### 🗄️ DATABASE CONFIGURATION (PostgreSQL - Alternative)
If you want to use Render's managed PostgreSQL database:
```
DB_CONNECTION=pgsql
DB_HOST=your-postgres-host.onrender.com
DB_PORT=5432
DB_DATABASE=your-database-name
DB_USERNAME=your-username
DB_PASSWORD=your-password
```

### 🔐 SESSION CONFIGURATION
```
SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null
```

### 📡 BROADCASTING & QUEUES
```
BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database
```

### ⚡ CACHE CONFIGURATION
```
CACHE_STORE=database
CACHE_PREFIX=
```

### 📧 MAIL CONFIGURATION
```
MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=noreply@your-app-name.onrender.com
MAIL_FROM_NAME=Laravel React CRUD
```

### ☁️ AWS S3 (Optional - for file storage)
```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false
```

### ⚛️ VITE/FRONTEND CONFIGURATION
```
VITE_APP_NAME=Laravel React CRUD
```

### 🚀 RENDER.COM SPECIFIC
```
PORT=10000
RENDER=true
```

### 🔒 OPTIONAL: ADDITIONAL SECURITY
```
SANCTUM_STATEFUL_DOMAINS=your-app-name.onrender.com
SESSION_SECURE_COOKIE=true
SESSION_SAME_SITE=lax
```

## 📋 How to Set Environment Variables in Render

1. **Go to your Render service dashboard**
2. **Click on "Environment" tab**
3. **Add each variable** from the list above
4. **Replace placeholders**:
   - `your-app-name.onrender.com` → Your actual Render URL
   - `your-postgres-host.onrender.com` → Your PostgreSQL host (if using)
   - `your-database-name` → Your database name (if using PostgreSQL)
   - `your-username` → Your database username (if using PostgreSQL)
   - `your-password` → Your database password (if using PostgreSQL)

## ⚠️ Important Notes

### Required Changes:
- **APP_URL**: Must match your Render service URL
- **APP_DEBUG**: Must be `false` for production
- **LOG_CHANNEL**: Set to `stderr` for Render logs
- **LOG_LEVEL**: Set to `error` for production

### Optional but Recommended:
- **APP_KEY**: Generate a new one for production (or use the existing one)
- **MAIL_FROM_ADDRESS**: Use your domain email
- **SESSION_SECURE_COOKIE**: Set to `true` if using HTTPS

### Database Options:
1. **SQLite** (default): Simple, file-based database
2. **PostgreSQL**: Managed database service on Render

## 🔄 After Setting Environment Variables

1. **Redeploy** your service
2. **Check logs** for any errors
3. **Test** your application functionality
4. **Verify** database connections work

Your Laravel + React CRUD application should now work perfectly on Render.com! 🚀
