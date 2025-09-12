import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { CircleAlert, Terminal } from 'lucide-react';
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
        price: '',
        description: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.store')); // ✅ no more ReferenceError
      };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className='w-8/12 p-4'>
               <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Display errors */}
                {Object.keys(errors).length > 0 && (
                    <Alert >
                    <CircleAlert />
                    <AlertTitle>Errors!</AlertTitle>
                    <AlertDescription>
                       <ul className='list-disc list-inside'>
                        {Object.entries(errors).map(([key, message]) => (
                            <li key={key}>{message as string}</li>
                        ))}
                          </ul>
                    </AlertDescription>
                  </Alert>
                )}
                  <div className='gap-1.5'>
                    <Label htmlFor="product name">Name</Label>
                    <Input placeholder='Product Name' value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                  </div>
                  <div className="gap-1.5">
                    <Label htmlFor="product price">Price</Label>
                    <Input placeholder='Product Price' value={data.price} onChange={(e) => setData('price', e.target.value)}></Input>
                  </div>
                  <div className="gap-1.5">
                    <Label htmlFor="product description">Description</Label>
                    <Textarea placeholder='Product Description' value={data.description} onChange={(e) => setData("description", e.target.value)}/>
                  </div>
                  <Button type='submit'>Add Product</Button>
               </form>
            </div>
        </AppLayout>
    );
}
