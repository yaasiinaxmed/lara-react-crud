import { Package } from 'lucide-react';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                <Package className="size-5 text-white" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold text-slate-900 dark:text-white">ProductManager</span>
            </div>
        </>
    );
}
