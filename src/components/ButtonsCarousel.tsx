import React from 'react';

interface ButtonsCarouselProps {
    carouselParams: (direction: 'left' | 'right') => void;
    activeCarouselId: number;
    children: React.ReactNode;
    imgArrLength: number;
}
const ButtonsCarousel: React.FC<ButtonsCarouselProps> = ({
    carouselParams,
    activeCarouselId,
    imgArrLength,
    children,
}) => {
    function handleCarousel(direction: string) {
        carouselParams(direction as 'left' | 'right');
    }
    return (
        <div className="w-full flex md:hidden justify-center gap-4 items-center">
            <button
                className={`${activeCarouselId === 0 && 'opacity-40'} cursor-pointer`}
                onClick={() => handleCarousel('left')}
            >
                <svg
                    fill="#000000"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
            </button>
            {children}
            <button
                className={`${activeCarouselId + 1 === imgArrLength && 'opacity-40'} cursor-pointer`}
                onClick={() => handleCarousel('right')}
            >
                <svg
                    fill="#000000"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
            </button>
        </div>
    );
};
export default ButtonsCarousel;
