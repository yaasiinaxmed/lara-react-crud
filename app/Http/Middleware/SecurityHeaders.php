<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Security Headers
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-XSS-Protection', '1; mode=block');
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
        
        // Content Security Policy - Different for development vs production
        if (config('app.debug')) {
            // Development mode - Disable CSP to avoid conflicts with Vite
            // Only set basic security headers, no CSP restrictions
        } else {
            // Production CSP - Restrictive for security
            $csp = "default-src 'self'; " .
                   "script-src 'self' 'unsafe-inline'; " .
                   "script-src-elem 'self' 'unsafe-inline'; " .
                   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; " .
                   "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; " .
                   "img-src 'self' data: https:; " .
                   "font-src 'self' data: https://fonts.gstatic.com https://fonts.bunny.net; " .
                   "connect-src 'self'; " .
                   "frame-ancestors 'none';";
            
            $response->headers->set('Content-Security-Policy', $csp);
        }

        return $response;
    }
}