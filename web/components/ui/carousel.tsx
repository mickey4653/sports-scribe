"use client"

export default function Carousel( { children, onclickFunc } : { children ?: React.ReactNode, onclickFunc?: Function } ) {

    return (
        <>
            
            <section className="h-auto flex flex-nowrap justify-between  overflow-x-auto">
        
                {children}

                {/** left Arrows 
                <div className="absolute left-3 top-[50%] bottom-[50%] translate-y-[-50%] w-[70px] h-[70px] content-center text-center rounded-full text-5xl  hover:cursor-pointer bg-red-400 ">&#10094;</div>
                */}   

                {/** right Arrows */}
                <button className="absolute right-3 top-[50%] bottom-[50%] translate-y-[-50%] w-[70px] h-[70px] content-center text-center font-bold rounded-full text-5xl text-white  hover:cursor-pointer bg-[#000000a8] " onClick={() => onclickFunc}>&#10095;</button>

            </section>
            
        </>
    )

}