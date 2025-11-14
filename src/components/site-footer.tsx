import Link from "next/link";
import { CircuitBoard } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="border-t">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <CircuitBoard className="h-6 w-6 text-primary" />
                            <span className="font-bold font-headline">TechZone</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">Your one-stop shop for electronic components and DIY project supplies.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold font-headline mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">All Products</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Processors</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Sensors</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Modules</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold font-headline mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Shipping & Returns</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold font-headline mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                 <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} TechZone E-Store. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
