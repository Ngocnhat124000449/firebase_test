"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { User } from "@/lib/types"
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

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tên
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Vai trò",
    cell: ({ row }) => {
        const role = row.getValue("role") as string;
        return <Badge variant={role === 'admin' ? "default" : "secondary"}>{role}</Badge>
    },
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tham gia",
    cell: ({ row }) => {
        const date = row.getValue("createdAt") as Date;
        return <div>{format(date, "MMM d, yyyy")}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
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
                <DropdownMenuItem>Xem chi tiết người dùng</DropdownMenuItem>
                <DropdownMenuItem>Thay đổi vai trò</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">Xóa người dùng</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      )
    },
  },
]
