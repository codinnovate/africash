import assets from "../assets"


const Download = () => {
    return (
        <div className="md:max-w-[75em] mx-auto w-full rounded-2xl md:mt-[7.13em] mt-[2.5em] pt-[2.44em] h-[22.125em] pattern-2 px-[1.5em]  flex flex-col ">
            <div className="flex items-center place-content-between w-full">
                <img src={assets.flash}  className="w-[2.9375em] h-[3.41788em]"/>
                <img src={assets.dollar}  className="w-[3.125em] h-[2.64894em]"/>

            </div>
            <div className="mt-[1.12em]">
                <h1 className="text-white font-semibold text-[2em] text-center">Do business <br></br>with the world</h1>
            </div>

            <div className="mt-[0.75em] flex items-center gap-[0.5em] justify-center">
                <img src={assets.appstore} className="w-[7.5em] h-[2.22225em]" />
                <img src={assets.googleplay} className="w-[7.5em] h-[2.22219em]" />
                
            </div>
            <div className="mt-[1.03em] flex items-center w-full justify-between h-full ">
                <img src={assets.bitcoin} className="w-[2.625em] h-[2.65575em]" />
                <img src={assets.halfphone} className="w-[9.25rem] h-[6.12363rem]" />
            </div>
            
        </div>
    )
}

export default Download
