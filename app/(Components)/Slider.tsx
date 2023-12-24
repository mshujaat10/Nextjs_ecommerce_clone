import Image from "next/image"
import heroImg from "@/public/hero1.png"
import heroImg2 from "@/public/hero2.png"

const Slider = () => {
  return (
    <div className="h-[18rem] md:h-[19rem] lg:h-[21rem] sm:h-[17rem] xs:px-12 sm:px-0">
    <Image src={heroImg} className="h-full hidden sm:block" width={2000} height={2000} alt="Hero Image"/>
    <Image src={heroImg2} className="h-full block sm:hidden" width={2000} height={2000} alt="Hero Image"/>
    </div>
  )
}

export default Slider