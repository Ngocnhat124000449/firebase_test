import { SiteHeader } from '@/frontend/components/site-header';
import { SiteFooter } from '@/frontend/components/site-footer';
import { CartProvider } from '@/frontend/context/cart-provider';

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </CartProvider>
  );
}
