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
        category:'Alex Johnson',
        title:'The Future of Artificial Intelligence',
        description:'Artificial Intelligence (AI) is rapidly advancing and changing the way we live and work. In this blog post, we explore the latest developments in AI, including machine learning, neural networks, and natural language processing. Discover how AI is transforming industries and what the future holds for this exciting technology.',
        img:'../../images/Blog/1.jpeg',
    },
    {
        id:generateRandomId(10),
        category:'Sarah Williams',
        title:'The Rise of 5G Technology',
        description:'5G technology is revolutionizing our connectivity. This blog post dives into the world of 5G, discussing its faster speeds, lower latency, and its impact on IoT, augmented reality, and more. Learn about the potential benefits and challenges of widespread 5G adoption.',
        img:'../../images/Blog/2.jpg',
    },
    {
        id:generateRandomId(10),
        category:'Michael Brown',
        title:'Blockchain: Beyond Cryptocurrency',
        description:'Blockchain technology has evolved beyond cryptocurrency. Explore the various use cases of blockchain, including supply chain management, healthcare, and voting systems. Learn how blockchain is enhancing security, transparency, and trust in various industries.',
        img:'../../images/Blog/3.jpg',
    },
    {
        id:generateRandomId(10),
        category:'Emily Davis',
        title:'The Power of Quantum Computing',
        description:'Quantum computing is on the horizon, promising unprecedented computational power. In this blog post, we delve into the principles of quantum computing, its potential applications in cryptography, optimization, and drug discovery, and the challenges it presents.',
        img:'../../images/Blog/4.jpg',
    },
    {
        id:generateRandomId(10),
        category:'David Miller',
        title:'Augmented Reality in Everyday Life',
        description:'Augmented Reality (AR) is no longer limited to gaming. Discover how AR is infiltrating our daily lives, from shopping and navigation to education and healthcare. This post explores the technology behind AR and its transformative potential.',
        img:'../../images/Blog/5.jpg',
    },
    {
        id:generateRandomId(10),
        category:'Lisa Chang',
        title:'The Internet of Things (IoT) Revolution',
        description:'IoT is connecting devices and changing the way we interact with our surroundings. This blog post explores the growth of IoT, its applications in smart homes, cities, and industries, and the challenges of managing massive networks of interconnected devices.',
        img:'../../images/Blog/6.png',
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
        id:"#personel",
        text:'Personal Information'
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


export const EducationData = [
    {
        id:generateRandomId(10),
        Name:'Degree 01',
        Duration:'01/01/23 to 01/12/23',
        Desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit dis eros, lobortis hendrerit torquent pellentesque pulvinar interdum porttitor."

    }
]

export const ServiceData = [
    {
        id:generateRandomId(10),
        Name:'Job 01',
        Desc:'Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean dui ullamcorper feugiat, pulvinar blandit pharetra integer malesuada.',
        Duration:'01/01/2023 to 10/6/2023'
    }
]