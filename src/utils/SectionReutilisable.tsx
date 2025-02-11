'use client'
import React from "react";
import NewArrivalCard from "../utils/NewArrivalCard";
import useIsVisible from "../hooks/useIsVisible";
import Icons from "../utils/icons";
import { mainCardProduct } from "../types/product.types";

interface sectionReutilisableProps {
    sectionTitle: string;
    hrefShopNow: string;
    arr: mainCardProduct[];
}

const SectionReutilisable: React.FC<sectionReutilisableProps> = ({
                                                                     arr,
                                                                     sectionTitle,
                                                                     hrefShopNow,
                                                                 }) => {
    const [targetRef, isVisible] = useIsVisible(0.2);

    const sliderButtons = (
        <>
            <button className="hidden cursor-pointer hover:opacity-100 transition duration-200 absolute left-3 rotate-180 top-55 md:flex justify-center items-center w-[36px] h-[36px] rounded-full opacity-50 bg-white z-50">
                <Icons.arrowSlider />
            </button>
            <button className="hidden absolute right-3 cursor-pointer hover:opacity-100 transition duration-200 top-55 md:flex justify-center items-center w-[36px] h-[36px] rounded-full bg-white opacity-50 z-50">
                <Icons.arrowSlider />
            </button>
        </>
    );

    return (
        <div className="z-10 relative flex justify-center flex-col items-center mt-8 md:mt-16 mx-5 md:mx-18">
            <h2 className="text-[42px]">{sectionTitle}</h2>
            <a className="text-sm underline text-gray-600" href={hrefShopNow}>
                Shop now
            </a>

            {sectionTitle === "New arrival" && sliderButtons}

            <div
                ref={targetRef}
                className="flex items-center justify-evenly w-full gap-4 mt-8 flex-row overflow-x-scroll md:overflow-hidden md:flex-row"
            >
                {arr.map(({ id, title, price, images, link, alt }, index) => (
                    <NewArrivalCard
                        alt={alt}
                        sectionTitle={sectionTitle}
                        key={id}
                        title={title}
                        price={price}
                        img={images}
                        link={link}
                        isVisible={isVisible}
                        delay={index * 150}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionReutilisable;
