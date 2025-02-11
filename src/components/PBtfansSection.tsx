'use client'
import React from 'react'
import {SectionReutilisable} from "../components/index";
import {mainCardProduct} from "../types/product.types";

const PBtfansSection: React.FC = () => {

    const PBTfansCardItems: mainCardProduct[] = [
        {
            id: 1,
            title: 'PBTfans Corporate Beige',
            price: 6.00,
            images: {
                default: '/pbtfans/fv1.webp',
                hover: '/pbtfans/fv0.webp'
            },
            link: '/',
            alt:'image PBTfans Corporate Beige'
        },
        {
            id: 2,
            title: 'PBTfans Office Love',
            price: 6.00,
            images: {
                default: '/pbtfans/fv3.webp',
                hover: '/pbtfans/fv2.webp'
            },
            link: '/',
            alt:'image PBTfans Office Love'
        },
        {
            id: 3,
            title: 'PBTfans Overtime',
            price: 6.00,
            images: {
                default: '/pbtfans/fv5.webp',
                hover: '/pbtfans/fv4.webp'
            },
            link: '/',
            alt:'image PBTfans Overtime'

        },
        {
            id: 4,
            title: 'PBTfans Touching Grass',
            price: 6.00,
            images: {
                default: '/pbtfans/fv7.webp',
                hover: '/pbtfans/fv6.webp'
            },
            link: '/',
            alt:'image PBTfans Touching Grass'
        },
        {
            id: 5,
            title: 'PBTfans Window View',
            price: 6.00,
            images: {
                default: '/pbtfans/fv8.webp',
                hover: '/pbtfans/fv7.webp'
            },
            link: '/',
            alt:'image PBTfans Window View'
        },
    ]

    return (
        <section>
            <SectionReutilisable
                hrefTitle='Shop now'
                sectionTitle='PBTfans'
                hrefShopNow='/'
                arr={PBTfansCardItems}/>
        </section>
    )
}
export default PBtfansSection
