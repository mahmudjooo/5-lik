import React from "react";

const womenProducts = [
  {
    id: 1,
    title: "Nike Air Max Dawn",
    category: "Women's Shoes",
    price: "$150",
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwa84f1721/nk/ace/7/4/7/0/f/ace7470f_fab7_45e8_b4d6_bcb361b1eb33.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 2,
    title: "Nike Sportswear Fleece",
    category: "Women's Hoodie",
    price: "$90",
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw69559e50/nk/d03/8/2/8/7/5/d0382875_94af_4a2f_a788_6d2ce0657de2.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 3,
    title: "Nike Pro Leggings",
    category: "Women's Training",
    price: "$60",
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw4bcdae80/nk/7f3/5/4/c/3/1/7f354c31_bdbf_4f49_bd67_e56d35b5ec49.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 4,
    title: "Nike Sportswear Club",
    category: "Women's Pants",
    price: "$75",
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw6886236c/nk/821/b/c/b/c/c/821bcbcc_598d_44f6_86f5_90a48348fd82.jpg?sw=1040&sh=1040&sm=fit",
  },
];

const Women = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Women's Collection</h2>
        <p className="text-gray-600 mt-2">Comfort and style for every step.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {womenProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain mb-4 group-hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Women;
