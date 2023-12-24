import Products from "../(Components)/Products"
import img from "@/public/Dollar Blue Fountain Pen.png"

export default function Page({ params }: { params: { slug: string } }) {
  const formatedpat = params.slug.replace(/-/g, ' ')
  const data = [
    {
      _id: "64c4f1",
      productname: "shujaat",
      price: "4000",
      oldprice: "3000",
      imageSrc: img
    },
    {
      _id: "64c4f2",
      productname: "ullah",
      price: "24000",
      oldprice: "23000",
      imageSrc: img
    },
    {
      _id: "64c4f3",
      productname: "khan",
      price: "34000",
      oldprice: "33000",
      imageSrc: img
    },

  ]
  return (
    <div>
      <h1>My Page {formatedpat}</h1>
      {data.map((item) => {
        return <Products key={item._id} {...item} />
      })}

    </div>
  )
}