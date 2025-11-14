import { StatCard } from '@/frontend/components/stat-card';
import { DollarSign, Package, ShoppingCart, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/frontend/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/frontend/components/ui/table';
import { Badge } from '@/frontend/components/ui/badge';
import { ORDERS, PRODUCTS } from '@/lib/mock-data';
import Link from 'next/link';
import { Button } from '@/frontend/components/ui/button';

export default function DashboardPage() {
  const totalRevenue = ORDERS.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = ORDERS.length;
  const totalProducts = PRODUCTS.length;
  const lowStockProducts = PRODUCTS.filter(p => p.stock > 0 && p.stock < 10);
  const recentOrders = ORDERS.slice(0, 5);

  const statusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'Đã giao hàng':
        return 'default';
      case 'Đã vận chuyển':
        return 'secondary';
      case 'Chờ xử lý':
        return 'outline';
      case 'Đã hủy':
        return 'destructive';
      default:
        return 'default';
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Bảng điều khiển</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Tổng doanh thu" 
          value={`$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={DollarSign}
        />
        <StatCard 
          title="Tổng số đơn hàng" 
          value={`+${totalOrders}`}
          icon={ShoppingCart}
        />
        <StatCard 
          title="Tổng sản phẩm" 
          value={`${totalProducts}`}
          icon={Package}
        />
        <StatCard 
          title="Cảnh báo hàng sắp hết" 
          value={`${lowStockProducts.length}`}
          icon={AlertCircle}
          description='Sản phẩm còn lại dưới 10'
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Đơn hàng gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã đơn hàng</TableHead>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Tổng cộng</TableHead>
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
            <CardTitle>Sản phẩm sắp hết hàng</CardTitle>
            <Button asChild variant="ghost" size="sm">
                <Link href="/admin/products">Xem tất cả</Link>
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
                  <div className="ml-auto font-medium">còn {product.stock}</div>
                </div>
              )) : (
                <p className="text-sm text-muted-foreground text-center py-4">Không có sản phẩm nào sắp hết hàng.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
