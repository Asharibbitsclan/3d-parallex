import { useEffect } from "react";

import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import FadeAnimations from "../fadeAnimations/FadeAnimations";
import GradientButton from "../../app/common/buttons/GradientButton";
import { startTextAnimations } from "../../app/core/textAnimations/textAnimation";

function HomePage() {
    useEffect(() => {
        startTextAnimations();
    }, [startTextAnimations]);

    return (
        <div className="main-container">
            <div className="hero-section">
                <h1>
                    <span className="color-primary">Crush</span> Your{" "}
                    <span className="color-primary">Morning</span> Rush with{" "}
                    <span className="color-primary">OMM.</span>
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text. simply dummy Lorem Ipsum
                    is simply dummy text. simply dummy loream ipsum loream
                    ipsum.
                </p>
                <GradientButton content="Schedule a Demo" className="mt-3" />
            </div>
            <ScrollContainer>
                <ScrollScene
                    sectionName="scene-01"
                    paddedZeros={4}
                    totalFrames={330}
                    imageExtension="png"
                    imagesRoot="./assets/scenes/scene-01/Scene 1 V1_"
                    cover
                    playUntil="scroll-out"
                    starts="in"
                    scrollHeight={700}
                />
                <FadeAnimations />
            </ScrollContainer>
        </div>
    );
}

export default HomePage;
