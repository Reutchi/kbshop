'use client';
import React, { useEffect, useRef, useState } from 'react';

const useIsVisible = (
    threshold: number = 0.5,
    rootMargin: string = '0px',
): [React.RefObject<HTMLDivElement>, boolean] => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null!); // Non-null assertion

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
            root: null,
            rootMargin,
            threshold,
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin]);

    return [ref, isVisible];
};

export default useIsVisible;
