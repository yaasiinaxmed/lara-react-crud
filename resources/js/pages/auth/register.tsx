import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Package } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <Head title="Register" />
            
            <div className="w-full max-w-md">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Package className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">ProductManager</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Create your account</h1>
                    <p className="text-slate-600 dark:text-slate-300">Join thousands of businesses managing their products</p>
                </div>

                {/* Register Form */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 p-8">
                    <Form
                        {...RegisteredUserController.store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name" className="text-slate-900 dark:text-white font-medium">Full Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Enter your full name"
                                            className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-slate-900 dark:text-white font-medium">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                            className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password" className="text-slate-900 dark:text-white font-medium">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Create a strong password"
                                            className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password_confirmation" className="text-slate-900 dark:text-white font-medium">Confirm Password</Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Confirm your password"
                                            className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <InputError message={errors.password_confirmation} />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="mt-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3" 
                                        tabIndex={5}
                                    >
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                                        Create account
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-slate-600 dark:text-slate-300">
                                    Already have an account?{' '}
                                    <TextLink href={login()} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium" tabIndex={6}>
                                        Log in
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}
