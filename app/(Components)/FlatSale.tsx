import ProductCard from "./ProductCard"
import Title from "./Title"
import realmec25yImg from "/public/realmec25y.png"
import realmec51Img from "/public/realmec51.png"
import realme9proplusImg from "/public/realme9proplus.png"
import budst100Img from "/public/budst100.png"
import realmebudsImg from "/public/realme-buds-q2s-wireless-earphones-38.png"
import budsQImg from "/public/budsQ.png"

const FlatSale = () => {
    const data = [
        {
            _id: "64c4Fs1",
            distag: "30%",
            imagesrc: realmec25yImg,
            productname: "Realme C25Y",
            price: "34999",
            oldprice: "49999",
        },
        {
            _id: "64c4Fs2",
            distag: "15%",
            imagesrc: realmec51Img,
            productname: "Realme C35",
            price: "42499",
            oldprice: "49999",
        },
        {
            _id: "64c4Fs3",
            distag: "8%",
            imagesrc: realme9proplusImg,
            productname: "Realme 9 Pro Plus",
            price: "95999",
            oldprice: "104999",
        },
        {
            _id: "64c4Fs4",
            distag: "22%",
            imagesrc: budst100Img,
            productname: "Realme TechLife Buds T100",
            price: "6599",
            oldprice: "8499",
        },
        {
            _id: "64c4Fs5",
            distag: "6%",
            imagesrc: realmebudsImg,
            productname: "Realme Buds Q2s Wireles...",
            price: "6999",
            oldprice: "7499",
        },
        {
            _id: "64c4Fs6",
            distag: "16%",
            imagesrc: budsQImg,
            productname: "Realme Buds Q",
            price: "4999",
            oldprice: "5999",
        }
    ]
    return (
        <>
            <Title title="Flat 30% off on Realme" children={undefined} />
            <div className="flex">
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex space-x-4 w-max'>
                        {
                            data.map((items)=>{
                                return <ProductCard key={items._id} {...items} />
                            })
                        }
                        {/* <ProductCard tag={"30%"} imageSrc={realmec25yImg} productName={"Realme C25Y"} price={"34999"} oldPrice={"49999"} />
                        <ProductCard tag={"15%"} imageSrc={realmec51Img} productName={"Realme C35"} price={"42499"} oldPrice={"49999"} />
                        <ProductCard tag={"8%"} imageSrc={realme9proplusImg} productName={"Realme 9 Pro Plus"} price={"95999"} oldPrice={"104999"} />
                        <ProductCard tag={"22%"} imageSrc={budst100Img} productName={"Realme TechLife Buds T100"} price={"6599"} oldPrice={"8499"} />
                        <ProductCard tag={"6%"} imageSrc={realmebudsImg} productName={"Realme Buds Q2s Wireles..."} price={"6999"} oldPrice={"7499"} />
                        <ProductCard tag={"16%"} imageSrc={budsQImg} productName={"Realme Buds Q"} price={"4999"} oldPrice={"5999"} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlatSale 