import { useEffect } from "react";

import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import FadeAnimations from "../fadeAnimations/FadeAnimations";
import { startTextAnimations } from "../../app/core/scroll-animation/scrollAnimation";
import BannerSection from "./BannerSection";
import AnimatedOvanSection from "./AnimatedOvanSection";
import FaqsSection from "./FaqsSection";
import JoinDemoSection from "./JoinDemoSection";
import KitchenProductSection from "./KitchenProductSection";
import Footer from "../../app/common/footer/Footer";
import AppNavbar from "../../app/common/navbar/AppNavbar";
import Doodles from "./Doodles";
import HeroSection from "./HeroSection";

function HomePage() {
    useEffect(() => {
        startTextAnimations();
    }, [startTextAnimations]);

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
                        scrollHeight={1500}
                    />
                    <FadeAnimations />
                </ScrollContainer>
                <BannerSection />
                <AnimatedOvanSection />
                <FaqsSection />
            </div>
            <JoinDemoSection />
            <KitchenProductSection />
            <Footer />
        </>
    );
}

export default HomePage;
