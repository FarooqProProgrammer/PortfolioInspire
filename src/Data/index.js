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

export const portfolioData = [
  {
    id: 1,
    category: "Web Development",
    title: "Project 1",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    category: "Design",
    title: "Project 2",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    category: "Design",
    title: "Project 2",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    category: "Design",
    title: "Project 2",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
 
];

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