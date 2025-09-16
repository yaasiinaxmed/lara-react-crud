import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Package, Users, TrendingUp, Calendar } from 'lucide-react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    created_at: string;
}

interface Stats {
    totalProducts: number;
    totalStock: number;
    lowStockProducts: number;
}

interface PageProps {
    stats: Stats;
    recentProducts: Product[];
    [key: string]: any;
}

export default function Dashboard() {
    const { stats, recentProducts } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Welcome Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                            Welcome to Your Dashboard
                        </h1>
                        <p className="text-slate-600 dark:text-slate-300">
                            Manage your products and track your business performance
                        </p>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                        {/* Total Products Card */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-900 dark:text-white">Total Products</CardTitle>
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <Package className="h-5 w-5 text-white" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stats.totalProducts}</div>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    Products in your inventory
                                </p>
                            </CardContent>
                        </Card>


                        {/* Total Stock Card */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-900 dark:text-white">Total Stock</CardTitle>
                                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                    <Package className="h-5 w-5 text-white" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stats.totalStock}</div>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    Total units in inventory
                                </p>
                            </CardContent>
                        </Card>

                        {/* Low Stock Alert Card */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-900 dark:text-white">Low Stock Alert</CardTitle>
                                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="h-5 w-5 text-white" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stats.lowStockProducts}</div>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    Products with ≤10 units
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Products Section */}
                    <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-slate-900 dark:text-white">Recent Products</CardTitle>
                                    <CardDescription className="text-slate-600 dark:text-slate-300">
                                        Latest products added to your inventory
                                    </CardDescription>
                                </div>
                                <Link href={route('products.index')}>
                                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                        View All
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {recentProducts.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-slate-200 dark:border-slate-700">
                                                <TableHead className="text-slate-900 dark:text-white">Product Name</TableHead>
                                                <TableHead className="text-slate-900 dark:text-white">Price</TableHead>
                                                <TableHead className="text-slate-900 dark:text-white">Stock</TableHead>
                                                <TableHead className="text-slate-900 dark:text-white">Description</TableHead>
                                                <TableHead className="text-slate-900 dark:text-white">Created</TableHead>
                                                <TableHead className="text-slate-900 dark:text-white">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {recentProducts.map((product) => (
                                                <TableRow key={product.id} className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                                    <TableCell className="font-medium text-slate-900 dark:text-white">
                                                        {product.name}
                                                    </TableCell>
                                                    <TableCell className="text-slate-600 dark:text-slate-300">${product.price}</TableCell>
                                                    <TableCell className="text-slate-600 dark:text-slate-300">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                            product.stock === 0 
                                                                ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' 
                                                                : product.stock <= 10 
                                                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                                                                    : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                                        }`}>
                                                            {product.stock} units
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className="max-w-[200px] truncate text-slate-600 dark:text-slate-300">
                                                        {product.description || 'No description'}
                                                    </TableCell>
                                                    <TableCell className="text-slate-600 dark:text-slate-300">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="h-3 w-3" />
                                                            {new Date(product.created_at).toLocaleDateString()}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Link href={route('products.edit', product.id)}>
                                                            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                                                Edit
                                                            </Button>
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Package className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">No products yet</h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                                        Get started by creating your first product
                                    </p>
                                    <Link href={route('products.create')}>
                                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                            Create Product
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
