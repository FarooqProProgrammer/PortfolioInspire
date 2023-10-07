import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BlogData } from '../../Data'
import { ColorContext } from '../../Hooks/useTheme';
import { Animated } from 'react-animated-css';

export default function Blog() {
    const { colorValue } = useContext(ColorContext);

    return (
        <>

            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                gap={2}
                mt={9}
            >
                <Text color={colorValue} fontSize={25}>Blog</Text>
                <Heading color={'white'}>Our Blog</Heading>
                <Text color={'white'} maxWidth={{ lg: '40%', md: '40%', sm: '95%' }} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur, adipiscing elit sem. Lorem ipsum dolor sit amet consectetur, adipiscing elit sem.</Text>

            </Flex>
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <section className=" body-font my-[60px]" id='blog'>
                <div className="container px-5  mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            BlogData?.map((item) => {
                                return (
                                    <div className="p-4 md:w-1/3 cursor-pointer">
                                        <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img
                                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                                src={item.img}
                                                alt="blog"
                                            />
                                            <div className="p-6">
                                                <h2 style={{ color: colorValue }} className="tracking-widest text-md title-font font-medium  mb-1">
                                                    {item.category}
                                                </h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {item.title}
                                                </h1>
                                                <p className="leading-relaxed mb-3">
                                                    {item.description}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
            </Animated>
            
        </>


    )
}
