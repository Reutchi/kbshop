import { AccessoriesSection, Navigation, NewArrivalSection, PBtfansSection, ProductSection } from "../components";
import React from "react";


const Home: React.FC = () => {
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

export default Home