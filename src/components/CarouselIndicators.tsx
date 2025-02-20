import React from 'react';
import ButtonsCarousel from './ButtonsCarousel';

interface Props {
    itemsLength: number;
    activeIndex: number;
    onSelect: (index: number) => void;
    carouselParams: (direction: 'left' | 'right') => void;
}

const CarouselIndicators: React.FC<Props> = ({
    itemsLength,
    activeIndex,
    onSelect,
    carouselParams,
}) => {
    function handleCarousel(direction: string) {
        carouselParams(direction as 'left' | 'right');
    }

    return (
        <ul className="flex justify-center items-start gap-3 mt-4">
            <ButtonsCarousel
                imgArrLength={itemsLength}
                activeCarouselId={activeIndex}
                carouselParams={handleCarousel}
            >
                {Array.from({ length: itemsLength }).map((_, idx) => (
                    <li
                        key={idx}
                        role="button"
                        aria-label={`Select product ${idx + 1}`}
                        onClick={() => onSelect(idx)}
                        className={`${activeIndex === idx ? 'border-2 border-gray-500 w-2.5 h-2.5' : 'bg-gray-400'} 
                    cursor-pointer w-2 h-2 rounded-full transition duration-500`}
                    ></li>
                ))}
            </ButtonsCarousel>
        </ul>
    );
};

export default CarouselIndicators;
