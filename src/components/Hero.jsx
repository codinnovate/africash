import { motion } from 'framer-motion';
import earth from '../assets/images/earth.png';



const Hero = () => {
    return (
        <div
            className='mt-[4em] flex flex-col md:max-w-[58rem] md:mx-auto justify-center w-full bg-white '>
            <div className='flex flex-col px-[1.56em]'>
                <motion.h1
                initial={{
                x: 0, y: 50, opacity: 0.4}}
                transition={{ delay: .5 }}
                animate={{x:0, y:0, opacity:1}}
                    className='text-black/80 text-center text-3xl  font-bold '>Africa in one financial platform
                </motion.h1>
                <motion.h2
                initial={{
                x: -38, y: 0, opacity: 0}}
                transition={{ delay: 1 }}
                animate={{x:0, y:0, opacity:1}}
                    className='mt-[0.75em] text-black/80 text-center  font-medium '>
                Digital ecosystem designed to make Africa one.  It’s goal is to  bring the dream of financial inclusion to all people across the continent.                </motion.h2>
            </div>
            <div className='w-full flex items-center justify-center mt-[1.5em] '>
                <motion.div
                initial={{
                x: 38, y: 0, opacity: 0}}
                transition={{ delay: 1 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    className='w-full flex justify-center'>
           
                    <button className='bg-[#068353] w-[13.6875rem]  rounded-full py-[0.94em] px-[1.25em] flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.90156 10.3281C7.91326 10.3431 7.92819 10.3551 7.94525 10.3635C7.96231 10.3718 7.98103 10.3761 8 10.3761C8.01897 10.3761 8.03769 10.3718 8.05475 10.3635C8.0718 10.3551 8.08674 10.3431 8.09844 10.3281L9.84844 8.11406C9.9125 8.03281 9.85469 7.9125 9.75 7.9125H8.59219V2.625C8.59219 2.55625 8.53594 2.5 8.46719 2.5H7.52969C7.46094 2.5 7.40469 2.55625 7.40469 2.625V7.91094H6.25C6.14531 7.91094 6.0875 8.03125 6.15156 8.1125L7.90156 10.3281ZM13.7188 9.78125H12.7812C12.7125 9.78125 12.6562 9.8375 12.6562 9.90625V12.3125H3.34375V9.90625C3.34375 9.8375 3.2875 9.78125 3.21875 9.78125H2.28125C2.2125 9.78125 2.15625 9.8375 2.15625 9.90625V13C2.15625 13.2766 2.37969 13.5 2.65625 13.5H13.3438C13.6203 13.5 13.8438 13.2766 13.8438 13V9.90625C13.8438 9.8375 13.7875 9.78125 13.7188 9.78125Z" fill="white"/>
                        </svg>
                        <h2 className='text-white text-center ml-[0.5em] font-medium'>Get started- It’s free</h2>
                    </button>

                        </motion.div>
            </div>

            <div className='mt-[2em]'>
                <img
                    src={earth}
                    className='w-full h-full object-contain'
                />

            </div>
        </div>
    )
}

export default Hero
