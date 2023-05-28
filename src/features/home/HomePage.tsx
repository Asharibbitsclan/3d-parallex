import { useEffect } from "react";

import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import FadeAnimations from "../fadeAnimations/FadeAnimations";
import GradientButton from "../../app/common/buttons/GradientButton";
import { startTextAnimations } from "../../app/core/textAnimations/textAnimation";
import BannerSection from "./BannerSection";
import AnimatedOvanSection from "./AnimatedOvanSection";
import FaqsSection from "./FaqsSection";
import JoinDemoSection from "./JoinDemoSection";
import KitchenProductSection from "./KitchenProductSection";
import Footer from "../../app/common/footer/Footer";
import AppNavbar from "../../app/common/navbar/AppNavbar";
import Doodles from "./Doodles";

function HomePage() {
    useEffect(() => {
        startTextAnimations();
    }, [startTextAnimations]);

    return (
        <>
            <AppNavbar />
            <div className="main-container">
                <div className="hero-section">
                    <h1>
                        <span className="color-primary">Crush</span> Your{" "}
                        <span className="color-primary">Morning</span> Rush with{" "}
                        <span className="color-primary">OMM.</span>
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text. simply dummy Lorem
                        Ipsum is simply dummy text. simply dummy loream ipsum
                        loream ipsum.
                    </p>
                    <GradientButton
                        content="Schedule a Demo"
                        className="mt-3"
                    />
                </div>
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
