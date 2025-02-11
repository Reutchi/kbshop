import { FooterSection, Navigation, ProductDetailsCard } from '../../../components';

type paramsProps = { params: any };

const ProductPage = async ({ params }: paramsProps) => {
    const { id } = await params;

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
