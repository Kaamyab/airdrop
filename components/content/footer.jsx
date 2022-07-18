import React from 'react'

const Footer = () => {
    return (
        <div className='mt-24 mb-12 text-white flex justify-around'>
            {/* Left box */}
            <div className='inline-block max-w-[43rem] min-h-max p-8' style={{ background: 'rgba(21, 22, 29, 1)' }}>

                <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Stockholm-icons-_-Shopping-_-Bag_2" data-name="Stockholm-icons-/-Shopping-/-Bag#2" transform="translate(-0.113 -0.113)">
                        <rect id="bound" width="32" height="32" transform="translate(0.113 0.113)" fill="none">
                        </rect>
                        <path id="Combined-Shape" d="M6.563,4H22.8a1.34,1.34,0,0,1,1.338,1.262l1.1,18.684a2.68,2.68,0,0,1-2.518,2.833q-.079,0-.157,0H6.8a2.68,2.68,0,0,1-2.68-2.68q0-.079,0-.157l1.1-18.684A1.34,1.34,0,0,1,6.563,4Z" transform="translate(1.433 1.392)" fill="#b8bbfc" fill-rule="evenodd" opacity="0.3">
                        </path>
                        <path id="Oval-28" d="M7,7H9.68a4.021,4.021,0,0,0,8.041,0H20.4A6.7,6.7,0,0,1,7,7Z" transform="translate(2.412 2.412)" fill="#b8bbfc" fill-rule="evenodd"></path>
                    </g>
                </svg>
                <span className='text-left font-normal text-2xl text-white align-middle p-1 inline-block'>Buy Now</span>
                <p className='mt-4 text-left font-normal text-lg leading-10'>
                    Don't miss the pre-sale! Get 4000 SHQ for any bnb before Pancakeswap Listing.
                </p>
                <div className='flex mt-8 pb-4'>
                    <input
                        placeholder='0.01'
                        style={{ minWidth: 'calc(100% - 6rem)' }}
                        className='bg-white rounded-l-lg w-auto h-16 font-normal text-lg p-5 text-zinc-900 outline-none' />
                    <button className='h-16 bg-[#10B582] rounded-r-lg border-none cursor-pointer font-normal text-lg text-white px-8'>Buy</button>
                </div>
                <span className='text-left font-normal text-md text-zinc-300'>0.01 BNB = 40SHQ</span>

            </div>

            {/* Right box */}
            <div className='inline-block max-w-[43rem] min-h-max p-8' style={{ background: 'rgba(21, 22, 29, 1)' }}>

                <svg className='inline-block' id="Stockholm-icons-_-Design-_-Component" data-name="Stockholm-icons-/-Design-/-Component" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <rect id="bound" width="30" height="30" fill="none"></rect>
                    <path id="Combined-Shape" d="M14.931,3.328,23.06,7.973A1.875,1.875,0,0,1,24,9.6v9.257a1.875,1.875,0,0,1-.945,1.628l-8.129,4.645a1.875,1.875,0,0,1-1.861,0L4.942,20.486A1.875,1.875,0,0,1,4,18.858V9.6a1.875,1.875,0,0,1,.945-1.628l8.129-4.645A1.875,1.875,0,0,1,14.931,3.328ZM14,17.355a3.125,3.125,0,1,0-3.125-3.125A3.125,3.125,0,0,0,14,17.355Z" transform="translate(0.999 0.77)" fill="#b8bbfc" fill-rule="evenodd"></path>
                </svg>
                <span className='text-left font-normal text-2xl text-white align-middle p-1 inline-block'>GET YOUR REFERRAL LINK NOW!</span>
                <p className='mt-4 text-left font-normal text-lg leading-10'>
                    Get your Airdrop referral link and recieve 35% BNB + 55% SHQ on every transaction that your members do.
                </p>
                <div className='flex mt-8 pb-4'>
                    <input
                        placeholder='https://'
                        style={{ minWidth: 'calc(100% - 6rem)' }}
                        className='bg-white rounded-l-lg w-auto h-16 font-normal text-lg p-5 text-zinc-900 outline-none' />
                    <button className='h-16 bg-[#10B582] rounded-r-lg border-none cursor-pointer font-normal text-lg text-white px-8'>Buy</button>
                </div>

            </div>
        </div>
    )
}

export default Footer