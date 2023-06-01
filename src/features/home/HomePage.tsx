import { useEffect } from "react";

import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import FadeAnimations from "../fadeAnimations/FadeAnimations";
import { startTextAnimations } from "../../app/core/scroll-animation/scrollAnimation";
import AnimatedOvanSection from "./AnimatedOvanSection";
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
                        totalFrames={1465}
                        imageExtension="png"
                        imagesRoot="./assets/scenes/merged/scene "
                        cover
                        playUntil="scroll-out"
                        starts="in"
                        scrollHeight={2500}
                    />
                    <FadeAnimations />
                </ScrollContainer>
                <AnimatedOvanSection />
                <FaqsSection />
            </div>
            <KitchenProductSection />
            <Footer />
        </>
    );
}

export default HomePage;
