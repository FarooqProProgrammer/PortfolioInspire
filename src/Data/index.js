import { AiOutlineBarChart, AiOutlineFormatPainter, AiOutlineGithub, AiOutlineHtml5, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMobile, AiOutlineTwitter } from "react-icons/ai";
import { BiSolidBusiness } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}

export const PortfolioData = [
    {
        id: generateRandomId(10),
        ImageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
        category: "Figma",
        title: "Figma Conversion",
        button: "View Details",
        buttonHref: "#",
    },
    {
        id: generateRandomId(10),
        ImageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
        category: "Website",
        title: "Website Development",
        button: "View Details",
        buttonHref: "#",
    },
    {
        id: generateRandomId(10),
        ImageHref:"https://i.ibb.co/vkt8C1P/image-02.jpg",
        category:"Mobile",
        title:"Mobile App Development",
        button:"View Details",
        buttonHref:"#",
    },
    {
        id: generateRandomId(10),
        ImageHref:"https://i.ibb.co/vkt8C1P/image-02.jpg",
        category:"Mobile",
        title:"Mobile App Development",
        button:"View Details",
        buttonHref:"#",
    },
    

]

export const Services = [
    {
        id:generateRandomId(10),
        icon:AiOutlineMobile ,
        title:'Mobile App Development',
        desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, molestie taciti ad tempor egestas cursus.',
    },
    {
        id:generateRandomId(10),
        icon:AiOutlineHtml5 ,
        title:'Website Development',
        desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, molestie taciti ad tempor egestas cursus.',
    },
    {
        id:generateRandomId(10),
        icon: AiOutlineFormatPainter ,
        title:'Figma to front end conversion',
        desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, molestie taciti ad tempor egestas cursus.',
    },
    {
        id:generateRandomId(10),
        icon: AiOutlineBarChart ,
        title:'SEO',
        desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, molestie taciti ad tempor egestas cursus.',
    },
    {
        id:generateRandomId(10),
        icon: BiSolidBusiness ,
        title:'Business Solution',
        desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, molestie taciti ad tempor egestas cursus.',
    },
]

export const HeroIcons = [
    {
        id:generateRandomId(10),
        Icon:FaFacebookF,
    },
    {
        id:generateRandomId(10),
        Icon:AiOutlineTwitter,
    },
    {
        id:generateRandomId(10),
        Icon:AiOutlineInstagram,
    },
    {
        id:generateRandomId(10),
        Icon:AiOutlineLinkedin,
    },
    {
        id:generateRandomId(10),
        Icon:AiOutlineGithub,
    },
]

export   const projectList = [
    {

        image: '../../images/portfolio/1.webp',
        title: 'Mockup Collection',
        subtext: 'Branding'
    },
    {
        image: '../../images/portfolio/2.webp',
        title: 'Mockup Collection',
        subtext: 'Designing'
    }, {
        image: '../../images/portfolio/3.webp',
        title: 'Abstract images',
        subtext: 'Abstract'
    }, {
        image: '../../images/portfolio/4.webp',
        title: 'Yellow bg with Books',
        subtext: 'Books'
    }, {
        image: '../../images/portfolio/5.webp',
        title: 'Company V-card',
        subtext: 'V-card'
    }, {
        image: '../../images/portfolio/6.webp',
        title: 'Mockup box with paints',
        subtext: 'Photography'
    },
    {
        image: '../../images/portfolio/7.webp',
        title: 'Coffee cup',
        subtext: 'Cups'
    },
    {
        image: '../../images/portfolio/8.webp',
        title: 'Pen and article',
        subtext: 'Article'
    }
]
export const BlogData = [
    {
        id:generateRandomId(10),
        category:'category',
        title:'The Catalyzer',
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        img:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:generateRandomId(10),
        category:'category',
        title:'The Catalyzer',
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        img:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:generateRandomId(10),
        category:'category',
        title:'The Catalyzer',
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        img:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:generateRandomId(10),
        category:'category',
        title:'The Catalyzer',
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        img:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:generateRandomId(10),
        category:'category',
        title:'The Catalyzer',
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        img:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:generateRandomId(10),
        category:'category',
        title:'The Catalyzer',
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        img:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    
]

export const NavData = [
    {
        id:'#home',
        text:'home',
    },
    {
        id:'#about',
        text:'About',
    },
    {
        id:'#blog',
        text:'Blog',
    },
    {
        id:'#services',
        text:'Services',
    },
    {
        id:'#portfolio',
        text:'Portfolio',
    },
    {
        id:'#contact',
        text:'Contact',
    },
]