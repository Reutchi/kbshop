import {
    AccessoriesSection,
    KeyboardSwitchesSection,
    Navigation,
    NewArrivalSection,
    PBtfansSection,
    ProductSection
} from "../components";
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
                <KeyboardSwitchesSection/>
            </main>
        </>
    );
}

export default Home