import { useEffect } from "react";

import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import FadeAnimations from "../fadeAnimations/FadeAnimations";
import { startTextAnimations } from "../../app/core/scroll-animation/scrollAnimation";
import FaqsSection from "./FaqsSection";
import KitchenProductSection from "./KitchenProductSection";
import Footer from "../../app/common/footer/Footer";
import AppNavbar from "../../app/common/navbar/AppNavbar";
import Doodles from "./Doodles";
import HeroSection from "./HeroSection";

function HomePage() {
    useEffect(() => {
        startTextAnimations();
    }, []);

    return (
        <>
            <AppNavbar />
            <div className="main-container">
                <HeroSection />
                <Doodles />
                <ScrollContainer>
                    <ScrollScene
                        sectionName="scene-01"
                        paddedZeros={4}
                        totalFrames={1396}
                        imageExtension="png"
                        // imagesRoot="https://bridge-appliances.thewonderworkout.com/assets/scenes/V3/scene "
                        imagesRoot="./assets/scenes/merged/scene "
                        cover
                        playUntil="scroll-out"
                        starts="in"
                        scrollHeight={1900}
                    />
                    <FadeAnimations />
                </ScrollContainer>
                <FaqsSection />
            </div>
            <KitchenProductSection />
            <Footer />
        </>
    );
}

export default HomePage;
