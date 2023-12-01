import { useState } from "react"
import Logo from "./Logo"
import { motion } from "framer-motion";


const Header = () => {
    const [showNav, setshowNav] = useState(false);


    return (
        <motion.header
            initial={{
            x:0, y:-30, opacity:0.3
          }}
          transition={{
            delay:.5
          }}
          whileInView={{
            x:0, y:0 , opacity:1
          }}
            className='w-full relative shadow-md  md:mx-auto flex items-center justify-between px-[1.5em] pt-[1.6em] pb-[1.75em] '>
            <Logo />
            <button
                onClick={() => setshowNav(!showNav)}
                className="md:hidden flex">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25C21 5.66421 20.6642 6 20.25 6H3.75C3.33579 6 3 5.66421 3 5.25ZM3 9.75C3 9.33579 3.33579 9 3.75 9H20.25C20.6642 9 21 9.33579 21 9.75C21 10.1642 20.6642 10.5 20.25 10.5H3.75C3.33579 10.5 3 10.1642 3 9.75ZM3 14.25C3 13.8358 3.33579 13.5 3.75 13.5H20.25C20.6642 13.5 21 13.8358 21 14.25C21 14.6642 20.6642 15 20.25 15H3.75C3.33579 15 3 14.6642 3 14.25ZM3 18.75C3 18.3358 3.33579 18 3.75 18H20.25C20.6642 18 21 18.3358 21 18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75Z" fill="#1A1A1A"/>
                </svg>
            </button>
        <nav className="hidden md:flex items-center gap-[3em] ">
        <a className="text-[#3A3A3A] text-[1rem] font-[400]">Blog</a>
        <a className="text-[#3A3A3A] text-[1rem] font-[400]">Company</a>
        <a className="text-[#3A3A3A] text-[1rem] font-[400]">Products</a>
                
        <button className="flex items-center  py-[12px] px-[24px] h-[3em] bg-[#D8C6FF] rounded-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 1.5H8.25C7.00736 1.5 6 2.50736 6 3.75V20.25C6 21.4926 7.00736 22.5 8.25 22.5H15.75C16.9926 22.5 18 21.4926 18 20.25V3.75C18 2.50736 16.9926 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>      
            <h2 className="text-black text-[1.125rem]  ml-[0.25em] font-[500]">Download</h2>
        </button>
        </nav>
            {showNav && (
            <div className="md:hidden flex flex-col absolute top-[90%] left-0 right-0 bg-[#D8C6FF] w-full p-5 z-50  mt-[1em] rounded-2xl gap-[.5em] transition delay-100 duration-700 ease-in-out">
        <a className="text-[#3A3A3A] text-[1rem]  transition duration-0 hover:ml-3 hover:duration-700  font-[400]">Blog</a>
        <a className="text-[#3A3A3A] text-[1rem] transition duration-0 hover:ml-3 hover:duration-700 font-[400]">Company</a>
        <a className="text-[#3A3A3A] text-[1rem] transition duration-0 hover:ml-3 hover:duration-700 font-[400]">Products</a>
            </div>

            )}
            
        </motion.header>
    )
}

export default Header