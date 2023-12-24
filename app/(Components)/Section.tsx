// import lampImg from "@/public/sunmory-wood-tripod.png"
// import staplerImg from "@/public/Stapler.png"
// import uhuImg from "@/public/uhu-tube.png"
// import glueImg from "@/public/dollar-glue-stick.png"
// import inkImg from "@/public/Dollar Blue Fountain Pen.png"
// import Image from "next/image"
// import ProductCard from "./ProductCard"
// import Title from "./Title"
import { FC, ReactNode } from "react"

interface ProductsProps {
    children: ReactNode;
}

const Section: FC<ProductsProps> = ({ children }) => {
    return (
        <>
            <div className="px-3 md:px-7">
                {children}
            </div>


        </>
    )
}

export default Section