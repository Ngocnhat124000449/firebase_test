"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { Order } from "@/lib/types"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

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

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Mã đơn hàng",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "customerName",
    header: "Khách hàng",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return <Badge variant={statusVariant(status)}>{status}</Badge>
    },
    filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
        const date = row.getValue("createdAt") as Date;
        return <div>{format(date, "MMM d, yyyy")}</div>
    },
  },
  {
    accessorKey: "total",
    header: () => <div className="text-right">Tổng cộng</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original

      return (
        <div className="text-right">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Mở menu</span>
                <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                <DropdownMenuItem>Xem chi tiết đơn hàng</DropdownMenuItem>
                <DropdownMenuItem>Cập nhật trạng thái</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">Hủy đơn hàng</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      )
    },
  },
]
