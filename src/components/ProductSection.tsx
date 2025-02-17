'use client';
import React from 'react';
import ProductCard from '../utils/ProductCard';
import { useCarousel } from '../hooks/useCarousel';
import CarouselIndicators from './CarouselIndicators';
import { productCardType } from '../types/product.types';

const ProductSection: React.FC = () => {
    const productCardItems: productCardType[] = [
        {
            id: 1,
            title: '[GB] Snake60 R2',
            img: '/keyboard_image.jpg',
            alt: 'keyboard image Snake60 R2 [GB]',
            link: '/',
        },
        {
            id: 2,
            title: '[Pre-order] GT-80',
            img: '/black_keyboard.webp',
            alt: 'Black keyboard GT-80 compatible with Wooting80 HE',
            link: '/',
        },
        { id: 3, title: 'Agar', img: '/agar.webp', alt: 'Keyboard agar white', link: '/' },
        {
            id: 4,
            title: 'KBDfans x MM Gaming',
            img: '/multicolor_keyboard.webp',
            alt: 'Multi Color Keyboard KBDfans x MM Gaming',
            link: '/',
        },
    ];

    const { activeCarouselId, setActiveCarouselId, onTouchStart, onTouchMove, onTouchEnd } =
        useCarousel(productCardItems.length);

    return (
        <section className="mt-10 mx-2 md:mx-16">
            <div className="hidden md:grid md:grid-cols-2 gap-4">
                {productCardItems.map(({ id, title, img, alt, link }) => (
                    <ProductCard key={id} title={title} img={img} alt={alt} link={link} />
                ))}
            </div>

            <div className="md:hidden">
                <div className="overflow-hidden relative">
                    <div
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${activeCarouselId * 100}%)` }}
                    >
                        {productCardItems.map(({ id, title, img, alt, link }) => (
                            <div key={id} className="min-w-full">
                                <ProductCard title={title} img={img} alt={alt} link={link} />
                            </div>
                        ))}
                    </div>
                </div>
                <CarouselIndicators
                    itemsLength={productCardItems.length}
                    activeIndex={activeCarouselId}
                    onSelect={setActiveCarouselId}
                />
            </div>
        </section>
    );
};

export default ProductSection;
