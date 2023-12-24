import Image from 'next/image';
import mobilebannerImg from "@/public/mobilesbanner.png"
import smBannerImg from "@/public/recent-products-sm-banner.png"
import ProductCard from './ProductCard';
import Title from './Title';
import tripodImg from "/public/sunmory-wood-tripod.png"
import staplerImg from "/public/Stapler.png"
import glueImg from "/public/dollar-glue-stick.png"
import inkImg from "/public/Dollar Blue Fountain Pen.png"
import uhuImg from "/public/uhu-tube.png"
import lampImg from "/public/santner-wooden-floor-lamp-24.png"


const RecentProducts = () => {
    const data = [
        {
            _id:"64c4Re1",
            distag:"12%",                                                                         
            imagesrc:tripodImg,
            productname:"Sunmory Wood Tripod La...",
            price:"6999",
            oldprice:"7999",
        },
        {
            _id:"64c4Re2",
            distag:"6%",
            imagesrc:staplerImg,
            productname:"FUJI Stapler HD-10N",
            price:"1730",
            oldprice:"1050",
        },
        {
            _id:"64c4Re3",
            distag:"17%",
            imagesrc:glueImg,
            productname:"Dollar Glue Stick 35g",
            price:"1430",
            oldprice:"1500",
        },
        {
            _id:"64c4Re4",
            distag:"27%",
            imagesrc:inkImg,
            productname:"Dollar Blue Fountain Pen In...",
            price:"290",
            oldprice:"399",
        },
        {
            _id:"64c4Re5",
            distag:"4%",
            imagesrc:uhuImg,
            productname:"UHU Tube No.11 12ml",
            price:"1430",
            oldprice:"1500",
        },
        {
            _id:"64c4Re6",
            distag:"18%",
            imagesrc:lampImg,
            productname:"Santner Wooden Floor Lamp",
            price:"5399",
            oldprice:"6599",
        }
    ]
    return (
        <>
            <Title title="Recent Products" children={undefined} />
            <div className="flex">
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex space-x-4 w-max'>
                        <ProductCard tag={"12%"} imageSrc={tripodImg} productName={"Sunmory Wood Tripod La..."} price={"6999"} oldPrice={"7999"} />
                        <ProductCard tag={"6%"} imageSrc={staplerImg} productName={"FUJI Stapler HD-10N"} price={"1730"} oldPrice={"1050"} />
                        <ProductCard tag={"17%"} imageSrc={glueImg} productName={"Dollar Glue Stick 35g"} price={"1430"} oldPrice={"1500"} />
                        <ProductCard tag={"27%"} imageSrc={inkImg} productName={"Dollar Blue Fountain Pen In..."} price={"290"} oldPrice={"399"} />
                        <ProductCard tag={"4%"} imageSrc={uhuImg} productName={"UHU Tube No.11 12ml"} price={"1430"} oldPrice={"1500"} />
                        <ProductCard tag={"18%"} imageSrc={lampImg} productName={"Santner Wooden Floor Lamp"} price={"5399"} oldPrice={"6599"} />
                    </div>
                </div>
            </div>
            <div className="mt-14 mb-3">
                <Image className='hidden sm:block' src={mobilebannerImg} width={5000} height={5000} alt="mobile banner" />
                <Image className='sm:hidden' src={smBannerImg} width={5000} height={5000} alt="mobile banner" />
            </div>
        </>
    )
}

export default RecentProducts