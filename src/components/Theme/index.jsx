import { useTheme } from '@emotion/react';
import React, { useContext, useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { BiSolidDroplet } from "react-icons/bi"
import { ColorContext } from '../../Hooks/useTheme';

export default function Theme() {

    const [currentWidth,setCurrentWidth] = useState(false);
    const {ChangeColor} = useContext(ColorContext);



    return (
        <>
            <div onClick={()=>setCurrentWidth(!currentWidth)} className=' top-[50%] z-50 bg-white right-2 cursor-pointer rounded-md fixed px-2 py-2'>
                <AiFillSetting size={30} className='icon360' />
            </div>

            <div className={`px-5 py-2 grid grid-cols-3 gap-10 z-50 transition-all rounded-md fixed ${currentWidth ? 'right-[5%]' :'-right-[100%]' } top-[40%]  bg-white`}>

                <BiSolidDroplet onClick={()=>ChangeColor('yellow-500')} className='text-yellow-500 cursor-pointer' size={50} />
                <BiSolidDroplet onClick={()=>ChangeColor('sky-500')} className='text-sky-500 cursor-pointer' size={50} />
                <BiSolidDroplet onClick={()=>ChangeColor('red-500')} className='text-red-500 cursor-pointer' size={50} />
                <BiSolidDroplet onClick={()=>ChangeColor('purple-500')} className='text-purple-500 cursor-pointer' size={50} />
                <BiSolidDroplet onClick={()=>ChangeColor('cyan-700')} className='text-cyan-700 cursor-pointer' cursor-pointer size={50} />
                <BiSolidDroplet onClick={()=>ChangeColor('orange-500')} className='text-orange-500 cursor-pointer' size={50} />

            </div>


        </>

    )
}
