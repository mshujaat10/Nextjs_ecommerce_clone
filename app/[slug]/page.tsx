// import Products from "../(Components)/Products"
import ProductDetail from "@/app/(Components)/ProductDetail"
import img from "@/public/Dollar Blue Fountain Pen.png"

export default function Page({ params }: { params: { slug: any } }) {
  const formatedpat = params.slug
  const data = [
    {
        _id: "64c4Fs1",
        distag: "30%",
        // imagesrc: realmec25yImg,
        productname: "Realme C25Y",
        price: "34999",
        oldprice: "49999",
    }
]

  // const router = useRouter();
  const { productId } = formatedpat; // Assuming your dynamic route parameter is named 'productId'

  const product = data.filter((item) => item._id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      {/* <h1>My Page {formatedpat}</h1> */}
      <ProductDetail {...product}/>
      {/* {data.map((item) => {
        return <Products key={item._id} {...item} />
      })} */}

    </div>
  )
}