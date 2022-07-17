import React from 'react'

const navbar = () => {
    return (
        <div className='pt-12 bg-transparent flex justify-between'>

            {/* Brand */}
            <div className=''>
                <svg className='inline-block align-middle' id="Stockholm-icons-_-Shopping-_-Box_3" data-name="Stockholm-icons-/-Shopping-/-Box#3" xmlns="http://www.w3.org/2000/svg" width="31.223" height="31.223" viewBox="0 0 31.223 31.223">
                    <rect id="bound" width="31.223" height="31.223" fill="none" />
                    <path id="Combined-Shape" d="M25.645,7.832a1.3,1.3,0,0,1,.773,1.189v11.4a1.3,1.3,0,0,1-.669,1.137L15.34,27.339a1.3,1.3,0,0,1-1.264,0L3.669,21.557A1.3,1.3,0,0,1,3,20.42V9.021a1.3,1.3,0,0,1,.773-1.189L14.18,3.206a1.3,1.3,0,0,1,1.057,0Z" transform="translate(0.903 0.931)" fill="#fff" fillRule="evenodd" opacity="0.3" />
                    <path id="Combined-Shape-Copy" d="M17.184,4.224,7.6,9.549v5.969l2.6,1.3V11.08l9.959-5.533Z" transform="translate(2.287 1.271)" fill="#fff" fillRule="evenodd" />
                </svg>
                <h1 className='text-white text-xl inline-block align-middle cursor-pointer select-none'><span className='text-myPurple font-bold'>Hyper</span>Deflationary.</h1>
            </div>

            {/* UL */}
            <div>
                <ul className='text-white text-lg font-normal flex space-x-24 flex-wrap [&>li]:transition-all [&>li]:duration-300 [&>li]:cursor-pointer hover:[&>li]:text-myPurple'>
                    <li>Main</li>
                    <li>Features</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>ENG</li>
                </ul>
            </div>

        </div>
    )
}

export default navbar