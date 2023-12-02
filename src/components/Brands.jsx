import assets from '../assets';

const brands = [
    {name:"Quartz", src:assets.Quartz},
    {name:"bloomberg", src:assets.bloomberg},
    {name:"cnbc", src:assets.cnbc},
    {name:"forbes", src:assets.forbes},
    {name:"techcrunch", src:assets.tc},
]


const Brands = () => {
    return (
        <div className='bg-[#EDF0F5] flex items-center  w-full md:pt-[2.06em] md:pb-[2.11em] pt-[1.5em] pb-[1.48em] pl-[1.25em]  md:pl-[0]'>
            <div className='md:mx-auto md:max-w-[75em] justify-between  items-center w-full md:px-[2.5em]'>
            <div className="flex  gap-[2.5em] overflow-auto scrollbar  md:scrollbar-none w-full items-center  justify-between">
                {brands.map(item => (
                    <img
                        key={item.name}
                        alt={item.name}
                        src={item.src}
                        className='w-[100px]'
                    />
                ))}
                
             </div>
            </div>
        </div>
    )
}

export default Brands
