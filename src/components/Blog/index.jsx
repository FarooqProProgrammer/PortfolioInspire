import React, { useContext } from 'react'
import { BlogCard } from '../BlogCard'
import { ColorContext } from '../../Hooks/useTheme';

export default function Blog() {
    const { colorValue } = useContext(ColorContext);

    return (
        <>
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span style={{color:colorValue}} className="block mb-2 text-lg font-semibold ">
                                    Our Blogs
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                                    Our Recent News
                                </h2>
                                <p className="text-base text-white">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4 px-5">
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Y23YC07/image-02.jpg"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
