import React from 'react';
import { SectionReutilisable } from './index';
import { mainCardProduct } from '../types/product.types';

const ReadyToUseSection: React.FC = () => {
    const readyToUseKeyboardsItems: mainCardProduct[] = [
        {
            id: 1,
            title: '[GB] Ready to Use Snake60 R2 Dark Green Hotswap PCB with PBTfans Untamed',
            price: 426.0,
            images: {
                default: '/readytouse/2.webp',
                hover: '/readytouse/1.webp',
            },
            link: '/',
            alt: 'image [GB] Ready to Use Snake60 R2 Dark Green Hotswap PCB with PBTfans Untamed',
        },
        {
            id: 2,
            title: 'Ready to Use KBD8X MKIII Keyboard With PBTfans Mischief',
            price: 184.0,
            images: {
                default: '/readytouse/4.webp',
                hover: '/readytouse/3.webp',
            },
            link: '/',
            alt: 'Image Ready to Use KBD8X MKIII Keyboard With PBTfans Mischief',
        },
        {
            id: 3,
            title: 'Ready to use Odin 75 Hot-swap Keyboard with PBTfans Blush',
            price: 394.0,
            images: {
                default: '/readytouse/6.webp',
                hover: '/readytouse/5.webp',
            },
            link: '/',
            alt: 'Ready to use Odin 75 Hot-swap Keyboard with PBTfans Blush',
        },
        {
            id: 4,
            title: 'MelGeek Made68 Pro DIY Magnetic Switch Keyboard with TTC KOM Switches',
            price: 149.0,
            images: {
                default: '/readytouse/8.webp',
                hover: '/readytouse/7.webp',
            },
            link: '/',
            alt: 'MelGeek Made68 Pro DIY Magnetic Switch Keyboard with TTC KOM Switches',
        },
        {
            id: 5,
            title: 'Ready to use Tofu60 Redux with PBTfans Count Dracula',
            price: 213.0,
            images: {
                default: '/readytouse/10.webp',
                hover: '/readytouse/9.webp',
            },
            link: '/',
            alt: 'Ready to use Tofu60 Redux with PBTfans Count Dracula',
        },
    ];

    return (
        <section>
            <SectionReutilisable
                sectionTitle="Ready to use"
                hrefShopNow="/"
                arr={readyToUseKeyboardsItems}
                hrefTitle="More"
            />
        </section>
    );
};
export default ReadyToUseSection;
