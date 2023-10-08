import React from 'react'
import Theme from '../../components/Theme'
import Footer from '../../components/Footer'
import Cta from '../../components/Cta'
import Contact from '../../components/Contact'
import Portfolio from '../../components/Portfolio'
import Service from '../../components/Service'
import About from '../../components/About'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Blog from '../../components/Blog'
import Education from '../../components/Education'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Education />
        
            <Service />
            <Portfolio />
            <Blog />
            <Contact />
            <Cta />
            <Footer />
            <Theme />

        </>
    )
}
