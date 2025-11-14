export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  category: Category;
  specifications: Record<string, string>;
  imageUrl: string;
  imageHint: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  createdAt: Date;
};

export type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  createdAt: Date;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
