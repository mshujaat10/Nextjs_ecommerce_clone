import Image from "next/image"
import logoImg from "@/public/footer_logo_image.png"

const Footer = () => {
    return (
        <footer className="bg-[#1F2323] text-white">
            <div className="border-b-[1px] border-gray-600 flex flex-col lg:flex-row lg:py-14 lg:px-8 py-5 px-3">

                <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-9">
                        <Image src={logoImg} width={120} height={120} alt="Logo" />
                        <p className="font-bold text-sm mt-4">WiseMarket</p>
                    </div>

                    <ul className="mb-5">
                        <li className="text-[11px]"><i className="text-sm fa-solid fa-location-dot opacity-50 me-2"></i>40-L Johar Town Lahore</li>
                        <li className="text-[11px] my-4"><i className="text-sm fa-solid fa-phone-volume opacity-50 me-2"></i>+923 111 109 473</li>
                        <li className="text-[11px]"><i className="text-sm fa-solid fa-envelope opacity-50 me-2"></i>support@wisemarket.com.pk
                        </li>
                    </ul>

                    <div>
                        <p className="font-bold text-xs mb-1">Stay connected</p>
                        <i className="fa-brands fa-facebook-f border-white border-2 p-1 px-[6px] rounded-full me-3 text-[10px]"></i>
                        <i className="fa-brands fa-instagram border-white border-2 p-1 rounded-full me-3 text-[10px]"></i>
                        <i className="fa-brands fa-twitter border-white border-2 p-1 rounded-full me-3 text-[10px]"></i>
                        <i className="fa-brands fa-linkedin-in border-white border-2 p-1 rounded-full text-[10px]"></i>
                    </div>
                </div>

                <div className="flex justify-between lg:justify-center w-full flex-wrap lg:flex-nowrap">

                    <div className="lg:me-20 h-fit flex justify-center flex-col mt-11">
                        <h1 className="font-bold tracking-widest text-sm mb-7">
                            Quick Links
                        </h1>
                        <ul>
                            <li className="text-xs">About Us</li>
                            <li className="text-xs my-1">FAQ's</li>
                            <li className="text-xs mb-1">Contact Us</li>
                            <li className="text-xs">Blogs</li>
                        </ul>
                    </div>

                    <div className="lg:me-20 h-fit flex justify-center flex-col mt-11">
                        <h1 className="font-bold tracking-widest text-sm mb-7">
                            Services
                        </h1>
                        <ul>
                            <li className="text-xs">Return Policy</li>
                            <li className="text-xs my-1">Privacy Policy</li>
                            <li className="text-xs mb-1">Refund-&-Shipping</li>
                            <li className="text-xs">Warranty</li>
                        </ul>
                    </div>

                    <div className="lg:me-20 h-fit flex justify-center flex-col mt-11">
                        <h1 className="font-bold tracking-widest text-sm mb-7">
                            My Account
                        </h1>
                        <ul>
                            <li className="text-xs">Sign in</li>
                            <li className="text-xs my-1">View Cart</li>
                            <li className="text-xs mb-1">My Wishlist</li>
                            <li className="text-xs">Help</li>
                        </ul>
                    </div>

                    <div className="h-fit flex justify-center flex-col mt-11 w-full lg:w-fit">
                        <button className="text-sm mb-3 bg-green-600 rounded-[4px] py-2 px-5 w-max"><i className="fa-solid fa-briefcase me-2"></i>Become a Vendor</button>
                        <ul>
                            <li className="text-[11px]">Reach millions of customers</li>
                            <li className="text-[11px] my-1">nationwide through wisemarket.</li>
                            <li className="text-[11px] mb-1">A leading smart devices platform</li>
                            <li className="text-[11px]">in Pakistan</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="lg:flex justify-between py-5 lg:px-28 lg:ps-16 px-3">
                <div className="w-full text-sm opacity-80">
                    Copyright © 2023  WiseMarket. All Rights Reserved.
                </div>
                <div className="lg:text-center w-full text-sm opacity-80">
                    We are using safe payments:
                </div>
            </div>
        </footer>
    )
}

export default Footer