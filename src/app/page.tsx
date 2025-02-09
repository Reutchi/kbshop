import { AccessoriesSection, Navigation, NewArrivalSection, PBtfansSection, ProductSection } from "../components";

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <ProductSection />
                <NewArrivalSection />
                <AccessoriesSection />
                <PBtfansSection />
            </main>
        </>
    );
}
