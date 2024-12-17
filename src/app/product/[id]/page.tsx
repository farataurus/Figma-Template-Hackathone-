"use client"
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import CustomerTestimonials from "@/components/AllReviews";
import { BreadcrumbCollapsed } from "@/components/Breadcrupm";
import T_shirts from "@/components/products";

interface Iproducts {
    title: string;
    price: string;
    id: number;
    rating?: string;
    old_price?: string;
    img_url: string;
    img1: string;
    img2: string;
    img3: string;
}

const star = Array(5)
    .fill(0)
    .map((_, index) => <FaStar key={index} />);

const product: Iproducts[] = [
    {
        title: "T-SHIRT WITH TAPE DETAILS",
        id: 1,
        price: "$120",
        img_url: "/product1.png",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/detail3.png",
    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: "$120",
        img_url: "/product2.png",
        old_price: "$200",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/detail3.png",
    },
    {
        title: "CHECKERED SHIRT",
        id: 3,
        price: "$120",
        img_url: "/product3.png",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/detail3.png",
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 4,
        price: "$120",
        img_url: "/product4.png",
        old_price: "$200",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/detail3.png",
    },
];

export default function Pro_Detail() {
    const params = useParams();
    const id = params.id; //dynamic id ye se milengii
    const item = product.find((item) => item.id === Number(id));
    if (!item) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
            <BreadcrumbCollapsed />
            <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
                    {/* Images */}
                    {[item.img1, item.img2, item.img3].map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3"
                            alt={`product detail ${index}`}
                            width={100}
                            height={100}
                        />
                    ))}
                </div>
                {/* Mid div */}
                <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
                    <Image
                        src={item.img3}
                        alt="product detail"
                        className="w-full h-[95%]"
                        width={100}
                        height={100}
                    />
                </div>
                {/* Right div */}
                <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        {item.title}
                    </h1>
                    <div className="flex text-yellow-400">{star}</div>
                    <p className="font-bold mt-1">
                        {item.price}{" "}
                        <span className="text-gray-400 font-bold line-through">
                            {item.old_price}
                        </span>
                    </p>
                    <p>
                        This graphic t-shirt which is perfect for any occasion.
                        Crafted from a soft and breathable fabric, it offers
                        superior comfort and style.
                    </p>
                    {/* Select color */}
                    <div className="mt-5">
                        <p className="text-gray-500">Select Colors</p>
                        <div className="flex space-x-3 mt-2">
                            {["#4F4631", "#314F4A", "#31344F"].map(
                                (color, index) => (
                                    <div
                                        key={index}
                                        className="w-[37px] h-[37px] rounded-full flex justify-center items-center"
                                        style={{ backgroundColor: color }}
                                    >
                                        <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    {/* Choose Size */}
                    <div className="mt-4">
                        <p className="text-gray-500">Choose Size</p>
                        <div className="flex space-x-3 mt-2">
                            {["Small", "Medium", "Large", "X-Large"].map(
                                (size, index) => (
                                    <div
                                        key={index}
                                        className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400"
                                    >
                                        {size}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-start items-center mt-7 space-x-4">
                        <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                            <Minus />
                            1
                            <Plus />
                        </div>
                        <Button className="bg-black text-white w-[300px]">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
            <CustomerTestimonials />
            <T_shirts />
        </div>
    );
}
