import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let product: Iproducts[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/product1.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$120",
    img_url: "/product2.png",
    old_price: "$200",
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$120",
    img_url: "/product3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$120",
    img_url: "/product4.png",
    old_price: "$200",
  },
];

export default function Products() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {product.map((data) => (
          <div key={data.id}>
            <Link href={`/product/${data.id}`}>
              <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  className="w-full h-full rounded-[20px]"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            <div>
              <p className="text-lg mt-2 font-bold">{data.title}</p>
              <div className="flex text-yellow-400">
                {Array(5) // Dynamically create 5 stars
                  .fill(null)
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
              </div>
              <p className="font-bold mt-1">
                {data.price}{" "}
                <span className="text-gray-400 font-bold line-through">
                  {data.old_price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}