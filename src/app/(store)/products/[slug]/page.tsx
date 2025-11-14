"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Package } from 'lucide-react';
import { useCart } from '@/context/cart-provider';
import { ProductCard } from '@/components/product-card';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { dispatch } = useCart();
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }
  
  const relatedProducts = PRODUCTS.filter(p => p.category.id === product.category.id && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="aspect-square rounded-lg bg-card border overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            data-ai-hint={product.imageHint}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-primary">{product.category.name}</p>
          <h1 className="text-3xl lg:text-4xl font-bold font-headline mt-2">{product.name}</h1>
          <p className="text-3xl font-semibold mt-4">${product.price.toFixed(2)}</p>
          <div className="mt-4">
            {product.stock > 0 ? (
                <Badge variant="outline" className='border-green-500 text-green-600'>
                    <Package className="mr-2 h-4 w-4" />
                    {product.stock} in stock
                </Badge>
            ) : (
                <Badge variant="destructive">Out of stock</Badge>
            )}
          </div>
          <p className="mt-6 text-muted-foreground">{product.description}</p>
          <div className="mt-8">
            <Button size="lg" onClick={handleAddToCart} disabled={product.stock === 0}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold font-headline">Specifications</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium text-foreground">{key}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold font-headline mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p}/>)}
        </div>
      </div>
    </div>
  );
}
