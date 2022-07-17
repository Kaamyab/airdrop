import React from 'react'
import Image from 'next/future/image'
import theImage from '../../images/image.png'

const Middle = () => {
    return (
        <div className='mt-32 flex justify-between'>

            {/* Left Content */}
            <div className='mt-24'>
                <span className='text-left font-bold text-lg align-top ml-2 text-white'>
                    Get 35% off today!
                </span>
                <p className='text-white text-4xl leading-[3.5rem] mt-6 font-bold'>
                    The World's first Auto-Boost,
                    <br />
                    <span className='text-myPurple inline-block'>Hyper DeflationaryCoin</span> is here!
                </p>
                <p className='max-w-2xl mt-8 leading-10 text-left font-normal text-white text-xl'>

                    A deflationary BSC based token powered by the community, featuring a yield generating protocol
                    and an autonomous Liquidity Pool to support a stable and rising price.
                </p>
                <button className='w-48 h-16 mt-14 text-white text-lg font-bold bg-[#34363A] border-none rounded-md cursor-pointer'>
                    Buy SHQ
                </button>

            </div>

            {/* Right Content */}
            <div className='relative'>
                <div>
                    <Image
                        className='w-[26rem]'
                        layout='raw' width={712} height={888} src={theImage} />
                    <div className='absolute bottom-28 left-0 right-0 w-5/6 m-auto py-6 px-8 flex justify-between
                    bg-white/10 backdrop-blur-xl rounded-xl'>
                        <div className='flex flex-col justify-center space-y-1 [&>span]:text-white [&>span]:text-xl [&>span]:font-normal'>
                            <span>
                                35K
                            </span>
                            <span>
                                100K
                            </span>
                        </div>
                        <div className='flex flex-col justify-center space-y-2 items-center [&>span]:text-white [&>span]:text-xl [&>span]:font-normal'>
                            <span>
                                Remaining time
                            </span>
                            <span>
                                38 : 42 : 05
                            </span>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='bg-[#212B36] bg-opacity-0 backdrop-blur-xl backdrop-brightness-[3] backdrop-saturate-[0.4] border-none w-full h-20 rounded-b-xl text-white text-xl cursor-pointer'>
                        <button className='w-full h-full border-none outline-none cursor-pointer'>
                            Get Airdrop Now!
                        </button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Middle