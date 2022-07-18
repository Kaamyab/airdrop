import React from 'react'
import Image from 'next/future/image'
import theImage from '../../images/image.png'

const Middle = () => {
    return (
        <div className='mt-32 flex justify-between'>

            {/* Left Content */}
            <div className='mt-24'>
                <span className='text-left font-bold text-lg align-middles text-white'>
                    <svg className='inline-block mr-3 align-text-top' id="Iconly_Bold_Discount" data-name="Iconly/Bold/Discount" xmlns="http://www.w3.org/2000/svg" width="21.808" height="21.808" viewBox="0 0 21.808 21.808">
                        <g id="Discount" transform="translate(1.817 1.818)">
                            <path id="Discount-2" data-name="Discount" d="M9.093,18.169a2.747,2.747,0,0,1-1.937-.789l-.663-.665a1.353,1.353,0,0,0-.963-.4H4.593A2.739,2.739,0,0,1,1.857,13.58v-.935a1.4,1.4,0,0,0-.4-.973L.8,11.027a2.745,2.745,0,0,1-.009-3.87l.663-.665a1.365,1.365,0,0,0,.4-.972V4.593A2.738,2.738,0,0,1,4.593,1.859h.936a1.373,1.373,0,0,0,.963-.4L7.147.8A2.742,2.742,0,0,1,11.019.8l.664.662a1.354,1.354,0,0,0,.963.4h.936a2.738,2.738,0,0,1,2.736,2.734v.937a1.35,1.35,0,0,0,.4.962l.654.654a2.754,2.754,0,0,1,.018,3.862l-.018.018-.009.009-.645.645a1.352,1.352,0,0,0-.4.964v.935a2.739,2.739,0,0,1-2.736,2.736h-.936a1.353,1.353,0,0,0-.963.4l-.655.654A2.713,2.713,0,0,1,9.093,18.169Zm2.336-7.542a.795.795,0,1,0,.791.791A.8.8,0,0,0,11.429,10.627Zm0-4.674a.787.787,0,0,0-.559.231l-4.672,4.67a.8.8,0,0,0,0,1.126.753.753,0,0,0,.554.236.761.761,0,0,0,.563-.236l4.673-4.67a.795.795,0,0,0-.559-1.358Zm-4.668,0a.795.795,0,1,0,.791.79A.8.8,0,0,0,6.756,5.957Z" transform="translate(0 0)" fill="#99e39e"></path>
                        </g>
                    </svg>
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
            <div className='relative max-w-[26rem]'>
                <div>
                    <Image
                        className='w-[26rem]'
                        layout='raw' width={712} height={888} src={theImage} />
                    <div className='absolute bottom-52 left-0 right-0 w-5/6 m-auto py-6 px-8 flex justify-between
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
                <p className='text-center text-zinc-100 leading-10 font-normal text-base mt-5'>
                    You can only get Airdrop once, so get it now! Click the button below and try SHQ
                </p>
            </div>

        </div >
    )
}

export default Middle