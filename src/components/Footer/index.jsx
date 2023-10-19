import React, { useContext } from 'react'
import { Icon, IconButton, Image } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { ColorContext } from '../../Hooks/useTheme'

export default function Footer() {

    const {colorValue} = useContext(ColorContext)

    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Image
                    className='h-[40px]'
                    src={'../../images/Logo/logo.webp'}
                />

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500">
                        <IconButton>
                            <Icon as={AiOutlineFacebook} fontSize={25} color={colorValue} />
                        </IconButton>

                    </a>
                    <a className="ml-3 text-gray-500">
                        <IconButton>
                            <Icon as={AiFillTwitterSquare} fontSize={25} color={colorValue} />
                        </IconButton>
                    </a>
                    <a className="ml-3 text-gray-500">
                    <IconButton>
                        <Icon as={AiOutlineInstagram} fontSize={25} color={colorValue} />
                    </IconButton>
                        

                    </a>
                    <a className="ml-3 text-gray-500">
                    <IconButton>
                        <Icon as={AiFillLinkedin} fontSize={25} color={colorValue} />
                    </IconButton>
                        
                    </a>
                </span>
            </div>
        </footer>


    )
}
