import { notFound } from 'next/navigation';
import { FooterSection, Navigation, ProductDetailsCard } from '../../../components';

type paramsProps = { params: any }; // Folosind any pentru params

const ProductPage = async ({ params }: paramsProps) => {
    const { id } = await params; // id va fi tipizat ca any

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
