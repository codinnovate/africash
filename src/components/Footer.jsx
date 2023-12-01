import { motion } from 'framer-motion';



export const Footer = () => {
  return (
      <div className='mt-[148px] w-full relative'>
      <div className=' md:mx-[150px] flex gap-[28px] items-end justify-center'>
           
        <motion.div
        initial={{
            x:57, y:40
          }}
          transition={{
            delay:.2
          }}
          whileInView={{
            x:0, y:0
          }}
          className='hidden md:block'>
          <img
          src=''
          alt='iphone 13'
          className='w-[257px] h-full'
              />
        </motion.div>
        <motion.div
          initial={{
            x:23, y:40
          }}
          transition={{
            delay:.2
          }}
          whileInView={{
            x:0, y:0
          }}
          className=''>
          <img
          alt='iphone 13'
          className='w-[257px] h-full'
              />
        </motion.div>
        
      </div>
      
      <div className='absolute w-full top-[70%]  h-[155px] py-[154px] px-[88px] bg-[#E5DBFB] flex items-center'>
        {/* <h2>We&apos;re have been recognized by Leading <br></br> Finance Publications and Organizations.</h2> */}
        <div className='w-full flex items-center  justify-center   md:gap-[90px]'>
        </div>
      </div>
          
    </div>
  )
}

