import React from 'react'
import {SectionReutilisable} from "./index";
import {mainCardProduct} from "../types/product.types";

const KeyboardSwitchesSection: React.FC = () => {

    const keyboardSwitchesItems:mainCardProduct[] = [
        {
            id: 1,
            title: '[IC] Naevies EC Switches',
            price: 0.00,
            images: {
                default: '/keyboardswitchess/2.webp',
                hover: '/keyboardswitchess/1.webp'
            },
            link: '/',
            alt:'image [IC] Naevies EC Switches'
        },
        {
            id: 2,
            title: 'Magnetic Switches x 65 KBDFans',
            price: 29.25,
            images: {
                default: '/keyboardswitchess/4.webp',
                hover: '/keyboardswitchess/3.webp'
            },
            link: '/',
            alt:'Image Magnetic Switches x 65 KBDFans'
        },
        {
            id: 3,
            title: 'Skyline Magnetic Switches',
            price: 4.50,
            images: {
                default: '/keyboardswitchess/6.webp',
                hover: '/keyboardswitchess/5.webp'
            },
            link: '/',
            alt:'Skyline Magnetic Switches'
        },
        {
            id: 4,
            title: 'Siliworks×Napworks Nap Linear Switches',
            price: 2.50,
            images: {
                default: '/keyboardswitchess/8.webp',
                hover: '/keyboardswitchess/7.webp'
            },
            link: '/',
            alt:'Siliworks×Napworks Nap Linear Switches'
        },
        {
            id: 5,
            title: 'Siliworks Type R tactile Switches',
            price: 4.80,
            images: {
                default: '/keyboardswitchess/10.webp',
                hover: '/keyboardswitchess/9.webp'
            },
            link: '/',
            alt:'Siliworks Type R tactile Switches'
        },
        // {
        //     id: 6,
        //     title: 'BCKeys×HMX Gulf Linear Switches',
        //     price: 20.00,
        //     images: {
        //         default: '/keyboardswitchess/12.webp',
        //         hover: '/keyboardswitchess/11.webp'
        //     },
        //     link: '/',
        //     alt:'BCKeys×HMX Gulf Linear Switches'
        // },
    ]
    return (
        <section>
            <SectionReutilisable sectionTitle='Keyboard switches' hrefShopNow='/' arr={keyboardSwitchesItems}  hrefTitle='Shop Now'/>
        </section>
    )
}
export default KeyboardSwitchesSection

