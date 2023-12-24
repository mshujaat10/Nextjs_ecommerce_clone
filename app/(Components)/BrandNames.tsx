import Image from 'next/image'
import React from 'react'
import Title from './Title'
import appleImg from "@/public/apple.png"
import samsungImg from "@/public/samsung.png"
import oppoImg from "@/public/oppo.png"
import huaweiImg from "@/public/huawei.png"
import lenovoImg from "@/public/lenovo.png"
import infinixImg from "@/public/infinix.png"

const BrandNames = () => {
    return (
        <>
            <Title title={'Shop by favorite Brands'} children={undefined}></Title>
            <div className='flex'>
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex w-max'>
                        <div className='border-[1px] w-56 flex justify-center items-center py-4'>
                            <Image src={appleImg} width={50} height={50} alt='apple' />
                        </div>
                        <div className='border-[1px] w-56 flex justify-center items-center'>
                            <Image src={samsungImg} width={100} height={100} alt='samsungImg' />
                        </div>
                        <div className='border-[1px] w-56 flex justify-center items-center'>
                            <Image src={oppoImg} width={65} height={65} alt='oppoImg' />
                        </div>
                        <div className='border-[1px] w-56 flex justify-center items-center'>
                            <Image src={huaweiImg} width={55} height={55} alt='huaweiImg' />
                        </div>
                        <div className='border-[1px] w-56 flex justify-center items-center'>
                            <Image src={lenovoImg} width={90} height={90} alt='lenovoImg' />
                        </div>
                        <div className='border-[1px] w-56 flex justify-center items-center'>
                            <Image src={infinixImg} width={65} height={65} alt='infinixImg' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandNames