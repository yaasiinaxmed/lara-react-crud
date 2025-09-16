import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { CircleAlert, Loader2 } from 'lucide-react';
import { route } from 'ziggy-js';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];

export default function Index() {
    
    const {data, setData, post, processing, errors} = useForm({
        name: '',
        price: 0,
        description: '',
        stock: 0,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.store')); // ✅ no more ReferenceError
      };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-6">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Create New Product</h1>
                        <p className="text-slate-600 dark:text-slate-300">Add a new product to your inventory</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 p-8">
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            {/* Display errors */}
                            {Object.keys(errors).length > 0 && (
                                <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                                    <CircleAlert className="h-4 w-4 text-red-600 dark:text-red-400" />
                                    <AlertTitle className="text-red-800 dark:text-red-200">Please fix the following errors:</AlertTitle>
                                    <AlertDescription className="text-red-700 dark:text-red-300">
                                        <ul className='list-disc list-inside mt-2'>
                                            {Object.entries(errors).map(([key, message]) => (
                                                <li key={key}>{message as string}</li>
                                            ))}
                                        </ul>
                                    </AlertDescription>
                                </Alert>
                            )}

                            <div className='space-y-2'>
                                <Label htmlFor="name" className="text-slate-900 dark:text-white font-medium">Product Name</Label>
                                <Input 
                                    id="name"
                                    placeholder='Enter product name' 
                                    value={data.name} 
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="price" className="text-slate-900 dark:text-white font-medium">Price</Label>
                                <Input 
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    placeholder='Enter product price' 
                                    value={data.price} 
                                    onChange={(e) => setData('price', parseFloat(e.target.value) || 0)}
                                    className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-slate-900 dark:text-white font-medium">Description</Label>
                                <Textarea 
                                    id="description"
                                    placeholder='Enter product description' 
                                    value={data.description} 
                                    onChange={(e) => setData("description", e.target.value)}
                                    className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="stock" className="text-slate-900 dark:text-white font-medium">Stock Quantity</Label>
                                <Input 
                                    id="stock"
                                    type="number"
                                    min="0"
                                    placeholder='Enter stock quantity' 
                                    value={data.stock} 
                                    onChange={(e) => setData('stock', parseInt(e.target.value) || 0)}
                                    className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button 
                                    disabled={processing} 
                                    type='submit' 
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex-1"
                                >
                                    {processing ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Creating Product...
                                        </>
                                    ) : (
                                        'Create Product'
                                    )}
                                </Button>
                                <Link href={route('products.index')}>
                                    <Button type="button" variant="outline" className="border-slate-300 dark:border-slate-600">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
