import { ProductCard } from '@/components/product-card';
import { CATEGORIES, PRODUCTS } from '@/lib/mock-data';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    category?: string;
  };
}) {
  const currentCategory = searchParams?.category;
  const filteredProducts = currentCategory
    ? PRODUCTS.filter((p) => p.category.id === currentCategory)
    : PRODUCTS;

  return (
    <div className="container py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold font-headline">Our Products</h1>
        <p className="mt-2 text-muted-foreground">
          Find the components you need for your next project.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-full">
                        <nav className="flex flex-col space-y-2">
                             <Link
                                href="/products"
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                !currentCategory
                                    ? 'bg-primary text-primary-foreground font-semibold'
                                    : 'hover:bg-accent'
                                }`}
                                >
                                All Products
                            </Link>
                            {CATEGORIES.map((category) => (
                                <Link
                                key={category.id}
                                href={`/products?category=${category.id}`}
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                    currentCategory === category.id
                                    ? 'bg-primary text-primary-foreground font-semibold'
                                    : 'hover:bg-accent'
                                }`}
                                >
                                {category.name}
                                </Link>
                            ))}
                        </nav>
                    </ScrollArea>
                </CardContent>
            </Card>
        </aside>
        <main className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
