import {
    AccessoriesSection, FooterSection,
    KeyboardSwitchesSection,
    Navigation,
    NewArrivalSection,
    PBtfansSection,
    ProductSection, ReadyToUseSection
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
                <ReadyToUseSection/>
            </main>
            <FooterSection/>
        </>
    );
}

export default Home