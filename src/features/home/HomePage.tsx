import { useEffect } from "react";

import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import FadeAnimations from "../fadeAnimations/FadeAnimations";
import { startTextAnimations } from "../../app/core/scroll-animation/scrollAnimation";
import FaqsSection from "./FaqsSection";
import KitchenProductSection from "./KitchenProductSection";
import Footer from "../../app/common/footer/Footer";
import AppNavbar from "../../app/common/navbar/AppNavbar";
import CallToAction from "../callToAction/CallToAction";

function HomePage() {
    useEffect(() => {
        startTextAnimations();
    }, []);

    return (
        <>
            <AppNavbar />
            <div className="main-container">
                <ScrollContainer>
                    <ScrollScene
                        sectionName="scene-01"
                        paddedZeros={4}
                        totalFrames={1396}
                        imagesRoot="./assets/scenes/merged/scene "
                        cover
                        playUntil="scroll-out"
                        starts="in"
                        scrollHeight={4000}
                    />
                    <FadeAnimations />
                </ScrollContainer>
                <FaqsSection />
            </div>
            <CallToAction />
            <KitchenProductSection />
            <Footer />
        </>
    );
}

export default HomePage;
