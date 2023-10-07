import React, { useContext } from 'react'
import { ColorContext } from '../../Hooks/useTheme';
import { Icon } from '@chakra-ui/icon';

export default function ServiceCard({ icon, title, details }) {
    const { colorValue } = useContext(ColorContext);
   
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                    className={`mb-8 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl bg-primary`}
                >

                    <Icon as={icon} fontSize={50} color={colorValue} />
                </div>
                <h4   className="mb-3 text-xl font-semibold text-dark ">{title}</h4>
                <p   className="text-body-color  ">{details}</p>
            </div>
        </div>
    )
}
