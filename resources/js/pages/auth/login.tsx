import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Package } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <Head title="Log in" />
            
            <div className="w-full max-w-md">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Package className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">ProductManager</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome back</h1>
                    <p className="text-slate-600 dark:text-slate-300">Enter your credentials to access your account</p>
                </div>

                {/* Login Form */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 p-8">
                    <Form {...AuthenticatedSessionController.store.form()} resetOnSuccess={['password']} className="flex flex-col gap-6">
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-slate-900 dark:text-white font-medium">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password" className="text-slate-900 dark:text-white font-medium">Password</Label>
                                            {canResetPassword && (
                                                <TextLink href={request()} className="ml-auto text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" tabIndex={5}>
                                                    Forgot password?
                                                </TextLink>
                                            )}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="Password"
                                            className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox id="remember" name="remember" tabIndex={3} />
                                        <Label htmlFor="remember" className="text-slate-700 dark:text-slate-300">Remember me</Label>
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3" 
                                        tabIndex={4} 
                                        disabled={processing}
                                    >
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                                        Log in
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-slate-600 dark:text-slate-300">
                                    Don't have an account?{' '}
                                    <TextLink href={register()} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium" tabIndex={5}>
                                        Sign up
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>

                    {status && (
                        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <div className="text-center text-sm font-medium text-green-600 dark:text-green-400">{status}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
