import assets from "../assets"

const Features = () => {
    return (
        <div className='mt-[2.5em] md:my-[4.5em] lg:my-[6.5em] w-full md:max-w-[75em] md:mx-auto h-full'>
            <h1 className='text-black/80 text-2xl md:text-3xl lg:text-[2.5em] font-semibold text-center px-[1.5em]'>Trusted by <span className='text-primary mx-1'>200 Million+ </span>  active users across <br></br>54 countries</h1>
            
            <div className="flex flex-col px-[1.5em] w-full md:flex-row  md:items-center md:justify-between md:h-[36.15904rem]">
                <div className='flex justify-start md:justify-center mt-[3.25em] md:mt-0 h-full w-full 
              '>
                    <img
                        src={assets.wallet}
                        className="w-2/3 h-full object-contain"
                        />
            </div>
            <div className="mt-[0.75em] md:mt-0 flex flex-col">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black/90 ">Travel every country in Africa without hopping on a plane</h1>
                <h3 className="mt-[0.75em] md:mt-0 text-xl text-black/80">We are building a digital community that will empower you to take control of your money and make it work for you.</h3>
                    <div className="mt-[1.12em] md:text-xl flex items-center">
                    <h2 className="text-[#068353] text-[1em] md:text-xl font-medium">Learn More</h2>
                    <span className="ml-[0.75em]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M3.33331 8.48865H12.6666" stroke="#068353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3.82196L12.6667 8.48863L8 13.1553" stroke="#068353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
                </div>
                </div>

            <div className="flex flex-col px-[1.5em] w-full md:flex-row-reverse  md:items-center md:justify-between md:h-[39.7rem] mt-[2.09em]">
                        <div className='flex justify-end  md:justify-center mt-[3.25em] md:mt-0 h-full w-full'>
                    <img
                        src={assets.savings}
                        className="w-2/3 h-full object-contain"
                    />
                        </div>
                        <div className="mt-[0.75em] md:mt-0 flex flex-col">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black/90">Travel every country in Africa without hopping on a plane</h1>
                            <h3 className="mt-[0.75em] md:mt-0 text-xl text-black/80">We are building a digital community that will empower you to take control of your money and make it work for you.</h3>
                            <div className="mt-[1.12em] md:text-xl flex items-center">
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
            


        </div>
    )
}

export default Features
