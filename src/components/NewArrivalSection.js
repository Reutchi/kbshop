'use client'
import SectionReutilisable from "@/utils/SectionReutilisable";

const NewArrivalSection = () => {

    const newArrivalItems = [
        {
            id: 1,
            title: '[GB] Snake60 R2',
            price: '350.00',
            images: {
                default: '/assetsnewarrival/v0.webp',
                hover: '/assetsnewarrival/v1.webp'
            },
            link: '/'
        },
        {
            id: 2,
            title: '[GB] Keycult No. 1/1800 Darling Edition',
            price: '495.00',
            images: {
                default: '/assetsnewarrival/v3.webp',
                hover: '/assetsnewarrival/v4.webp'
            },
            link: '/'
        },
        {
            id: 3,
            title: 'KBDFans x MM He Gaming Keyboard Kit',
            price: '80.00',
            images: {
                default: '/assetsnewarrival/v5.webp',
                hover: '/assetsnewarrival/v6.webp'
            },
            link: '/'
        },
        {
            id: 4,
            title: '[Pre-order] Command 65',
            price: '99.00',
            images: {
                default: '/assetsnewarrival/v7.webp',
                hover: '/assetsnewarrival/v8.webp'
            },
            link: '/'
        },
        {
            id: 5,
            title: '[Pre-order] GT-80 Case',
            price: '119.00',
            images: {
                default: '/assetsnewarrival/v9.webp',
                hover: '/assetsnewarrival/v10.webp'
            },
            link: '/'
        },
        // {
        //     id: 6,
        //     title: '[Pre-order] Command 65',
        //     price: '99.00',
        //     images: {
        //         default: '/assetsnewarrival/v7.webp',
        //         hover: '/assetsnewarrival/v8.webp'
        //     },
        //     link: '/'
        // },
        // {
        //     id: 7,
        //     title: '[Pre-order] GT-80 Case',
        //     price: '119.00',
        //     images: {
        //         default: '/assetsnewarrival/v9.webp',
        //         hover: '/assetsnewarrival/v10.webp'
        //     },
        //     link: '/'
        // }
    ];

    return (
        <section>
            <SectionReutilisable arr={newArrivalItems} hrefShopNow='/' sectionTitle='New arrival'/>
        </section>
    );
};

export default NewArrivalSection;