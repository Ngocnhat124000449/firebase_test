import { ORDERS } from "@/lib/mock-data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function AdminOrdersPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Orders</h1>
            <DataTable columns={columns} data={ORDERS} />
        </div>
    )
}
