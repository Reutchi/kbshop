import {
    DescriptionProduct,
    FooterSection,
    Navigation,
    ProductDetailsCard,
} from '../../../components';

type paramsProps = { params: any };

const ProductPage = async ({ params }: paramsProps) => {
    const { id } = await params;

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 flex flex-col justify-center items-center">
                <ProductDetailsCard />
                <DescriptionProduct />
            </main>
            <FooterSection />
        </div>
    );
};

export default ProductPage;
