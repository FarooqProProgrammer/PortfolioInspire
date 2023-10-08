import React from 'react'
import "./index.css"

import CounterAnimation from '../../Common/CounterAnimation'
export default function Skills() {

    return (
        <section className="text-gray-600 body-font bg-white py-10">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">

                        <CounterAnimation
                            endValue={100}
                            duration={2000}

                        />
                        <p className="leading-relaxed">Projects</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <CounterAnimation
                            endValue={50}
                            duration={2000}
                        />
                        <p className="leading-relaxed">Client</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <CounterAnimation
                            endValue={10}
                            duration={2000}
                        />
                        <p className="leading-relaxed">Partners</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <CounterAnimation
                            endValue={40}
                            duration={2000}
                        />
                        <p className="leading-relaxed">Countries</p>
                    </div>
                </div>
            </div>
        </section>


    )
}
