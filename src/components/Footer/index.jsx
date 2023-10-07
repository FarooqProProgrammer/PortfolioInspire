import React from 'react'
import Logo from "../../assets/logo.png"
import { Icon, IconButton, Image } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Image
                    className='h-[40px]'
                    src={Logo}
                />

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link className="text-gray-500">
                        <IconButton>
                            <Icon as={AiOutlineFacebook} fontSize={25} color={'#000'} />
                        </IconButton>

                    </Link>
                    <Link className="ml-3 text-gray-500">
                        <IconButton>
                            <Icon as={AiFillTwitterSquare} fontSize={25} color={'#000'} />
                        </IconButton>
                    </Link>
                    <Link className="ml-3 text-gray-500">
                    <IconButton>
                        <Icon as={AiOutlineInstagram} fontSize={25} color={'#000'} />
                    </IconButton>
                        

                    </Link>
                    <Link className="ml-3 text-gray-500">
                    <IconButton>
                        <Icon as={AiFillLinkedin} fontSize={25} color={'#000'} />
                    </IconButton>
                        
                    </Link>
                </span>
            </div>
        </footer>


    )
}
