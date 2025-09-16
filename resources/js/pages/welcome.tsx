import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { 
    ArrowRight, 
    BarChart3, 
    CheckCircle, 
    Database, 
    Lock, 
    Package, 
    Shield, 
    Star, 
    TrendingUp, 
    Users,
    Zap,
    ShoppingCart,
    AlertTriangle,
    Clock,
    Globe,
    Smartphone,
    Monitor,
    Cloud
} from 'lucide-react';
import { route } from 'ziggy-js';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <Head title="Product Management System - Modern & Secure" />
            
            {/* Navigation */}
            <nav className="relative z-10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <Package className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-900 dark:text-white">ProductManager</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href={route('login')}>
                            <Button variant="ghost" className="text-slate-600 dark:text-slate-300">
                                Sign In
                            </Button>
                        </Link>
                        <Link href={route('register')}>
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative px-6 py-20">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
                            <Zap className="w-4 h-4 mr-2" />
                            Modern Product Management
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Smart Inventory
                            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Management System
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Track stock levels, manage products, and get real-time insights with our modern inventory management platform. 
                            Built for businesses that need precision and control.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link href={route('register')}>
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4">
                                Start Free Trial
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-slate-300 dark:border-slate-600">
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50K+</div>
                            <div className="text-slate-600 dark:text-slate-300">Products Tracked</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
                            <div className="text-slate-600 dark:text-slate-300">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Real-time</div>
                            <div className="text-slate-600 dark:text-slate-300">Stock Updates</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24/7</div>
                            <div className="text-slate-600 dark:text-slate-300">Monitoring</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-6 py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Complete Inventory Control
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Advanced features designed to give you complete control over your inventory and stock levels
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                                    <ShoppingCart className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-slate-900 dark:text-white">Stock Management</CardTitle>
                                <CardDescription className="text-slate-600 dark:text-slate-300">
                                    Track inventory levels in real-time with automatic low-stock alerts
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Real-time stock tracking
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Low stock alerts
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Stock level monitoring
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                                    <AlertTriangle className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-slate-900 dark:text-white">Smart Alerts</CardTitle>
                                <CardDescription className="text-slate-600 dark:text-slate-300">
                                    Get instant notifications when stock levels are low or products are out of stock
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Low stock warnings
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Out of stock alerts
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Custom thresholds
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-slate-900 dark:text-white">Inventory Analytics</CardTitle>
                                <CardDescription className="text-slate-600 dark:text-slate-300">
                                    Comprehensive dashboard with real-time inventory insights and stock analytics
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Total stock overview
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Stock level trends
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Performance metrics
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 4 */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-slate-900 dark:text-white">Secure & Private</CardTitle>
                                <CardDescription className="text-slate-600 dark:text-slate-300">
                                    Enterprise-grade security with user isolation to protect your inventory data
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        User authentication
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Data isolation
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Secure access
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 5 */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-slate-900 dark:text-white">Multi-Device Access</CardTitle>
                                <CardDescription className="text-slate-600 dark:text-slate-300">
                                    Access your inventory from anywhere with responsive design for all devices
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Mobile responsive
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Cross-platform
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Cloud-based
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 6 */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-slate-900 dark:text-white">Real-Time Updates</CardTitle>
                                <CardDescription className="text-slate-600 dark:text-slate-300">
                                    Instant stock updates and real-time synchronization across all devices
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Live stock updates
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Instant sync
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        No delays
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="px-6 py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Why Choose Our Inventory System?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Built specifically for businesses that need precise inventory control and real-time insights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Package className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Never Run Out of Stock</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Get instant alerts when inventory levels drop below your threshold. Prevent stockouts and keep your business running smoothly.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Make Data-Driven Decisions</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Access comprehensive analytics and insights to optimize your inventory levels and improve business performance.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Access Anywhere, Anytime</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Manage your inventory from any device with our responsive design. Check stock levels on the go with mobile access.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Ready to Take Control of Your Inventory?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                            Join thousands of businesses already using our platform to track stock levels and manage inventory efficiently
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link href={route('register')}>
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4">
                                Get Started Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href={route('login')}>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-slate-300 dark:border-slate-600">
                                Sign In
                            </Button>
                        </Link>
                    </div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                "The stock tracking and low inventory alerts have saved us from countless stockouts. Game changer!"
                            </p>
                            <div className="font-semibold text-slate-900 dark:text-white">Sarah Johnson</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Inventory Manager, TechCorp</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                "Real-time stock updates and the dashboard analytics help us make better inventory decisions."
                            </p>
                            <div className="font-semibold text-slate-900 dark:text-white">Mike Chen</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Operations Director, StartupXYZ</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                "The low stock alerts and inventory tracking features are exactly what we needed for our warehouse."
                            </p>
                            <div className="font-semibold text-slate-900 dark:text-white">Emily Davis</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Warehouse Manager, InnovateCo</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-12 bg-slate-900 dark:bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <Package className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">ProductManager</span>
                            </div>
                            <p className="text-slate-400">
                                Modern product management system built with Laravel and React.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Security</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li>Help Center</li>
                                <li>Documentation</li>
                                <li>Community</li>
                                <li>Status</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                        <p>&copy; 2024 ProductManager. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
