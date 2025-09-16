import NewPasswordController from '@/actions/App/Http/Controllers/Auth/NewPasswordController';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Package, Shield } from 'lucide-react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <Head title="Reset password" />
            
            <div className="w-full max-w-md">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Package className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">ProductManager</span>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Reset Your Password</h1>
                    <p className="text-slate-600 dark:text-slate-300">Enter your new password below</p>
                </div>

                {/* Reset Password Form */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 p-8">
                    <Form
                        {...NewPasswordController.store.form()}
                        transform={(data) => ({ ...data, token, email })}
                        resetOnSuccess={['password', 'password_confirmation']}
                    >
                        {({ processing, errors }) => (
                            <div className="space-y-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-slate-900 dark:text-white font-medium">Email Address</Label>
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        autoComplete="email" 
                                        value={email} 
                                        className="border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400" 
                                        readOnly 
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password" className="text-slate-900 dark:text-white font-medium">New Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        autoComplete="new-password"
                                        autoFocus
                                        placeholder="Enter your new password"
                                        className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation" className="text-slate-900 dark:text-white font-medium">Confirm New Password</Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        autoComplete="new-password"
                                        placeholder="Confirm your new password"
                                        className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>

                                <Button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3" 
                                    disabled={processing}
                                >
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                                    Reset Password
                                </Button>
                            </div>
                        )}
                    </Form>
                </div>

                {/* Security Note */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        <Shield className="w-4 h-4 inline mr-1" />
                        Your password will be securely updated
                    </p>
                </div>
            </div>
        </div>
    );
}
