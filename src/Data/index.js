import { AiOutlineBarChart, AiOutlineFormatPainter, AiOutlineHtml5, AiOutlineMobile } from "react-icons/ai";
import { BiSolidBusiness } from "react-icons/bi";

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