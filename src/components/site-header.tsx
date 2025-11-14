"use client";

import Link from 'next/link';
import { CircuitBoard, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/cart-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function SiteHeader() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CircuitBoard className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">TechZone</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Trang chủ</Link>
          <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground">Sản phẩm</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden sm:flex flex-1 max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Tìm kiếm thành phần..." className="h-9" />
            <Button type="submit" variant="secondary" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Link href="/cart" aria-label="Mở giỏ hàng">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0">{totalItems}</Badge>
              )}
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link href="#">Hồ sơ</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="#">Lịch sử đơn hàng</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/admin/dashboard">Bảng điều khiển quản trị</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  );
}
