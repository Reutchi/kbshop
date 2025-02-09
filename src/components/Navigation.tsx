'use client'
import Image from 'next/image'
import { useState } from 'react';
import { SocialEnjoy } from "../components/index";
import Icons from '../utils/icons'
const Navigation = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const NavHeaderItems = [
        { id: 1, icon: "/searchIcon.svg", alt: "search icon", link: "#" },
        { id: 2, icon: "/profileIcon.svg", alt: "profile icon", link: "#" },
        { id: 3, icon: "/shoppingbagIcon.svg", alt: "shopping bag icon", link: "#" },
    ];

    const NavItemsCategory = [
        { id: 1, title: 'Home', link: '/', active: true },
        { id: 2, title: 'Keyboard Category' , link: '/',  active: false, dropdown:true},
        { id: 3, title: 'Shop', link: '#', active: false ,dropdown:true},
        { id: 4, title: 'Group Buy', link: '/', active: false,dropdown:true },
        { id: 5, title: 'Ready To Use', link: '#', active: false,dropdown:true },
        { id: 6, title: 'PBTfans', link: '/', active: false,dropdown:true },
        { id: 7, title: 'Tiger Lite Gaming', link: '/', active: false },
        { id: 8, title: 'GT-80', link: '/', active: false },
        // { id: 9, title: 'More links', link: '/', active: false },
    ];

    const dropdownContent = {
        3: [
            { id: 1, title: 'New Arrival', link: '#' },
            { id: 2, title: 'Restock', link: '#' },
            { id: 3, title: 'Keyboard', link: '#' },
            { id: 4, title: 'Keycaps', link: '#' },
            { id: 5, title: 'Switches', link: '#' },
            { id: 6, title: 'Case', link: '#' },
            { id: 7, title: 'PCB', link: '#' },
            { id: 8, title: 'Plate', link: '#' },
            { id: 9, title: 'Deskmats', link: '#' },
            { id: 10, title: 'Wrist Rest', link: '#' },
            { id: 11, title: 'Stabilizers', link: '#' },
            { id: 12, title: 'Accessories', link: '#' },
            { id: 13, title: 'Tools', link: '#' },
            { id: 14, title: 'Tape Mod Customization', link: '#' },
            { id: 15, title: 'Clearance', link: '#' },
        ],
        4:[
            { id: 1, title: 'Coming soon', link: '/' },
            { id: 2, title: 'Extra In-stock', link: '/' },
            { id: 3, title: 'Keyboard Pre-order', link: '/' },
            { id: 4, title: 'Interest Check', link: '/' },
            { id: 5, title: 'In Production', link: '/' },
            { id: 6, title: 'Group Buy Live', link: '/' },
            { id: 7, title: 'Updates', link: '/' },
            { id: 8, title: 'End', link: '/' },
        ],
        5: [
            { id: 1, title: '20% keyboard', link: '/' },
            { id: 2, title: '60% keyboard', link: '/' },
            { id: 3, title: '65% keyboard', link: '/' },
            { id: 4, title: '75% keyboard', link: '/' },
            { id: 5, title: '80% keyboard', link: '/' },
            { id: 6, title: '95% keyboard', link: '/' },
            { id: 7, title: '100% keyboard', link: '/' }
        ],
        6:[
            { id: 1, title: 'In stock', link: '/' },
            { id: 2, title: 'Coming soon', link: '/' },
            { id: 3, title: 'PBTfans Doubleshot', link: '/' },
            { id: 4, title: 'PBTfans Dyesub', link: '/' },
            { id: 5, title: 'Interest Check', link: '/' },
            { id: 6, title: 'In Production', link: '/' },
            { id: 7, title: 'About PBTfans Dyesub', link: '/' },
            { id: 8, title: 'End', link: '/' }
        ]
    };

    return (
        <header>
            <div className='bg-black'>
                <SocialEnjoy
                    link='/'
                    description='Click it to join the KBDfans discord channel' />
                <div className='flex justify-between items-center py-[15px] px-[60px]'>
                    <a href="/">
                        <Image
                            width='185'
                            height='0'
                            priority
                            className='w-[185px] h-auto'
                            alt='logo'
                            src='/logo.avif' />
                    </a>
                    <nav>
                        <ul className='flex space-x-4'>
                            {NavHeaderItems.map(({ link, icon, id, alt }) => (
                                <li key={id}>
                                    <a href={link}>
                                        <img src={icon} alt={alt} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <nav>
                    <ul className='md:flex hidden gap-14 py-4 mx-16'>
                        {NavItemsCategory.map(({ title, id, link, active,dropdown }) => (
                            <li
                                key={id}
                                className='text-[17px] relative'
                                onMouseEnter={() => setActiveDropdown(id)}
                            >
                                <a className="group relative" href={link}>
                                    <span
                                        className={`${active ? 'border-b-8 border-b-white pb-4 px-4' : 'no-underline'} text-white  items-center`}
                                    >
                                        {title} {dropdown && <div className='absolute -right-7 top-0'><Icons.arrowDropDownIcon/></div>}
                                    </span>
                                    <div
                                        className="absolute -bottom-5 left-0 bg-white h-0 w-full transition-all duration-200 group-hover:h-[4px]">
                                    </div>
                                </a>

                                {dropdownContent[id] && activeDropdown === id && (
                                    <ul
                                        className="absolute z-10 border-b-8 border-gray-500 -left-4 top-8 mt-2 w-64 flex flex-col gap-2 bg-black p-4"
                                        onMouseEnter={() => setActiveDropdown(id)}
                                        onMouseLeave={() => setTimeout(() => setActiveDropdown(null), 200)}
                                    >
                                        {dropdownContent[id].map((item) => (
                                            <li key={item.id}>
                                                <a href={item.link} className="block text-gray-500 hover:text-white transition duration-300">
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
