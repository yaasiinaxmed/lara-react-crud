// Components
import PasswordResetLinkController from '@/actions/App/Http/Controllers/Auth/PasswordResetLinkController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Package, ArrowLeft } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <Head title="Forgot password" />
            
            <div className="w-full max-w-md">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Package className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">ProductManager</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Forgot Password?</h1>
                    <p className="text-slate-600 dark:text-slate-300">No worries, we'll send you reset instructions</p>
                </div>

                {/* Forgot Password Form */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 p-8">
                    {status && (
                        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <div className="text-center text-sm font-medium text-green-600 dark:text-green-400">{status}</div>
                        </div>
                    )}

                    <Form {...PasswordResetLinkController.store.form()}>
                        {({ processing, errors }) => (
                            <div className="space-y-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-slate-900 dark:text-white font-medium">Email Address</Label>
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        autoComplete="off" 
                                        autoFocus 
                                        placeholder="Enter your email address"
                                        className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <Button 
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3" 
                                    disabled={processing}
                                >
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                                    Send Reset Link
                                </Button>
                            </div>
                        )}
                    </Form>

                    <div className="mt-6 text-center">
                        <TextLink href={login()} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to Login
                        </TextLink>
                    </div>
                </div>

                {/* Help Text */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        Remember your password?{' '}
                        <TextLink href={login()} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                            Sign in
                        </TextLink>
                    </p>
                </div>
            </div>
        </div>
    );
}
