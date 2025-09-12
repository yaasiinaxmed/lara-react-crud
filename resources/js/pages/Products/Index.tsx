import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { CircleCheck, Loader2 } from 'lucide-react';
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
}

interface PageProps {
    flash: {
        message?: string;
    };
    products: Product[];
}

export default function Index() {
    const { flash, products } = usePage().props as PageProps;

    const { processing, delete: destroy } = useForm();

    const handleDelete = (id:number, name:string) => {
        if(confirm(`Do want to delete a product ${name}?`)) {
           destroy(route('products.destroy', id));
        }

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="m-4">
                <Link href="/products/create">
                    <Button>Create a Product</Button>
                </Link>
            </div>
            <div className="m-4">
                {flash.message && (
                    <Alert>
                        <CircleCheck />
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>{flash.message}</AlertDescription>
                    </Alert>
                )}
            </div>
            {products.length > 0 ? (
                <div className='m-4'>
                    <Table>
                    <TableCaption>A list of your Products</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell className='space-x-2'>
                          <Link href={route('products.edit', product)}>
                          <Button className='bg-slate-700 hover:bg-slate-800'>
                                    Edit
                                </Button></Link>
                                <Button disabled={processing} onClick={() => handleDelete(product.id, product.name)} className="bg-red-500 hover:bg-red-600 min-w-[80px]">
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
            ) : (
                <div className='m-4'>No products found.</div>
            )}
        </AppLayout>
    );
}
