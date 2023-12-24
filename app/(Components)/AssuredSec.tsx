const AssuredSec = () => {
    return (
        <div className="pt-14">

            <div className="flex items-center pb-3 md:pb-9">
                <h1 className="font-medium text-sm md:text-xl pe-1">Wisemarket Assured</h1>
                <span className="text-green-600 text-xs">(Want to know more?)</span>
            </div>

            <div className="flex items-center justify-between flex-wrap xl:flex-nowrap">

                <div className="lg:me-2 mb-2 lg:mb-0 bg-blue-100 p-4 lg:p-8 rounded-md flex flex-col lg:flex-row items-center lg:items-start w-[49%] lg:w-[32%]">
                    <i className="fa-solid fa-shield text-green-600 me-2 text-xl mb-6"></i>
                    <div className="w-max flex flex-col items-center justify-center">
                        <p className="font-bold text-xs lg:text-base">12 Months Free Warranty</p>
                        <p className="text-[8px] sm:text-[10px] md:text-xs text-green-600 underline">Only for brand new mobile phones</p>
                    </div>
                </div>

                <div className="lg:me-2 mb-2 lg:mb-0 bg-blue-100 p-4 lg:p-8 rounded-md flex flex-col lg:flex-row items-center lg:items-start w-[49%] lg:w-[32%]">
                    <i className="fa-solid fa-award text-green-600 me-2 text-xl mb-6"></i>
                    <div className="w-max flex flex-col items-center justify-center">
                        <p className="font-bold text-xs lg:text-base">Best Price Guarantee</p>
                        <p className="text-[8px] sm:text-[10px] md:text-xs text-green-600 underline">Some of the lowest prices that you’ll find</p>
                    </div>
                </div>

                <div className="lg:me-2 mb-2 lg:mb-0 bg-blue-100 p-4 lg:p-8 rounded-md flex flex-col lg:flex-row items-center lg:items-start w-[49%] lg:w-[32%]">
                    <i className="fa-solid fa-calendar-days text-green-600 me-2 text-xl mb-6"></i>
                    <div className="w-max flex flex-col items-center justify-center">
                        <p className="font-bold text-xs lg:text-base">14 Day Check Warranty</p>
                        <p className="text-[8px] sm:text-[10px] md:text-xs text-green-600 underline">Piece of mind & money back guarantee</p>
                    </div>
                </div>

                <div className="lg:me-2 mb-2 lg:mb-0 bg-blue-100 p-4 lg:p-8 rounded-md flex flex-col lg:flex-row items-center lg:items-start w-[49%] lg:w-[32%]">
                    <i className="fa-solid fa-truck-fast text-green-600 me-2 text-xl mb-6"></i>
                    <div className="w-max flex flex-col items-center justify-center">
                        <p className="font-bold text-xs lg:text-base">Free Express Shipping</p>
                        <p className="text-[8px] sm:text-[10px] md:text-xs text-green-600 underline">Country Wide Free Express Shipping</p>
                    </div>
                </div>

            </div>

            <div className="flex justify-evenly pt-10 md:pt-16 pb-10">
                <div className='overflow-x-auto no-scrollbar lg:w-full'>
                    <div className='flex space-x-16 lg:space-x-0 w-max lg:justify-evenly lg:w-full'>
                        <div className="text-center ms-7 lg:ms-0">
                            <i className="fa-solid fa-shield text-green-600 me-2 text-2xl"></i>
                            <p className="text-sm font-bold">12 Months Free Warranty</p>
                            <p className="text-xs">Only for brand new mobile phones</p>
                        </div>

                        <div className="text-center">
                            <i className="fa-solid fa-award text-green-600 me-2 text-2xl"></i>
                            <p className="text-sm font-bold">Best Price Guarantee</p>
                            <p className="text-xs">Some of the lowest prices that you’ll find</p>
                        </div>

                        <div className="text-center">
                            <i className="fa-solid fa-calendar-days text-green-600 me-2 text-2xl"></i>
                            <p className="text-sm font-bold">14 Day Check Warranty</p>
                            <p className="text-xs">Piece of mind & money back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AssuredSec