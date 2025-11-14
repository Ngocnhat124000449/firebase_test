import { StatCard } from '@/components/stat-card';
import { DollarSign, Package, ShoppingCart, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ORDERS, PRODUCTS } from '@/lib/mock-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const totalRevenue = ORDERS.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = ORDERS.length;
  const totalProducts = PRODUCTS.length;
  const lowStockProducts = PRODUCTS.filter(p => p.stock > 0 && p.stock < 10);
  const recentOrders = ORDERS.slice(0, 5);

  const statusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'Delivered':
        return 'default';
      case 'Shipped':
        return 'secondary';
      case 'Pending':
        return 'outline';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'default';
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Revenue" 
          value={`$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={DollarSign}
        />
        <StatCard 
          title="Total Orders" 
          value={`+${totalOrders}`}
          icon={ShoppingCart}
        />
        <StatCard 
          title="Total Products" 
          value={`${totalProducts}`}
          icon={Package}
        />
        <StatCard 
          title="Low Stock Alerts" 
          value={`${lowStockProducts.length}`}
          icon={AlertCircle}
          description='Products with less than 10 items'
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map(order => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant(order.status)}>{order.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Low Stock Products</CardTitle>
            <Button asChild variant="ghost" size="sm">
                <Link href="/admin/products">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.length > 0 ? lowStockProducts.map(product => (
                <div key={product.id} className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-none">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.category.name}</p>
                  </div>
                  <div className="ml-auto font-medium">{product.stock} left</div>
                </div>
              )) : (
                <p className="text-sm text-muted-foreground text-center py-4">No products are low on stock.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
