import { notFound } from 'next/navigation';
import { FooterSection, Navigation, ProductDetailsCard } from '../../../components';
import React from 'react';

interface ProductPageProps {
    params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
    if (!params.id) {
        return notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 flex justify-center items-center">
                <ProductDetailsCard />
            </main>
            <FooterSection />
        </div>
    );
};

export default ProductPage;
