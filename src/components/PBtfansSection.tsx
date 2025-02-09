'use client'
import {SectionReutilisable} from "../components/index";

const PBtfansSection = () => {

    const PBTfansCardItems = [
        {
            id: 1,
            title: 'PBTfans Corporate Beige',
            price: '6.00',
            images: {
                default: '/pbtfans/fv1.webp',
                hover: '/pbtfans/fv0.webp'
            },
            link: '/'
        },
        {
            id: 2,
            title: 'PBTfans Office Love',
            price: '6.00',
            images: {
                default: '/pbtfans/fv3.webp',
                hover: '/pbtfans/fv2.webp'
            },
            link: '/'
        },
        {
            id: 3,
            title: 'PBTfans Overtime',
            price: '6.00',
            images: {
                default: '/pbtfans/fv5.webp',
                hover: '/pbtfans/fv4.webp'
            },
            link: '/'
        },
        {
            id: 4,
            title: 'PBTfans Touching Grass',
            price: '6.00',
            images: {
                default: '/pbtfans/fv7.webp',
                hover: '/pbtfans/fv6.webp'
            },
            link: '/'
        },
        {
            id: 5,
            title: 'PBTfans Window View',
            price: '6.00',
            images: {
                default: '/pbtfans/fv8.webp',
                hover: '/pbtfans/fv7.webp'
            },
            link: '/'
        },
    ]

    return (
        <section>
            <SectionReutilisable
                sectionTitle='PBTfans'
                hrefShopNow='/'
                arr={PBTfansCardItems}/>
        </section>
    )
}
export default PBtfansSection
