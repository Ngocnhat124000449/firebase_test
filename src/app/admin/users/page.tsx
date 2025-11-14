import { USERS } from "@/lib/mock-data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function AdminUsersPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Người dùng</h1>
            <DataTable columns={columns} data={USERS} />
        </div>
    )
}
