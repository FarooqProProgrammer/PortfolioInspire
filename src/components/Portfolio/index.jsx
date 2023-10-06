import React, { useState } from 'react'
import { PortfolioCard } from '../PortfolioCard';
import { PortfolioData } from '../../Data';

export default function Portfolio() {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };
    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-5" id='portfolio'>
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="block text-white mb-2 text-lg font-semibold text-primary">
                                Our Portfolio
                            </span>
                            <h2 className="mb-4 text-white text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Our Recent Projects
                            </h2>
                            <p className="text-base text-white text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("all")}
                                    className={`inline-block rounded-lg text-white py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                                        ? "activeClasses bg-primary text-gray-500"
                                        : "inactiveClasses"
                                        }`}
                                >
                                    All Projects
                                </button>
                            </li>
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("Website")}
                                    className={`inline-block  rounded-lg text-white py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "branding"
                                        ? "activeClasses bg-primary text-gray-500"
                                        : "inactiveClasses"
                                        }`}
                                >
                                    Website
                                </button>
                            </li>
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("Figma")}
                                    className={`inline-block rounded-lg py-2 text-white px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "design"
                                        ? "activeClasses bg-primary text-gray-600"
                                        : "inactiveClasses"
                                        }`}
                                >
                                    Figma
                                </button>
                            </li>
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("Mobile")}
                                    className={`inline-block rounded-lg py-2 px-5 text-white text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "marketing"
                                        ? "activeClasses bg-primary text-gray-500"
                                        : "inactiveClasses"
                                        }`}
                                >
                                    Mobile
                                </button>
                            </li>
                           
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {
                        PortfolioData?.map((item) => {
                            return (
                                <PortfolioCard
                                    ImageHref={item.ImageHref}
                                    category={item.category}
                                    title={item.title}
                                    button={item.button}
                                    buttonHref={item.buttonHref}
                                    showCard={showCard}
                                />
                            )
                        })
                    }


                </div>
            </div>
        </section>
    )
}
