import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    img: string;
    alt: string;
    link: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ title, img, alt, link }) => {
    return (
        <article className="cursor-pointer flex justify-center items-end  rounded-xl group overflow-hidden">
            <figure className="transition-transform duration-300  group-hover:scale-105">
                <img
                    width="700"
                    height="0"
                    className="h-[400px] w-[500px] rounded-md object-cover md:h-[350px]"
                    alt={alt}
                    src={img}
                />
            </figure>
            <div className="absolute bottom-8 flex justify-center flex-col">
                <h3 className="text-2xl md:text-4xl text-white">{title}</h3>
                <a href={link} className="text-center text-white underline">
                    Buy now
                </a>
            </div>
        </article>
    );
};
export default ProductCard;
