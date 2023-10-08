import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import "./index.css"
import { ColorContext } from '../../Hooks/useTheme'
export default function Skills() {
    const { colorValue } = useContext(ColorContext)

    return (
        <Box
            width={'full'}
            px={3}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >


            <h2 className="text-3xl font-semibold text-white mb-4">Skills</h2>
            {/* Skillbar 1 */}
            <div className="mb-4">
                <p className="text-white">Skill 1</p>
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-200 text-green-600">
                                Beginner
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-white">
                                25%
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 bg-green-200 rounded-full">
                            <div className="w-1/2 h-2 bg-green-500 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Skillbar 2 */}
            <div className="mb-4">
                <p className="text-white">Skill 2</p>
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-600">
                                Intermediate
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-white">
                                50%
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 bg-blue-200 rounded-full">
                            <div className="w-1/2 h-2 bg-blue-500 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Skillbar 3 */}
            <div>
                <p className="text-white">Skill 3</p>
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-yellow-200 text-yellow-600">
                                Advanced
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-white">
                                75%
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 bg-yellow-200 rounded-full">
                            <div className="w-3/4 h-2 bg-yellow-500 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </Box>

    )
}
