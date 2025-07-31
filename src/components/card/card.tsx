import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number; // in percentage, e.g. 20
  image: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: 150,
    discount: 20,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw12684d70/nk/3e8/4/5/5/a/d/3e8455ad_c00c_4996_a85a_b5c4d38c6ae2.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 2,
    name: "Nike Revolution 6",
    price: 100,
    discount: 30,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwdee38433/nk/4db/8/a/4/d/2/4db8a4d2_a163_44aa_a822_b8140929809f.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 3,
    name: "Nike InfinityRN 4",
    price: 170,
    discount: 15,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8c5b49e4/nk/61e/3/4/e/4/b/61e34e4b_04cb_4dad_868f_09c68347ecec.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 4,
    name: "Nike Air Force 1",
    price: 130,
    discount: 25,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwd08ddbdd/nk/0f0/3/9/0/a/b/0f0390ab_4274_48ed_ae7f_9192ea202d7a.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 5,
    name: "Nike Pegasus 40",
    price: 160,
    discount: 35,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwdcc8b528/nk/ae9/0/e/c/1/b/ae90ec1b_13c3_4728_ab33_c1215184fddf.jpg?sw=520&sh=520&sm=fit",
  },
  {
    id: 6,
    name: "Nike Zoom Fly 5",
    price: 180,
    discount: 18,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwae11e260/nk/387/6/5/a/a/7/38765aa7_a391_46a1_8579_6378b19ae3ef.png?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 7,
    name: "Nike Court Vision",
    price: 110,
    discount: 22,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw42160a08/nk/547/1/3/e/f/e/54713efe_ad57_4934_826b_6dfb8a413f45.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 8,
    name: "Nike Blazer Mid",
    price: 140,
    discount: 10,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwe558b0b4/nk/fac/0/b/3/8/6/fac0b386_aed0_4214_a936_83cd43c94dd3.png?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 9,
    name: "Nike Free Run 5.0",
    price: 125,
    discount: 28,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwf9eefb18/nk/a72/a/7/c/2/d/a72a7c2d_0d61_499a_9042_58a2a022083b.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 10,
    name: "Nike Dunk Low",
    price: 160,
    discount: 20,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5df9d730/nk/f03/a/2/c/4/0/f03a2c40_6c16_4f34_811f_9275c057c547.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 11,
    name: "Nike Metcon 9",
    price: 150,
    discount: 25,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8f36a64a/nk/9e6/0/9/d/3/3/9e609d33_9652_4fec_94e7_3d71fd1c2b66.jpg?sw=1040&sh=1040&sm=fit",
  },
  {
    id: 12,
    name: "Nike Vapormax Plus",
    price: 190,
    discount: 30,
    image:
      "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw4b94503f/nk/d0e/c/7/2/3/8/d0ec7238_e174_41c6_8eeb_c9d1629a4cd7.jpg?sw=1040&sh=1040&sm=fit",
  },
];

const Card: React.FC = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 px-4 bg-gray-50 mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">🔥 On Card</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {initialProducts.map((product) => {
          const discountedPrice = (
            product.price *
            (1 - product.discount / 100)
          ).toFixed(2);
          const isLiked = wishlist.includes(product.id);

          return (
            <div
              key={product.id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden transition hover:scale-[1.02] hover:shadow-xl duration-300"
            >
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 z-10 text-red-500 bg-white rounded-full p-1 shadow-sm hover:scale-110 transition"
              >
                {isLiked ? <Heart className="fill-red-500" /> : <HeartOff />}
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-black">
                    ${discountedPrice}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ${product.price}
                  </span>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                </div>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
