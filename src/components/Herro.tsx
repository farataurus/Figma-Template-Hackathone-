
import Image from "next/image";

export default function Hero(){
    return (
        <main className="bg-[#F2F0F1] md:h-[500px] md:px-10 sm:pt-4 md:pt-0 flex flex-col md:flex-row justify-between items-start max-w-screen-2xl mx-auto">
              {/* left */}
               <div className="  md:pl-0 md:w-[450px] lg:w-[600px] space-y-5  sm:pt-7 p-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="w-full sm:w-[140px] text-sm bg-black text-white py-2 px-8 rounded-[20px]" >Shop Now</button>
               </div>
               {/* mid div */}
               <div className="sm:hidden flex justify-evenly flex-wrap gap-y-4 mt-4 ml-4 space-x-4">
                  <div>
                    <h1 className="text-2xl font-bold">200+</h1>
                    <p className="text-xs">International Brands</p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">2,000+</h1>
                    <p className="text-xs">High-Quality Products</p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">30,000+</h1>
                    <p className="text-xs">Happy Customers</p>
                  </div>
               </div>
              {/* right */}
              <div className="relative">
              <Image src={"/images/profile.png"}
               className="w-[500px] h-[500px]"
              width={200} height={200} alt="hero-image"></Image> 
               <Image src={"/images/star.png"}
               className="w-[70px] sm:w-[100px] absolute top-[60px] right-6 "
              width={200} height={200} alt="hero-image"></Image> 
               <Image src={"/images/star.png"}
               className="w-[50px] sm:w-[70px]  absolute top-[230px] left-[0px] sm:left-[-30px] "
              width={200} height={200} alt="hero-image"></Image> 
              </div>
        </main>
    )
}
