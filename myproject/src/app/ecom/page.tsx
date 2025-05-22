import React from 'react';

const productList = [
  {
    productName: "Nike Hyperdunk 2016 Low Basketball Shoes",
    price: { original: 299, discounted: 199 },
    imageUrl: "https://www.superfanas.lt/application/images/Image/5_KREPSINIO_BAT/NIKE/20160804/Nike-Hyperdunk-2016-Low-844363-401-Mens-basketball-shoes.jpg"
  },
  {
    productName: "2025 Limited Edition FIBA 3x3 Game Basketball",
    price: { original: 99, discounted: 49 },
    imageUrl: "https://www.wilson.com/en-us/media/catalog/product/article_images/WZ1011502XB_/WZ1011502XB__f6d00b5d17b47d66617f30febe232b4c.png"
  },
  {
    productName: "One Piece Roronoa Zoro GK Resin Statue Action Figurine",
    price: { original: 149, discounted: null },
    imageUrl: "https://media.karousell.com/media/photos/products/2023/6/20/one_piece_roronoa_zoro_gk_resi_1687245395_418c7965.jpg"
  },
  {
    productName: "Engraved Wooden Gift Boxed Wedding Champagne Glass Set",
    price: { original: 80, discounted: 39.99 },
    imageUrl: "https://premierprint.com.np/storage/products/engraved-wooden-gift-boxed-wedding-champagne-glass-set/1744899974.jpg"
  },
  {
    productName: "MSI Titan 18 HX Dragon Edition Norse Myth - RTX 50",
    price: { original: 4499, discounted: null },
    imageUrl: "https://storage-asset.msi.com/global/picture/news/2025/nb/titan18-20250407-2.jpg"
  }
];

const ProductCard = (props) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-72 m-4 p-4">
      <img
        src={props.imageUrl}
        alt={props.productName}
        className="rounded-xl h-48 w-full object-cover mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{props.productName}</h2>
      <div className="text-sm text-gray-600">
        {props.discounted ? (
          <>
            <span className="line-through text-red-400 mr-2">${props.original.toFixed(2)}</span>
            <span className="text-green-600 font-bold">${props.discounted.toFixed(2)}</span>
          </>
        ) : (
          <span className="text-gray-800 font-bold">${props.original.toFixed(2)}</span>
        )}
      </div>
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-semibold transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

const Ecom = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">🛒 Trending Products</h1>
      <div className="flex flex-wrap justify-center">
        {productList.map((item, id) => (
          <ProductCard
            key={id}
            productName={item.productName}
            original={item.price.original}
            discounted={item.price.discounted}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Ecom;
