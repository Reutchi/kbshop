'use client';
import React, { useState } from 'react';
import { FooterLink } from '../types/navigation.types';
const FooterSection: React.FC = () => {
    const year: number = new Date().getFullYear();
    const [emailSubscription, setEmailSubscription] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const handleEmailSubscription = (email: string) => setEmailSubscription(email);
    const handleSubmitForm = (ev: React.FormEvent) => {
        ev.preventDefault();
        setTimeout(() => {
            setIsSubmitting(true);
        }, 1000);
    };
    console.log(isSubmitting);

    const footerLinks: FooterLink[] = [
        { id: 1, title: '---------->', link: '/' },
        { id: 2, title: 'Aliexpress', link: '/' },
        { id: 3, title: 'Shopee Philippines', link: '/' },
        { id: 4, title: 'Shopee Singapore', link: '/' },
        { id: 5, title: 'Shopee Singapore', link: '/' },
        { id: 6, title: 'Shopee Thailand', link: '/' },
        { id: 7, title: 'Wholesale', link: '/' },
        { id: 8, title: 'Terms of Service', link: '/' },
        { id: 9, title: 'Privacy policy', link: '/' },
        { id: 10, title: 'Group Buy Policy', link: '/' },
        { id: 11, title: 'Shipping Policy', link: '/' },
        { id: 12, title: 'Refund policy', link: '/' },
        { id: 13, title: 'Return order', link: '/' },
        { id: 14, title: 'Discord', link: '/' },
        { id: 15, title: 'KBDFans', link: '/' },
        { id: 16, title: 'Contact Us', link: '/' },
        { id: 17, title: 'About Us', link: '/' },
        { id: 18, title: 'Resources', link: '/' },
        { id: 19, title: 'Gift Card', link: '/' },
        { id: 20, title: 'Affiliate', link: '/' },
    ];

    return (
        <footer className="mt-16 text-white bg-black">
            <div className="mx-16">
                <form
                    onSubmit={(ev) => handleSubmitForm(ev)}
                    className="py-10 md:w-1/2 mx-auto flex flex-col justify-center items-center"
                >
                    Subscribe
                    {isSubmitting ? (
                        <h5 className="text-center p-12 text-4xl">Thank you for signing up!</h5>
                    ) : (
                        <label className="w-full flex flex-col py-2 md:flex-row justify-between px-4 pt-6 md:border-b border-gray-100">
                            <input
                                value={emailSubscription}
                                onChange={(ev) => handleEmailSubscription(ev.target.value)}
                                className="border rounded-md md:border-none mb-4 md:mb-0 text-center md:text-left md:focus:outline-none focus:outline-gray-900 placeholder:text-sm p-2 md:w-[80%]"
                                placeholder="Email address"
                                type="email"
                            />
                            <button
                                type="submit"
                                className="border rounded-xs bg-white md:bg-transparent md:border-none md:text-white border-white text-black p-2 cursor-pointer text-xs"
                            >
                                SIGN UP
                            </button>
                        </label>
                    )}
                </form>
                <hr className="border border-[#ffffff26]" />
                <nav className="pt-10 md:pt-30 pb-10">
                    <ul className="flex md:justify-start justify-center flex-wrap">
                        {footerLinks.map(({ id, title, link }) => (
                            <li
                                className="hover:text-gray-300 transition duration-200 text-[12px]"
                                key={id}
                            >
                                &nbsp; <a href={link}>{title}</a> |
                            </li>
                        ))}
                    </ul>
                    <a
                        className="pt-4 md:pt-0 flex justify-center items-center md:justify-start text-center md:text-left text-[12px]"
                        href="/"
                    >
                        &nbsp; Copyright © {year} KBDfans® Mechanical Keyboards Store. Powered by
                        Reutchi Dan
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default FooterSection;
