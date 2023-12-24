import Image from "next/image"
import img from "@/public/logo_image.png"
import NavSideBar from "./NavSideBar"

const Navbar = () => {

    return (
        <>
        {/* <NavSideBar/> */}
        <div className="sticky bg-white top-0 z-10">
            <nav className="lg:grid lg:grid-cols-3 flex items-center justify-between md:px-8 px-3 py-6 border bottom-10 box-content">
            <div className="flex items-center">
                <div className="lg:hidden">
                    <i className="fa-solid fa-bars text-2xl me-2" typeof="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i>
                </div>
                <div className="md:col-span-1 flex items-center">
                    <Image src={img} width={150} height={150} alt="logo_image" />
                </div>
                </div>
                <div className="flex items-center lg:hidden">
                    <i className="fas fa-search text-2xl me-2"></i>
                    <i className="fas fa-shopping-cart text-2xl"></i>
                </div>

                <div className="hidden col-span-1 lg:flex items-center bg-gray-100 cursor-pointer border rounded-md border-gray-300 px-3 hover:border-green-600">
                    <input type="text" placeholder="Search By Brand, Model, Color..." className="px-2 py-2 text-sm  rounded-md bg-gray-100 w-3/4  focus-visible:outline-none" />
                    <div className="flex justify-end w-1/2">
                        <i className="fas fa-search"></i>
                    </div>
                </div>

                <div className="hidden col-span-1 lg:flex items-center space-x-4 justify-end">
                    <div className="flex items-center space-x-2">
                        <i className="far fa-user-circle text-2xl"></i>
                        <span className="text-sm">Login / Register</span>
                    </div>
                    <i className="fas fa-balance-scale text-2xl border-gray-300 border-l-2 py-1 ps-2"></i>
                    <i className="far fa-heart text-2xl border-gray-300 border-l-2 py-1 ps-2"></i>
                    <i className="fas fa-shopping-cart text-2xl border-gray-300 border-l-2 py-1 ps-2"></i>
                </div>
            </nav>

            <div className="hidden lg:flex py-4 items-center px-2 xl:px-8 xl:pe-[8rem] justify-center xl:justify-between shadow-md">
                <div className="text-[12px] xl:text-[13px] font-medium">
                    <span className="border-r-2 pe-3 cursor-pointer">
                        All Categories
                        <i className="fa-solid fa-angle-down ms-1"></i>
                    </span>
                    <span className="text-rose-600 cursor-pointer xl:ms-12 lg:ms-1">
                        <i className="fa-solid fa-fire-flame-simple text-orange-400 text-lg me-1"></i>
                        Hot Offers
                        <i className="fa-solid fa-angle-down text-black mx-1"></i>
                    </span>
                </div>
                <ul className="flex text-[12px] xl:text-[13px]">
                    <li className="ms-2 cursor-pointer">Mobile</li>
                    <li className="mx-2 cursor-pointer">Laptop</li>
                    <li className="mx-2 cursor-pointer">Tablets</li>
                    <li className="mx-2 cursor-pointer">Smart Watches</li>
                    <li className="mx-2 cursor-pointer">Accessories</li>
                    <li className="mx-2 cursor-pointer">Wireless Earbuds</li>
                    <li className="mx-2 cursor-pointer">Home and Lifestyle</li>
                    <li className="mx-2 cursor-pointer">Gaming</li>
                    <li className="mx-2 cursor-pointer">Kids</li>
                    <li className="ms-2 cursor-pointer">Health & Beauty</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar