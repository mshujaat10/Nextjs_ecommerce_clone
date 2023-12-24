import { FC, ReactNode } from "react"

interface ProductsProps {
    title:string;
    children:ReactNode;
}

const Title:FC<ProductsProps> = ({title,children}) => {
    return (
        <div className="pb-5 md:pb-10 pt-8 md:pt-10">
            <h1 className="text-sm md:text-xl font-bold">{title}</h1>
            {children}
        </div>
    )
}

export default Title