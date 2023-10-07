import React, { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { Link } from 'react-router-dom';

import Image1 from "../../assets/images/portfolio/1.jpg";
import Image2 from "../../assets/images/portfolio/2.jpg";
import Image3 from "../../assets/images/portfolio/3.jpg";
import Image4 from "../../assets/images/portfolio/4.jpg";
import Image5 from "../../assets/images/portfolio/5.jpg";
import Image6 from "../../assets/images/portfolio/6.jpg";
import Image7 from "../../assets/images/portfolio/7.jpg";
import Image8 from "../../assets/images/portfolio/8.jpg";
import { AiOutlineCamera } from "react-icons/ai"

import CTABackground from "../../assets/images/bg/cta.png";

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8
];

/**
 * Portfolio section
 */
export default function Portfolio() {

    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }

    const projectList = [
        {

            image: Image1,
            title: 'Mockup Collection',
            subtext: 'Branding'
        },
        {
            image: Image2,
            title: 'Mockup Collection',
            subtext: 'Designing'
        }, {
            image: Image3,
            title: 'Abstract images',
            subtext: 'Abstract'
        }, {
            image: Image4,
            title: 'Yellow bg with Books',
            subtext: 'Books'
        }, {
            image: Image5,
            title: 'Company V-card',
            subtext: 'V-card'
        }, {
            image: Image6,
            title: 'Mockup box with paints',
            subtext: 'Photography'
        },
        {
            image: Image7,
            title: 'Coffee cup',
            subtext: 'Cups'
        },
        {
            image: Image8,
            title: 'Pen and article',
            subtext: 'Article'
        }
    ]
    return (
        <>
            {/* Project Start  */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 active" id="portfolio">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Portfolio</h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Our Works &amp; Projects</h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                        {projectList.map((item, index) => (
                            <div className="relative rounded-md shadow-sm overflow-hidden group" key={index}>
                                <img src={item.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="workimage" />
                                <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                                <div className="content">
                                    <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                        <Link to="#" onClick={() => handleCLick(index)} className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                                            <AiOutlineCamera />
                                        </Link>
                                    </div>
                                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                        <Link to="#" className="h6 text-md font-medium text-white hover:text-orange-600 transition duration-500">{item.title}</Link>
                                        <p className="text-slate-100 tag mb-0">{item.subtext}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setOpen({ isOpen: false })}
                            onMovePrevRequest={() =>
                                setActiveIndex((photoIndex + images.length - 1) % images.length,
                                )
                            }
                            onMoveNextRequest={() =>
                                setActiveIndex((photoIndex + 1) % images.length,
                                )
                            }
                        />
                    )}
                </div>
            </section>
            {/* Project End  */}
           
        </>
    );

}
