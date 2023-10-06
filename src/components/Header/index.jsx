import React, { useState } from 'react'
import ListItem from '../ListItem';
import Logo from "../../assets/logo.png"

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header
            className={`fixed top-0 left-0 z-20 flex items-center shadow-lg w-full bg-white px-5`}
        >
            <div className="container">
                <div className="relative flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60">
                        <a href="/#" className="block w-full py-5">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-full"
                            />
                        </a>
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                        <div>
                            <button
                                // @click="navbarOpen = !navbarOpen"
                                onClick={() => setOpen(!open)}
                                // :className="navbarOpen && 'navbarTogglerActive' "
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="#home"
                                    >
                                        Home
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="#about"
                                    >
                                        About
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="#services"
                                    >
                                        Services
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="#portfolio"
                                    >
                                        Portfolio
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="#contact"
                                    >
                                        Contact
                                    </ListItem>
                                </ul>
                            </nav>
                        </div>
                      
                    </div>
                </div>
            </div>
        </header>
    )
}
