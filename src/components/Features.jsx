import assets from "../assets"
const perks = [
    {content:"No monthly fees"},
    {content:"Shop internationaly, no fees added"},
    {content:"Instant Reversals"},
    {content:"Continental debit card"},
]
const Features = () => {
    return (
        <div className='mt-[2.5em] '>
            <h1 className='text-black/80 text-2xl font-semibold text-center px-[1.5em]'>Trusted by <span className='text-primary mx-1'>200 Million+ </span>  active users across 54 countries</h1>
            
            <div className="flex flex-col px-[1.5em]">
                <div className='flex justify-start mt-[3.25em]
              '>
                    <img
                        src={assets.wallet}
                        />
            </div>
            <div className="mt-[0.75em] flex flex-col">
                <h1 className="text-[1.25em] font-semibold text-black/90 ">Travel every country in Africa without hopping on a plane</h1>
                <h3 className="mt-[0.75em] text-xl text-black/80">We are building a digital community that will empower you to take control of your money and make it work for you.</h3>
                <div className="mt-[1.12em] flex items-center">
                    <h2 className="text-[#068353] text-[1em] font-medium">Learn More</h2>
                    <span className="ml-[0.75em]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M3.33331 8.48865H12.6666" stroke="#068353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3.82196L12.6667 8.48863L8 13.1553" stroke="#068353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
                </div>
                </div>

                    <div className="flex flex-col px-[1.5em]">
                        <div className='flex justify-end mt-[3.25em]'>
                        <img  src={assets.savings}  className=""/>
                        </div>
                        <div className="mt-[0.75em] flex flex-col">
                            <h1 className="text-[1.25em] font-semibold text-black/90 ">Travel every country in Africa without hopping on a plane</h1>
                            <h3 className="mt-[0.75em] text-xl text-black/80">We are building a digital community that will empower you to take control of your money and make it work for you.</h3>
                            <div className="mt-[1.12em] flex items-center">
                                <h2 className="text-[#068353] text-[1em] font-medium">Learn More</h2>
                                <span className="ml-[0.75em]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M3.33331 8.48865H12.6666" stroke="#068353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 3.82196L12.6667 8.48863L8 13.1553" stroke="#068353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </div>
                            </div>
            </div>
            

            <div className="flex flex-col md:flex-row-reverse mt-[4.28em]">
                <div className="w-full">
                    <img src={assets.smile} />
                </div>
                <div className="h-[25.3em] pattern flex flex-col justify-center px-[2.43em] ">
                    <h2 className="text-white text-[2em] font-semibold ">Perks of using us?</h2>
                    <div className="flex flex-col">
                    {
                        perks.map(item => (
                            <div
                                className="flex items-center"
                                key={item.content}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_1_1280)">
                                    <path d="M5.3324 8.3338L7.3324 10.3338L10.6657 6.3338" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.99907 14.6671C11.681 14.6671 14.6657 11.6824 14.6657 8.00047C14.6657 4.31857 11.681 1.3338 7.99907 1.3338C4.31717 1.3338 1.3324 4.31857 1.3324 8.00047C1.3324 11.6824 4.31717 14.6671 7.99907 14.6671Z" stroke="white" strokeWidth="2"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1280">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
                                <h2 className="ml-[0.75em] text-[1em] text-white font-normal">{item.content}</h2>
                                </div>
                        ))
                    }
                    </div>

                    <div className="flex items-center mt-[0.88em] justify-start">
                        <h2 className="font-medium text-white">Learn More</h2>
                        <svg className="ml-[0.75em]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33331 8H12.6666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Features
