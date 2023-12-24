import Image from "next/image";

const Products = ({ productname, price, oldprice,imageSrc }: any) => {
    return (
      <div>
        <p>{productname}</p>
        <p>{price}</p>
        <p>{oldprice}</p>
        <Image src={imageSrc} width={100} height={100} alt="image"/>
      </div>
    );
  };
  
  export default Products;