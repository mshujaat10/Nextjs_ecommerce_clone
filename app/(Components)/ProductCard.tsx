import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    tag: string;
    imageSrc: StaticImageData;
    productName: string;
    price: string;
    oldPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ tag, imageSrc, productName, price, oldPrice }) => {
    const formattedProductName = productName.replace(/\s+/g, '-');
    return (
        <Link href={`/${formattedProductName}`}>
            <div className="border-2 bg-gray-100 w-fit h-fit md:w-fit rounded-md cursor-pointer">
                <div className="bg-white px-2 pt-1 pb-3">
                    <div className="flex justify-between">
                        <div>
                            <i className="fa-solid fa-tag text-red-500"></i>
                            <span>{tag}</span>
                        </div>
                        <i className="fa-regular fa-heart text-green-500"></i>
                    </div>
                    <div>
                        <Image src={imageSrc} width={200} height={200} alt="products" />
                    </div>
                    <div className="font-semibold text-sm">{productName}</div>
                </div>
                <div className="px-2 pt-2 pb-2">
                    <div className="text-[10px]">
                        <i className="fa-solid fa-star text-green-500"></i>
                        <span className="mx-0.5">(0)</span>
                        <span>Free Shipping</span>
                    </div>
                    <div className="mt-1 mb-2">
                        <span className="font-bold text-[13px]">PKR {price}</span>
                        <span className="line-through opacity-70 text-[10px] md:text-xs ms-2">PKR {oldPrice}</span>
                    </div>
                    <button className="bg-green-600 text-white w-full rounded-md py-2 font-medium hidden md:block"><i className="fas fa-shopping-cart me-2"></i>Add to Cart</button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard