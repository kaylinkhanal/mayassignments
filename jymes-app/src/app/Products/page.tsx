"use client";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    productName: "Smartphone Holder for Car",
    price: { original: 1500.99, discounted: 1200.99 },
    imageUrl: "https://m.media-amazon.com/images/I/71NIbVGbncL._AC_SL1500_.jpg",
  },
  {
    productName: "Wireless Ergonomic Mouse",
    price: { original: 2500.0, discounted: 1900.99 },
    imageUrl:
      "https://th.bing.com/th/id/OIP.ZPC0RXK8188VrdsSQOVFwgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    productName: "Stainless Steel Water Bottle",
    price: { original: 2000.0, discounted: null },
    imageUrl:
      "https://th.bing.com/th/id/OIP.hy8yeEt8bXC4CSa4nbEGZwHaJC?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    productName: "Portable Bluetooth Speaker",
    price: { original: 4500.0, discounted: 3900.99 },
    imageUrl: "https://m.media-amazon.com/images/I/81djh1gfUwL._AC_SL1500_.jpg",
  },
  {
    productName: "Yoga Mat with Carrying Strap",
    price: { original: 3000.0, discounted: null },
    imageUrl:
      "https://th.bing.com/th/id/OIP.gF_MkodwkmCYrHKaWRaGzQHaGU?cb=iwp2&rs=1&pid=ImgDetMain",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl pt-5 font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
