import React, { useContext } from 'react'
import { BsBriefcase } from "react-icons/bs"
import { ColorContext } from './../../Hooks/useTheme';
import { EducationData, ServiceData } from '../../Data';

export default function Education() {
    const { colorValue } = useContext(ColorContext);

    return (
        <div id='personel' className="px-4 bg-white py-16 h-auto  mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p style={{ color: colorValue }} className="inline-block px-3 py-px mb-4 text-md font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
                        Personel Information
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                    Muhammad Farooq
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit mus porttitor, facilisi erat eros.
                </p>
            </div>
            <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                <div>
                    {
                        EducationData?.map((item) => {
                            return (
                                <div key={item.id} className="max-w-md sm:mx-auto sm:text-center">
                                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">

                                        <svg style={{color:colorValue}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px] text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>

                                    </div>
                                    <h6 className="mb-3 text-xl font-bold leading-5">{item.Name}</h6>
                                    <p className="mb-3 text-sm text-gray-900">
                                        {item.Desc}
                                    </p>
                                    <p className='mb-3 text-sm text-gray-900'>
                                        {item.Duration}
                                    </p>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>
                <div>
                    {
                        ServiceData?.map((item) => {
                            return (
                                <div className="max-w-md sm:mx-auto sm:text-center">
                                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">

                                        <BsBriefcase
                                        color={colorValue}
                                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"

                                        />
                                    </div>
                                    <h6 className="mb-3 text-xl font-bold leading-5 capitalize">{item.Name}</h6>
                                    <p className="mb-3 text-sm text-gray-900">
                                        {item.Desc}
                                    </p>
                                    <p className='mb-3 text-sm text-gray-900'>
                                        {item.Duration}
                                    </p>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>

            </div>
        </div>
    )
}
