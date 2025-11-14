import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/mock-data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function AdminProductsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-headline">Products</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Product
                </Button>
            </div>
            <DataTable columns={columns} data={PRODUCTS} />
        </div>
    )
}
