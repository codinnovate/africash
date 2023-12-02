
const Newsletter = () => {
    return (
        <div className='mt-[3.25em] px-[1.5em] flex flex-col w-full'>
            <h1 className='text-black/90 text-center font-semibold text-[1.5em]'>Keep up with us by signing up for our newsletter</h1>
            <div className='mt-[2em] w-full p-[0.25em] border-[1px] border-[#808080] rounded-full flex'>
                <input
                    type='text'
                    placeholder='Email address'
                    className='placeholder:text-sm ml-[0.87em] placeholder:font-normal placeholder:text-black/90  outline-none w-full'
                />
                <button className='py-[0.625rem] bg-primary rounded-full  px-[0.9375rem]'>
                    <h2 className='font-medium text-white text-sm '>Subscribe</h2>
                </button>


            </div>
            
        </div>
    )
}

export default Newsletter
