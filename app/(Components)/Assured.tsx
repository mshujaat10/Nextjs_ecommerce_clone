import Image from "next/image"
import brandImg from "@/public/Back Deep Purple.png"
import AssuredSec from "./AssuredSec"

const Assured = () => {
    return (
        <div className="px-3 md:px-7 pt-16">
            <div className="flex justify-between flex-col lg:flex-row">
                <div className="lg:w-[30%] mb-4 lg:mb-0">
                    <h1 className="text-xl font-bold">Hey, <span className="text-green-600">Condition Explained</span> by Wisemarket</h1>
                    <p className="m-0 text-sm">Refurbished  phones come  in  4  variants  -  OpenBox ,  Superb , Good ,  Fair. Still puzzled? Check out explanatory videos to learn more.</p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap lg:w-[70%] items-center lg:justify-evenly">

                    <div className="flex flex-col items-center relative mt-3 me-8 md:me-3 lg:me-0">
                        <div className="border-4 rounded-full py-[1.4rem] lg:py-[0.9rem] px-10 w-32 lg:w-full">
                            <Image src={brandImg} width={50} height={50} alt='infinixImg' />
                        </div>
                        <span className="text-xs absolute p-[3px] top-[85%] bg-gray-100 px-2 rounded-md"><i className="fa-solid fa-box-open"></i>Brand New</span>
                    </div>

                    <div className="flex flex-col items-center relative mt-3 me-8 md:me-3 lg:me-0">
                        <div className="border-4 rounded-full py-[1.4rem] lg:py-[0.9rem] px-10 w-32 lg:w-full">
                            <Image src={brandImg} width={50} height={50} alt='infinixImg' />
                        </div>
                        <span className="text-xs absolute p-[3px] top-[85%] bg-gray-100 px-4 rounded-md"><i className="fa-solid fa-ribbon pe-1"></i>As New</span>
                    </div>

                    <div className="flex flex-col items-center relative mt-3 me-8 md:me-3 lg:me-0">
                        <div className="border-4 rounded-full py-[1.4rem] lg:py-[0.9rem] px-10 w-32 lg:w-full">
                            <Image src={brandImg} width={50} height={50} alt='infinixImg' />
                        </div>
                        <span className="text-xs absolute p-[3px] top-[85%] bg-gray-100 px-3 rounded-md"><i className="fa-solid fa-gem pe-1"></i>Excellent</span>
                    </div>

                    <div className="flex flex-col items-center relative mt-3 me-8 md:me-3 lg:me-0">
                        <div className="border-4 rounded-full py-[1.4rem] lg:py-[0.9rem] px-10 w-32 lg:w-full">
                            <Image src={brandImg} width={50} height={50} alt='infinixImg' />
                        </div>
                        <span className="text-xs absolute p-[3px] top-[85%] bg-gray-100 px-5 rounded-md"><i className="fa-solid fa-thumbs-up pe-1"></i>Good</span>
                    </div>

                    <div className="flex flex-col items-center relative mt-3">
                        <div className="border-4 rounded-full py-[1.4rem] lg:py-[0.9rem] px-10 w-32 lg:w-full">
                            <Image src={brandImg} width={50} height={50} alt='infinixImg' />
                        </div>
                        <span className="text-xs absolute p-[3px] top-[85%] bg-gray-100 px-6 rounded-md"><i className="fa-solid fa-circle-check pe-1"></i>Fair</span>
                    </div>


                </div>
            </div>
            <AssuredSec />
        </div>
    )
}

export default Assured