const ProductCard = ({ product }) => {
  return (
    <div className=" shadow-lg rounded-xl p-4 w-full max-w-xs hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <img
        src={product.imageUrl}
        alt={product.productName}
        className="w-full h-40 object-contain rounded-lg bg-slate-100"
      />
      <h2 className="mt-4 font-semibold text-lg text-slate-800">
        {product.productName}
      </h2>

      <p className="mt-2 text-slate-700 text-base">
        {product.price.discounted !== null ? (
          <>
            <span className="text-teal-600 font-bold text-lg">
              Rs.{product.price.discounted}
            </span>{" "}
            <span className="line-through text-sm text-slate-400">
              Rs.{product.price.original}
            </span>
          </>
        ) : (
          <span className="font-bold text-slate-800">
            Rs.{product.price.original}
          </span>
        )}
      </p>

      <div className="mt-4 flex gap-3">
        <button className="flex-1 bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition">
          Add to Cart
        </button>
        <button className="flex-1 border border-teal-600 text-teal-600 font-semibold py-2 px-4 rounded-lg hover:bg-teal-50 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
