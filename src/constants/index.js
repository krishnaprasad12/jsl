import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: bigShoe1,
        name: "Cow Milk - Pure Freshness",
    },
    {
        imgURL: bigShoe3,
        name: "Cow Ghee - Golden Essence",
    },
];

export const services = [
    {
        imgURL: support,
        label: "Diverse Breed Goodness",
        subtext: "Enjoy the richness of cow milk sourced from various breeds, including HF, Gir, and Indian cows."
    },
    {
        imgURL: truckFast,
        label: "Pure Freshness",
        subtext: "Experience unparalleled freshness, straight from our pasture to your palate, ensuring the highest quality in every drop."
    },
    {
        imgURL: shieldTick,
        label: "Golden Nutrient Boost",
        subtext: "Our cow ghee, a golden essence, not only enhances flavor but also provides essential nutrients for a well-rounded and delicious lifestyle."
    },
    
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Get in touch",
        links: [
            { name: "puramarajesh@gamil.com", link: "mailto:puramarajesh@gamil.com" },
            { name: "7842802367", link: "tel:7842802367" },
        ],
    },
    {
        title: "Products",
        links: [
            { name: "Cow Milk", link: "/" },
            { name: "Cow Ghee", link: "/" },
        ],
    },
    {
        title: "",
        links: [
            { name: "", link: "/" },
            { name: "", link: "/" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];