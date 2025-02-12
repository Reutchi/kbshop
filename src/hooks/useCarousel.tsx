import { useState } from 'react';

export const useCarousel = (itemsLength: number) => {
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [activeCarouselId, setActiveCarouselId] = useState<number>(0);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setActiveCarouselId((prev) => (prev === itemsLength - 1 ? 0 : prev + 1));
        } else if (isRightSwipe) {
            setActiveCarouselId((prev) => (prev === 0 ? itemsLength - 1 : prev - 1));
        }
    };

    return { activeCarouselId, setActiveCarouselId, onTouchStart, onTouchMove, onTouchEnd };
};
