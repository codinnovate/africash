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
            className='w-full relative shadow-md 
              flex items-center px-[1.5em] pt-[1.6em] pb-[1.75em] 
             md:pt-[1.44em] md:pb-[1.25em] '>
            <div className="flex max-w-[75em]  justify-between  w-full md:mx-auto">

            <Logo />
            <button
                onClick={() => setshowNav(!showNav)}
                className="md:hidden flex">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25C21 5.66421 20.6642 6 20.25 6H3.75C3.33579 6 3 5.66421 3 5.25ZM3 9.75C3 9.33579 3.33579 9 3.75 9H20.25C20.6642 9 21 9.33579 21 9.75C21 10.1642 20.6642 10.5 20.25 10.5H3.75C3.33579 10.5 3 10.1642 3 9.75ZM3 14.25C3 13.8358 3.33579 13.5 3.75 13.5H20.25C20.6642 13.5 21 13.8358 21 14.25C21 14.6642 20.6642 15 20.25 15H3.75C3.33579 15 3 14.6642 3 14.25ZM3 18.75C3 18.3358 3.33579 18 3.75 18H20.25C20.6642 18 21 18.3358 21 18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75Z" fill="#1A1A1A"/>
                </svg>
            </button>
        <nav className="hidden md:flex items-center gap-[1.5em] ">
        <h2 className=" text-sm text-black/90 font-[400]">About</h2>
        <h2 className=" text-sm text-black/90 font-[400]">Features</h2>
        <h2 className=" text-sm text-black/90 font-[400]">Blog</h2>
                
        <button className="  py-[0.625em] px-[1.25em]  rounded-full border-[#068353] border-[1px] gap-[0.75em]">     
            <h2 className="text-primary text-sm    font-[500]">Login</h2>
        </button>
        <button className="  py-[0.625em] px-[1.25em]  rounded-full bg-primary  gap-[0.75em]">     
            <h2 className="text-white text-sm    font-[500]">Sign up</h2>
        </button>
        </nav>
            {showNav && (
            <div className="md:hidden flex flex-col absolute top-[90%] left-0 right-0 bg-primary w-full p-5 z-50  mt-[1em] rounded-2xl gap-[.5em] transition delay-100 duration-700 ease-in-out">
        <h2 className=" text-sm text-white  transition duration-0 hover:ml-3 hover:duration-700  font-[400]">About</h2>
        <h2 className=" text-sm text-white transition duration-0 hover:ml-3 hover:duration-700 font-[400]">Features</h2>
        <h2 className=" text-sm text-white transition duration-0 hover:ml-3 hover:duration-700 font-[400]">Blog</h2>
        <h2 className=" text-sm text-white transition duration-0 hover:ml-3 hover:duration-700 font-[400]">Contact</h2>
            </div>

            )}
                        </div>
        </motion.header>
    )
}

export default Header