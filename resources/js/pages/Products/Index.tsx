import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { CircleCheck, Loader2, Package } from 'lucide-react';
import { route } from 'ziggy-js';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
}

interface PageProps {
    flash: {
        message?: string;
    };
    products: Product[];
    [key: string]: any;
}

export default function Index() {
    const { flash, products } = usePage<PageProps>().props;

    const { processing, delete: destroy } = useForm();

    const handleDelete = (id:number, name:string) => {
        if(confirm(`Do want to delete a product ${name}?`)) {
           destroy(route('products.destroy', id));
        }

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Your Products</h1>
                                <p className="text-slate-600 dark:text-slate-300">Manage your product inventory</p>
                            </div>
                            <Link href="/products/create">
                                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                    Create Product
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Flash Message */}
                    {flash.message && (
                        <div className="mb-6">
                            <Alert className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
                                <CircleCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                                <AlertTitle className="text-green-800 dark:text-green-200">Success!</AlertTitle>
                                <AlertDescription className="text-green-700 dark:text-green-300">{flash.message}</AlertDescription>
                            </Alert>
                        </div>
                    )}

                    {/* Products Table */}
                    {products.length > 0 ? (
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 overflow-hidden">
                            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Product Inventory</h2>
                                <p className="text-slate-600 dark:text-slate-300">A list of all your products</p>
                            </div>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-slate-200 dark:border-slate-700">
                                            <TableHead className="text-slate-900 dark:text-white">ID</TableHead>
                                            <TableHead className="text-slate-900 dark:text-white">Name</TableHead>
                                            <TableHead className="text-slate-900 dark:text-white">Price</TableHead>
                                            <TableHead className="text-slate-900 dark:text-white">Stock</TableHead>
                                            <TableHead className="text-slate-900 dark:text-white">Description</TableHead>
                                            <TableHead className="text-slate-900 dark:text-white">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {products.map((product) => (
                                            <TableRow key={product.id} className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                                <TableCell className="text-slate-600 dark:text-slate-300">{product.id}</TableCell>
                                                <TableCell className="font-medium text-slate-900 dark:text-white">{product.name}</TableCell>
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
                                                <TableCell className="text-slate-600 dark:text-slate-300 max-w-[200px] truncate">{product.description}</TableCell>
                                                <TableCell className="space-x-2">
                                                    <Link href={route('products.edit', product.id)}>
                                                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                    <Button 
                                                        size="sm"
                                                        disabled={processing} 
                                                        onClick={() => handleDelete(product.id, product.name)} 
                                                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                                                    >
                                                        {processing ? (
                                                            <>
                                                                <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                                                Deleting...
                                                            </>
                                                        ) : (
                                                            'Delete'
                                                        )}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 p-12 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No products found</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">Get started by creating your first product</p>
                            <Link href="/products/create">
                                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                    Create Your First Product
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
