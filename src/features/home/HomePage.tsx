import { useEffect } from "react";

import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import FadeAnimations from "../fadeAnimations/FadeAnimations";
import { startTextAnimations } from "../../app/core/scroll-animation/scrollAnimation";
import FaqsSection from "./FaqsSection";
import KitchenProductSection from "./KitchenProductSection";
import Footer from "../../app/common/footer/Footer";
import AppNavbar from "../../app/common/navbar/AppNavbar";

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
                        totalFrames={1465}
                        imageExtension="jpeg"
                        // imagesRoot="https://bridge-appliances.thewonderworkout.com/assets/scenes/V3/scene "
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
            <KitchenProductSection />
            <Footer />
        </>
    );
}

export default HomePage;
