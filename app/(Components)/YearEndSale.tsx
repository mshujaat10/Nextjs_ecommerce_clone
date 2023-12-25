import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import Image from 'next/image'
import bannerImg from "@/public/banners-351518086.jpeg"
import iphone11proImg from "/public/iphone11pro.png"
import iphoneXImg from "/public/iphoneX.png"
import realmec51Img from "/public/realmec51.png"
import realme9proplusImg from "/public/realme9proplus.png"
import iphone14proImg from "/public/iphone14pro.png"
import handsfreeImg from "/public/handsfree.png"

const YearEndSale = () => {
    const data = [
        {
            _id: "64c4Ye1",
            distag: "2%",
            imagesrc: iphone11proImg,
            productname: "Apple iPhone 11 Pro Max",
            price: "214999",
            oldprice: "219999"
        },
        {
            _id: "64c4Ye2",
            distag: "5%",
            imagesrc: iphoneXImg,
            productname: "Apple iPhone X",
            price: "79999",
            oldprice: "84999",
        },
        {
            _id: "64c4Ye3",
            distag: "15%",
            imagesrc: realmec51Img,
            productname: "Realme C35",
            price: "42499",
            oldprice: "49999",
        },
        {
            _id: "64c4Ye4",
            distag: "8%",
            imagesrc: realme9proplusImg,
            productname: "Realme 9 Pro Plus",
            price: "95999",
            oldprice: "104999",
        },
        {
            _id: "64c4Ye5",
            distag: "2%",
            imagesrc: iphone14proImg,
            productname: "Apple iPhone 14 Pro Max",
            price: "519999",
            oldprice: "534999",
        },
        {
            _id: "64c4Ye6",
            distag: "8%",
            imagesrc: handsfreeImg,
            productname: "Gionee Handsfree Original",
            price: "699",
            oldprice: "1030",
        }
    ]
    return (
        <>
            <Title title="12.12 Year End Sale" children={undefined} />
            <div className="flex">
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex space-x-4 w-max'>
                        {
                            data.map((items)=>{
                                return <ProductCard key={items._id} {...items}/>
                            })
                        }
                        {/* <ProductCard tag={"2%"} imageSrc={iphone11proImg} productName={"Apple iPhone 11 Pro Max"} price={"214999"} oldPrice={"219999"} />
                        <ProductCard tag={"5%"} imageSrc={iphoneXImg} productName={"Apple iPhone X"} price={"79999"} oldPrice={"84999"} />
                        <ProductCard tag={"15%"} imageSrc={realmec51Img} productName={"Realme C35"} price={"42499"} oldPrice={"49999"} />
                        <ProductCard tag={"8%"} imageSrc={realme9proplusImg} productName={"Realme 9 Pro Plus"} price={"95999"} oldPrice={"104999"} />
                        <ProductCard tag={"2%"} imageSrc={iphone14proImg} productName={"Apple iPhone 14 Pro Max"} price={"519999"} oldPrice={"534999"} />
                        <ProductCard tag={"8%"} imageSrc={handsfreeImg} productName={"Gionee Handsfree Original"} price={"699"} oldPrice={"1030"} /> */}

                    </div>
                </div>
            </div>

            <Title title="Shop By Price" children={undefined} />
            <div className="flex pb-10">
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex space-x-3 w-max'>
                        <button className='bg-blue-200 font-bold text-[13px] py-3 px-4 rounded-md'>PKR 0 - PKR 25000</button>
                        <button className='bg-blue-200 font-bold text-[13px] py-3 px-4 rounded-md'>PKR 25000 - PKR 50000</button>
                        <button className='bg-blue-200 font-bold text-[13px] py-3 px-4 rounded-md'>PKR 50000 - PKR 100000</button>
                        <button className='bg-blue-200 font-bold text-[13px] py-3 px-4 rounded-md'>PKR 100000 - PKR 200000</button>
                        <button className='bg-blue-200 font-bold text-[13px] py-3 px-4 rounded-md'>PKR 200000 - PKR 300000</button>
                        <button className='bg-blue-200 font-bold text-[13px] py-3 px-4 rounded-md'>PKR 300000 - PKR 500000</button>
                        <button className='bg-blue-200 font-bold text-[13px] py-3 px-4 rounded-md'>PKR 30000 - PKR 70000</button>
                    </div>
                </div>
            </div>
            <div>
                <Image src={bannerImg} height={1000} alt='Banner' />
            </div>
        </>
    )
}

export default YearEndSale