export interface productCardType {
    id: number;
    title: string;
    img: string;
    alt: string;
    link: string;
}

export interface mainCardProduct {
    id: number;
    title: string;
    price: number;
    images: {
        default: string;
        hover: string;
    };
    link: string;
    alt: string;
}

export interface accessoriesCardProduct {
    id: number;
    title: string;
    link: string;
    alt: string;
    img: string;
}

export interface productDescriptionCard {
    layout: string;
    specs: {
        specs: string[];
        include: string[];
        difference_with_r1: string[];
        update: string[];
        firmware: { link: string; title: string }[];
    };
    mainImage: string;
    id: number;
    inspiration: { description: string; title: string };
    video: string;
    dimension: string;
    pictures: { img: string; alt: string; id: number }[];
}
