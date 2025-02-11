import { notFound } from 'next/navigation';
import { FooterSection, Navigation, ProductDetailsCard } from '../../../components';
import React from 'react';

type paramsProps = { params: string };
const ProductPage: React.FC = async ({ params }: paramsProps) => {
    const { id } = await params;

    return (
        <div className="flex flex-col min-h-screen">
            <p>ID: {id}</p>
            <Navigation />
            <main className="flex-1 flex justify-center items-center">
                <ProductDetailsCard />
            </main>
            <FooterSection />
        </div>
    );
};

export default ProductPage;
