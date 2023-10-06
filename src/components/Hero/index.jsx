import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim';
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"

export default function Hero() {


    return (
        <div className='w-full h-screen' id='home'>
            <div className='w-full h-full flex flex-col justify-center items-center absolute gap-5'>
                <h2 className='Text_hero text-white text-center'>Hi, I am Muhammad Farooq</h2>
                <p className='text-gray-600 lg:max-w-[60%] md:max-w-[70%] sm:max-w-[80%] ParagraphyHero px-2  text-center'>
                    I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & IOS), and Flutter Mobile Applications. We are providing clean code.
                </p>
                <div className='flex justify-center items-center gap-5 mt-5'>
                    <div className={`p-3 border border-yellow-400 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors`}>
                        <FaFacebookF color='white' className='hover:text-yellow-500' />
                    </div>
                    <div className='p-3 border border-yellow-400 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors'>
                        <AiOutlineTwitter color='white' className='hover:text-yellow-500' />
                    </div>
                    <div className='p-3 border border-yellow-400 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors'>
                        <AiOutlineInstagram color='white' className='hover:text-yellow-500' />
                    </div>
                    <div className='p-3 border border-yellow-400 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors'>
                        <AiOutlineLinkedin color='white' className='hover:text-yellow-500' />
                    </div>
                    <div className='p-3 border border-yellow-400 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors'>
                        <AiOutlineGithub color='white' className='hover:text-yellow-500' />
                    </div>


                </div>
            </div>


        </div>

    )
}
