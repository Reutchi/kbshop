import {
    AccessoriesSection, FooterSection,
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
            <FooterSection/>
        </>
    );
}

export default Home