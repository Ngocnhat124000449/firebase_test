import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { CATEGORIES, PRODUCTS } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');
  const featuredProducts = PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-secondary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex flex-col items-start justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline max-w-2xl">
            Xây dựng ý tưởng lớn tiếp theo của bạn
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl text-primary-foreground/80">
            Linh kiện điện tử chất lượng cao cho người có sở thích và chuyên gia.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/products">Mua ngay</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center font-headline">Mua sắm theo danh mục</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {CATEGORIES.slice(0,6).map((category) => (
              <Link href={`/products?category=${category.id}`} key={category.id}>
                <div className="p-6 text-center bg-card rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <p className="font-semibold">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-headline">Sản phẩm nổi bật</h2>
            <Button variant="ghost" asChild>
              <Link href="/products">
                Xem tất cả <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
