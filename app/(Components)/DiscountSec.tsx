import redgiftboxImg from "@/public/redgiftbox.png"
import Image from "next/image"
import disfourtyImg from "@/public/disbanner-40.png"
import disfiftyImg from "@/public/disbanner-50.png"
import disixtyImg from "@/public/disbanner-60.png"
import diseventyfiveImg from "@/public/disbanner-75.png"

const DiscountSec = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className="pb-10 pt-10 flex items-center">
                    <h1 className="text-sm md:text-xl font-bold">Special Offers</h1>
                    <span className="text-[11px] md:text-xs opacity-50">Wisemarket Find Best Of The Best Phones For You Only</span>
                </div>
                <div className='lg:flex hidden'>
                    <div className='flex flex-col justify-center'>
                        <span className='text-sm'>ON EVERY PURCHASE</span>
                        <span className='font-bold'>+ EARN REWARD POINTS</span>
                    </div>
                    <div>
                        <Image src={redgiftboxImg} width={150} height={150} alt='gift box' />
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex space-x-4 w-max'>
                        <div>
                            <Image src={disfourtyImg} width={310} height={310} alt="Discount banner" />
                        </div>
                        <div>
                            <Image src={disfiftyImg} width={310} height={310} alt="Discount banner" />
                        </div>
                        <div>
                            <Image src={disixtyImg} width={310} height={310} alt="Discount banner" />
                        </div>
                        <div>
                            <Image src={diseventyfiveImg} width={310} height={310} alt="Discount banner" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DiscountSec