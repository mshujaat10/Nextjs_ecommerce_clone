import Slider from "./Slider"
import mobileImg from "@/public/mobiles.png"
import laptopImg from "@/public/laptop.png"
import tabletImg from "@/public/tabs.png"
import watcheImg from "@/public/smart-watches.png"
import accesoriesImg from "@/public/accessories.png"
import earbudsImg from "@/public/wireless-earbuds.png"
import homelifestyleImg from "@/public/home-and-lifestyle.png"
import gamingImg from "@/public/gaming.png"
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <Slider />
      <div className="pt-7 overflow-hidden">

        <div className="px-3 md:px-7 pb-3">
          <h1 className="text-sm md:text-xl font-bold">Explore Popular Categories</h1>
        </div>

        <div className="flex items-center justify-evenly">
          <div className='overflow-x-auto no-scrollbar w-full'>
            <div className='flex w-max md:w-full justify-evenly'>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 w-24 lg:w-full">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={mobileImg} width={123} height={123} alt="Mobile" />
                </div>
                <p className="text-center text-sm">Mobile</p>
              </div>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 w-24 lg:w-full">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={laptopImg} width={123} height={123} alt="Laptops" />
                </div>
                <p className="text-center text-sm">Laptops</p>
              </div>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 w-24 lg:w-full">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={tabletImg} width={123} height={123} alt="Tablets" />
                </div>
                <p className="text-center text-sm">Tablets</p>
              </div>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 w-24 lg:w-full">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={watcheImg} width={123} height={123} alt="Smart Watches" />
                </div>
                <p className="text-center text-sm">Smart Watches</p>
              </div>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 w-24 lg:w-full">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={accesoriesImg} width={123} height={123} alt="Accessories" />
                </div>
                <p className="text-center text-sm">Accessories</p>
              </div>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 box-border w-24 lg:w-full">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={earbudsImg} width={123} height={123} alt="Wireless Earbuds" />
                </div>
                <p className="text-center text-sm">Wireless Earbuds</p>
              </div>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 w-24 lg:w-full">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={homelifestyleImg} width={123} height={123} alt="Home And Lifestyle" />
                </div>
                <p className="text-center text-sm">Home And <br /> Lifestyle</p>
              </div>

              <div className="flex flex-col rounded-full items-center hover:text-green-500 hover:font-bold cursor-pointer mx-2 w-24 lg:w-full ">
                <div className="border-2 rounded-full hover:border-green-500">
                  <Image src={gamingImg} width={123} height={123} alt="Gaming" />
                </div>
                <p className="text-center text-sm">Gaming</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero