import Service1 from './images/equipment-service.jpg'
import Service2 from './images/open-service.jpg'
import Service3 from './images/personal-service.jpg'
import Service4 from './images/sauna-service.jpg'
import Service5 from './images/spa-service.jpg'
import Service6 from './images/spining-service.jpg'
import Service7 from './images/yoga-service.jpg'

import Feature1 from './images/product1.png'
import Feature2 from './images/product2.png'
import Feature3 from './images/product3.png'
import Feature4 from './images/product4.png'


import Review1 from './images/review1.jpg'
import Review2 from './images/review2.jpg'
import Review3 from './images/review3.jpg'


import Class1 from './images/boxing-class.jpg'
import Class2 from './images/crossfit-class.jpg'
import Class3 from './images/intense-class.jpg'
import Class4 from './images/yoga-class.jpg'
import Class5 from './images/image3.jpg'


import {BiTime} from 'react-icons/bi'


import Team1 from './images/team1.jpg'
import Team2 from './images/team2.jpg'
import Team3 from './images/team3.jpg'



import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

// for navLinks
export const links = [
    {
        name: "home",
        path: '/'
    },
    {
        name: "about",
        path: '/about'
    },
    {
        name: "training",
        path: '/training'
    },
    {
        name: "pricing",
        path: '/pricing'
    },
    {
        name: "contact",
        path: '/contact'
    }
]

// for services
export const services = [
    {
        id: 1,
        image: Service1,
        text: 'Top of the line equipment'
    },
    {
        id: 2,
        image: Service2,
        text: 'Open 24 hours'
    },
    {
        id: 3,
        image: Service3,
        text: 'Personal Training'
    },
    {
        id: 4,
        image: Service4,
        text: 'Steam and sauna rooms'
    },
    {
        id: 5,
        image: Service5,
        text: 'Spa'
    },
    {
        id: 6,
        image: Service6,
        text: 'Spinning studio'
    },
    {
        id: 7,
        image: Service7,
        text: 'Yoga'
    }
]

// for features
export const features = [
    {
        id: 1,
        image: Feature1,
        title: 'Gym Leggings',
        price: '$10',
        button: 'Buy Now' 
    },
    {
        id: 2,
        image: Feature2,
        title: 'Water Bottle',
        price: '$5',
        button: 'Buy Now' 
    },
    {
        id: 3,
        image: Feature3,
        title: 'Sneakers',
        price: '$15',
        button: 'Buy Now' 
    },
    {
        id: 4,
        image: Feature4,
        title: 'Box Gloves',
        price: '$3',
        button: 'Buy Now' 
    }
]

// for testimonials
export const testimonials = [
    {
        id: 1,
        image: Review1,
        title: 'John Doe',
        small: 'Athlete',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    },
    {
        id: 2,
        image: Review2,
        title: 'Dex John',
        small: 'Worker',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    },
    {
        id: 3,
        image: Review3,
        title: 'Jane Doe',
        small: 'Developer',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    }
]

// for classes
export const classes = [
    {
        id: 1,
        image: Class1,
        icon: <BiTime/>,
        time: '30mins',
        title: 'Boxing',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    },
    {
        id: 2,
        image: Class2,
        icon: <BiTime/>,
        time: '30mins',
        title: 'Crossfit',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    },
    {
        id: 3,
        image: Class3,
        icon: <BiTime/>,
        time: '30mins',
        title: 'Intense Training',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    },
    {
        id: 4,
        image: Class4,
        icon: <BiTime/>,
        time: '30mins',
        title: 'Yoga',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    },
    {
        id: 5,
        image: Class5,
        icon: <BiTime/>,
        time: '30mins',
        title: 'Personal Training',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab libero tempora deserunt! Aliquam.'
    }
]

// for trainers
export const trainers = [
    {
        id: 1,
        image: Team1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: [<FaFacebookF/>, <AiFillInstagram/>, <FaTiktok/>]
    },
    {
        id: 2,
        image: Team2,
        name: 'John Alan',
        job: 'Gym Trainer',
        socials: [<FaFacebookF/>, <AiFillInstagram/>, <FaTiktok/>]
    },
    {
        id: 3,
        image: Team3,
        name: 'Jane Doe',
        job: 'Yoga Instructor',
        socials: [<FaFacebookF/>, <AiFillInstagram/>, <FaTiktok/>]
    }
]

// for faqs
export const faqs =[
    {
        id: 1,
        question: "Is there a maintenance fee?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum quidem quisquam maiores eos laudantium atque asperiores ad aspernatur unde.'
    },
    {
        id: 2,
        question: "What's the cancellation policy?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum quidem quisquam maiores eos laudantium atque asperiores ad aspernatur unde.'
    },
    {
        id: 3,
        question: "Am I healthy enough for exercise?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum quidem quisquam maiores eos laudantium atque asperiores ad aspernatur unde.'
    },
    {
        id: 4,
        question: "Is the gym secured?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum quidem quisquam maiores eos laudantium atque asperiores ad aspernatur unde.'
    },
    {
        id: 5,
        question: "Do I have to sign a contract?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum quidem quisquam maiores eos laudantium atque asperiores ad aspernatur unde.'
    },
    {
        id: 6,
        question: "How often should I exercise?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum quidem quisquam maiores eos laudantium atque asperiores ad aspernatur unde.'
    }
]