import React from "react";
import ServiceCard from "../ServiceCard";

import { Services } from "../../Data";

const Service = () => {
    return (
        <section className="pt-20 px-5">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="block text-white mb-2 text-lg font-semibold text-primary">
                                Our Services
                            </span>
                            <h2 className="mb-4 text-white text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                What We Offer
                            </h2>
                            <p className="text-base text-white">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {
                        Services?.map((item) => {
                            return (
                                <ServiceCard
                                    title={item.title}
                                    details={item.desc}
                                    icon={item.icon}
                                />
                            )
                        })
                    }



                </div>
            </div>
        </section>
    );
};

export default Service;
