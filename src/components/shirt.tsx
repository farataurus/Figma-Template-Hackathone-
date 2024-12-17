import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

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
  // Duplicates for testing
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 4,
    price: "$120",
    img_url: "/product1.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 5,
    price: "$120",
    img_url: "/product2.png",
    old_price: "$200",
  },
  {
    title: "CHECKERED SHIRT",
    id: 6,
    price: "$120",
    img_url: "/product3.png",
  },
];

export default function Shirt() {
  return (
    <div className="w-full md:h-[500px]">
      <h1 className="text-[25px] font-bold relative pl-5">
        Casual{" "}
        <span className="text-sm font-bold flex items-center justify-center absolute right-10 top-2">
          Most Popular <RiArrowDropDownLine />
        </span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 p-2 md:p-0 md:place-items-center">
        {product.map((data) => (
          <div
            key={data.id}
            className={`${
              data.id === 3 ? "hidden" : "hiddin"
            } md:block mb-10 mt-1`}
          >
            <Link href={`/product/${data.id}`}>
              <div className="w-[160px] md:w-[230px] h-[160px] md:h-[230px] bg-[#F0EEED] rounded-[20px]">
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
              <p className="text-sm md:text-lg mt-2 font-bold">{data.title}</p>
              <p className="flex text-yellow-400">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </p>
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