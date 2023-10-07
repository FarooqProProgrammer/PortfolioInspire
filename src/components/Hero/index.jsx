import React, {  useContext } from 'react'

import { ColorContext } from '../../Hooks/useTheme';
import { HeroIcons } from '../../Data';
import { Animated } from 'react-animated-css';

export default function Hero() {
    const { colorValue } = useContext(ColorContext);



    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className='w-full h-screen' id='home'>
                <div className='w-full h-full flex flex-col justify-center items-center absolute gap-5'>
                    <h2 className='Text_hero text-white text-center'>Hi, I am Muhammad Farooq</h2>
                    <p className='text-gray-600 lg:max-w-[60%] md:max-w-[70%] sm:max-w-[80%] ParagraphyHero px-2  text-center'>
                        I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & IOS), and Flutter Mobile Applications. We are providing clean code.
                    </p>
                    <div className='flex justify-center items-center gap-5 mt-5'>
                        {
                            HeroIcons?.map(({ id, Icon }) => {
                                return (
                                    <div style={{ borderColor: colorValue === '#000' ? '#EAB308' : colorValue }} className={`p-3 border  rounded-full cursor-pointer hover:text-[${colorValue}] transition-colors`}>

                                        <Icon as={Icon} color={colorValue === '#000' ? '#EAB308' : colorValue}

                                            _hover={{
                                                backgroundColor: colorValue,
                                                color: 'white'
                                            }}
                                        />
                                    </div>
                                )
                            })
                        }





                    </div>
                </div>


            </div>
        </Animated>


    )
}
