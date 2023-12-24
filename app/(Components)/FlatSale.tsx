import ProductCard from "./ProductCard"
import Title from "./Title"
import realmec25yImg from "/public/realmec25y.png"
import realmec51Img from "/public/realmec51.png"
import realme9proplusImg from "/public/realme9proplus.png"
import budst100Img from "/public/budst100.png"
import realmebudsImg from "/public/realme-buds-q2s-wireless-earphones-38.png"
import budsQImg from "/public/budsQ.png"

const FlatSale = () => {
    return (
        <>
            <Title title="Flat 30% off on Realme" children={undefined} />
            <div className="flex">
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex space-x-4 w-max'>
                        <ProductCard tag={"30%"} imageSrc={realmec25yImg} productName={"Realme C25Y"} price={"34999"} oldPrice={"49999"} />
                        <ProductCard tag={"15%"} imageSrc={realmec51Img} productName={"Realme C35"} price={"42499"} oldPrice={"49999"} />
                        <ProductCard tag={"8%"} imageSrc={realme9proplusImg} productName={"Realme 9 Pro Plus"} price={"95999"} oldPrice={"104999"} />
                        <ProductCard tag={"22%"} imageSrc={budst100Img} productName={"Realme TechLife Buds T100"} price={"6599"} oldPrice={"8499"} />
                        <ProductCard tag={"6%"} imageSrc={realmebudsImg} productName={"Realme Buds Q2s Wireles..."} price={"6999"} oldPrice={"7499"} />
                        <ProductCard tag={"16%"} imageSrc={budsQImg} productName={"Realme Buds Q"} price={"4999"} oldPrice={"5999"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlatSale 