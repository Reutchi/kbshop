'use client';
import React, { useState, useEffect, useRef } from 'react';

// Define the return type for the useIsVisible hook
type UseIsVisibleReturn = [React.RefObject<HTMLElement | null>, boolean];

const useIsVisible = (threshold: number = 0.5, rootMargin: string = '0px'): UseIsVisibleReturn => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { root: null, rootMargin, threshold }
        );

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
}

export default useIsVisible;
