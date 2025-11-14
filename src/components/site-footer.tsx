import Link from "next/link";
import { CircuitBoard } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="border-t">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <CircuitBoard className="h-6 w-6 text-primary" />
                            <span className="font-bold font-headline">TechZone</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">Cửa hàng tổng hợp của bạn cho các linh kiện điện tử và vật tư dự án DIY.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold font-headline mb-4">Cửa hàng</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Tất cả sản phẩm</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Bộ xử lý</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Cảm biến</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Mô-đun</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold font-headline mb-4">Hỗ trợ</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Liên hệ chúng tôi</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Câu hỏi thường gặp</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Vận chuyển & Trả hàng</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold font-headline mb-4">Pháp lý</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Chính sách bảo mật</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Điều khoản dịch vụ</Link></li>
                        </ul>
                    </div>
                </div>
                 <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Cửa hàng điện tử TechZone. Đã đăng ký Bản quyền.</p>
                </div>
            </div>
        </footer>
    )
}
