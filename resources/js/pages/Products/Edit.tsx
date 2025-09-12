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


interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface props {
    product: Product
}

export default function Edit({product}: props) {
    
    const {data, setData, put, processing, errors} = useForm({
        name: product.name,
        price: product.price,
        description: product.description,
    })

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('products.update', product.id));
      };

    return (
        <AppLayout breadcrumbs={[{title: "Edit a Product", href: `/products/${product.id}/edit`}]}>
            <Head title="Update a Product" />
            <div className='w-8/12 p-4'>
               <form onSubmit={handleUpdate} className='space-y-5'>
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
                  <Button disabled={processing} type='submit' className="min-w-[140px]">
                    {processing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      'Update Product'
                    )}
                  </Button>
               </form>
            </div>
        </AppLayout>
    );
}
