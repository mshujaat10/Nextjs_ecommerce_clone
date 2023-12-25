import React from 'react'
import uhuImg from "@/public/uhu-tube.png"
import Image from 'next/image'

const ProductDetail = ({ _id, tag, imagesrc, productname, price, oldPrice }: any) => {
  return (
    <>
      <div className='lg:grid grid-cols-2 lg:py-12 px-3 py-3'>

        <div className='lg:me-8'>
          <div className='flex justify-end'>
            <div className='bg-red-500 w-fit text-white text-center text-xs lg:text-sm py-1 rounded-md px-8'>
              <i className="fa-solid fa-tag"></i>
              <span className='font-bold'>9% Off</span>
            </div>
          </div>

          <div className='flex justify-center'>
            <Image src={uhuImg} width={350} height={350} alt='product' />
          </div>

          <div className='text-center'>
            <p className='font-medium text-xs lg:text-sm'><i className="fa-solid fa-circle-check me-1 text-sm lg:text-lg text-green-700"></i>Authenticated & sold by <span className='font-bold'>"Wisemarket"</span></p>
          </div>

        </div>

        <div>

          <div className='pt-10 lg:pt-0'>
            <h1 className='text-lg lg:text-3xl font-bold'>UHU Tube No.12 <span className='font-normal text-xs lg:hidden'>(Only 1 left)</span></h1>

            <div className='text-xs flex items-center'>
              <div className='border-r-2 border-r-gray-400 w-fit py-1 pe-2'>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <div className='border-r-2 border-r-gray-400 w-fit py-1 px-2'>
                <span className='opacity-60'>0 Reviews</span>
              </div>
              <div className='w-fit py-1 ps-2 hidden lg:block'>

                <i className="fa-solid fa-fire-flame-simple text-orange-400 text-lg me-1"></i>
                <span className='font-bold opacity-70'>Hot selling! only 1 left</span>
              </div>
            </div>

            <div className='hidden lg:block'>
              <span className='font-bold text-2xl'>PKR 1170</span>
              <span className='font-bold text-xs opacity-30 line-through ms-3'>PKR1299</span>
            </div>
            <div className='mt-3'>
              <p className='font-bold text-xs mb-1'>Package: <span className='opacity-50'>Pack of 5</span></p>
              <button className='border-2 rounded-md lg:py-2 lg:px-5 me-1 lg:me-3 bg-green-200 font-medium py-1 px-3'>Pack of 5</button>
              <button className='border-2 rounded-md lg:py-2 lg:px-5 me-1 lg:me-3 font-medium hover:bg-green-200 py-1 px-3'>Pack of 10</button>

            </div>
          </div>

          <div className='mt-10 lg:flex items-center hidden'>
            <button className='bg-black text-white rounded-md py-3 px-14 font-bold me-2'><i className="fas fa-shopping-cart text-lg me-2 text-white"></i>
              Buy Now</button>
            <button className='bg-green-600 text-white rounded-md py-3 px-12 font-bold'><i className="fas fa-shopping-cart text-lg me-2 text-white"></i>Add to Cart</button>
            <i className="far fa-heart border-2 text-green-400 rounded-md text-2xl p-2 mx-2"></i>
            <i className="fas fa-balance-scale border-2 text-green-400 rounded-md text-2xl p-2"></i>
          </div>

          <div className='border-t-2 border-gray-300 mt-5'>
            <h1 className='font-bold md:text-xl my-4'>Description</h1>
            <ul className='list-disc ps-4'>
              <li className='text-xs lg:text-[13px]'><i> UHU The All Purpose adhesive 20cc</i></li>
              <li className='text-xs lg:text-[13px]'><i> Made in Germany</i></li>
              <li className='text-xs lg:text-[13px]'><i> Fast, Permanent, Transparent, and Adjustable Glue</i></li>
              <li className='text-xs lg:text-[13px]'><i> Perfect glue for Everyday Jobs</i></li>
              <li className='text-xs lg:text-[13px]'><i> Works On Virtually Every Type of Material</i></li>
            </ul>
          </div>

        </div>


      </div>

      <div className='shadow-black shadow-lg bg-white sticky bottom-0 w-full flex justify-between px-2 py-1 lg:hidden md:fixed'>

        <div className='w-fit flex flex-col items-start'>
          <div>
            <i className="fa-solid fa-fire-flame-simple text-orange-400 me-1"></i>
            <span className='font-bold text-xs'>Hot selling!</span>
          </div>

          <span className='font-bold text-lg'>PKR 1170</span>
          <span className='line-through text-xs'>PKR1299</span>
        </div>

        <div className='flex items-end'>
          <i className="far fa-heart border-2 text-green-400 rounded-md mx-2 p-2 text-2xl"></i>
          <i className="fas fa-balance-scale border-2 text-green-400 rounded-md p-2 text-2xl me-2"></i>
          <button className='bg-black hidden md:block text-white rounded-md py-3 px-14 font-bold me-2'><i className="fas fa-shopping-cart text-lg me-2 text-white"></i>
            Buy Now</button>
          <button className='bg-green-600 text-white rounded-md md:py-3 md:px-12 font-bold py-3 px-2'><i className="fas fa-shopping-cart text-xs me-2 text-white"></i>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail