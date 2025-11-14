"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Button } from '@/frontend/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/frontend/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/frontend/context/cart-provider';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`} className="block">
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint={product.imageHint}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-sm text-muted-foreground">{product.category.name}</p>
        <CardTitle className="mt-1 text-lg font-headline">
          <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
        <Button size="sm" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Thêm vào giỏ hàng
        </Button>
      </CardFooter>
    </Card>
  );
}
