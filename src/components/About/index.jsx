import React, { useContext } from 'react'
import { ColorContext } from '../../Hooks/useTheme'
import LazyLoad from '../../Common/LazyLoad';
import { Animated } from "react-animated-css";


export default function About() {
    const { colorValue } = useContext(ColorContext);


    
    return (
        <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>

            <section className=" body-font w-full h-auto " id='about'>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <LazyLoad
                            className="object-cover object-center rounded"
                            alt="hero"
                            effect={'blur'}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p style={{ color: colorValue }} className={` font-bold`}>Who am I ?</p>
                        <h1 className="lg:text-4xl md:text-4xl sm:text-3xl mb-4 font-medium text-white">
                            Hi, I am Muhammad Farooq

                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-100">
                            I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & IOS), and Flutter Mobile Applications.
                        </p>
                        <div className='w-full py-3 grid grid-cols-2  gap-3'>
                            <h3 className='text-white text-xl'>Full Name</h3>
                            <h3 className='text-gray-300 text-xl'>: Muhammad Farooq</h3>

                            <h3 className='text-white text-xl'>Age</h3>
                            <h3 className='text-gray-300 text-xl'>: 22 Year</h3>

                            <h3 className='text-white text-xl'>Nationality</h3>
                            <h3 className='text-gray-300 text-xl'>: United Kingdom</h3>


                            <h3 className='text-white text-xl'>Languages</h3>
                            <h3 className='text-gray-300 text-xl'>: English , Urdu</h3>

                            <h3 className='text-white text-xl'>Address</h3>
                            <h3 className='text-gray-300 text-xl'>: Karachi, Pakistan</h3>

                            <h3 className='text-white text-xl'>Freelance</h3>
                            <h3 className='text-gray-300 text-xl'>: Available</h3>

                        </div>
                        <div className="flex justify-center">
                            <a onClick={(e) => {window.open("https://drive.google.com/file/d/1FN4gm6CIxfyER48OPL63SrI60nsJBHFj/view?usp=drive_link", "_blank");}}  target='_blank'  style={{ backgroundColor: colorValue }} className={`inline-flex  text-white cursor-pointer  border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg`} rel="noreferrer">
                                Download Cv
                            </a>

                        </div>
                    </div>
                </div>
            </section>

    
        </Animated>
    )
}
