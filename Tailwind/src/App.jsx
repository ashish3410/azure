import React, { useState } from 'react'
function App() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen((prev) => !prev)

    }
    return (
        <>

            <nav className={`bg-gray-100 flex justify-between items-center md:px-4 px-2 `} >
                <a className='flex items-center font-bold' href="#">
                    <img className='h-14 w-14' src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg" alt="Logo" />
                    <span>Logo</span>
                </a>
                <div className=' hidden md:flex items-center gap-8'>
                   {['Pricing','Home','Docs','About','Help'].map((item)=>(
                     <a key={item} className='font-semibold font-mono hover:text-red-700' href="#">{item}</a>
                   ))}
                </div>
                <div className='hidden bg-red-700 rounded-lg md:flex items-center px-4 hover:bg-red-800'>
                    <button className='font-bold font-sans p-2  text-white'>Get Started</button>
                    <svg className='w-4 h-4 filter invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
                <div className='md:hidden bg-gray-100'>
                    <button onClick={handleClick} className='md:hidden'>
                        {!isOpen ? <svg className='w-14 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32
            L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32
             448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>:<svg className='w-14 h-6'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>}
             </button>

                </div>
            </nav>

            <div className={`${!isOpen ? 'hidden' : 'block bg-gray-200'} md:hidden h-96 w-1/3 flex float-end justify-center`}>
                <div className='w-full'>
                    <div className='flex flex-col gap-4 pt-6 mb-6'>
                       {["Pricing",'Home','About','Docs','Help'].map((item)=>(
                         <a key={item} className='font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 font-mono hover:text-red-700' href="#">{item}</a>
                       ))}
                    </div>
                    <div className='h-[1px] bg-gray-500'></div>
                    <div className='rounded-lg flex items-center px-4 hover:bg-red-700 mb-6'>
                        <button className='font-bold font-sans p-2  text-white'>Get Started</button>
                        <svg className='w-4 h-4 filter invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </div>
            </div>

        </>

    )
}

export default App
