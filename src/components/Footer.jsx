import { motion } from 'framer-motion';


const company = [
  {name:'About us'},
  {name:'Blog'},
  {name:'Careers'},
  {name:'Community'},
]


const features = [
  {name:'Within Africa'},
  {name:'International'},
]

const help = [
  { name: 'Contact' },
  {name:'FAQs'}
  

]
const legal = [
  { name: 'Terms & conditions' },
  {name:'Privacy policy'},
  
  
]
export const Footer = () => {
  return (
    <div className='bg-primary w-full flex flex-col mt-[3.5em] pt-[3em] pb-[2.94em] px-[1.5em]'>
      <div className='flex items-center mb-[2em]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clipPath="url(#clip0_1_1410)">
    <path d="M16 2.66663C23.364 2.66663 29.3334 8.63596 29.3334 16C29.3334 23.364 23.364 29.3333 16 29.3333C8.63602 29.3333 2.66669 23.364 2.66669 16C2.66669 8.63596 8.63602 2.66663 16 2.66663ZM15.0574 11.2853L11.2854 15.0573C11.0354 15.3073 10.895 15.6464 10.895 16C10.895 16.3535 11.0354 16.6926 11.2854 16.9426L15.0574 20.7146C15.3074 20.9646 15.6465 21.105 16 21.105C16.3536 21.105 16.6926 20.9646 16.9427 20.7146L20.7147 16.9426C20.9646 16.6926 21.1051 16.3535 21.1051 16C21.1051 15.6464 20.9646 15.3073 20.7147 15.0573L16.9427 11.2853C16.6926 11.0353 16.3536 10.8949 16 10.8949C15.6465 10.8949 15.3074 11.0353 15.0574 11.2853Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1_1410">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
        </svg>
        <h1 className='text-[1.5em] text-white/90 font-normal ml-[o.25em] '>Africash</h1>
      </div>
      
      <div className=' mb-[0.38em]'>
        <h1 className='text-white text-[1em] mb-[1.12em] font-medium'>Company</h1>
        {company.map(item => (
          <p key={item.name} className='font-normal mb-[1.12em] text-sm  text-white'>{item.name}</p>
        ))}
      </div>
      <div className=' mb-[0.38em]'>
        <h1 className='text-white text-[1em] mb-[1.12em] font-medium'>Features</h1>
        {features.map(item => (
          <p key={item.name} className='font-normal mb-[1.12em] text-sm  text-white'>{item.name}</p>
        ))}
      </div>
      <div className=' mb-[0.38em]'>
        <h1 className='text-white text-[1em] mb-[1.12em] font-medium'>Help</h1>
        {help.map(item => (
          <p key={item.name} className='font-normal mb-[1.12em] text-sm  text-white'>{item.name}</p>
        ))}
      </div>
      <div className=' mb-[1.82em]'>
        <h1 className='text-white text-[1em] mb-[1.12em] font-medium'>Legal</h1>
        {legal.map(item => (
          <p key={item.name} className='font-normal mb-[1.12em] text-sm  text-white'>{item.name}</p>
        ))}
      </div>
      </div>
  )
}

