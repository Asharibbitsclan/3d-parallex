import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";
import {
    cookerSceneContent,
    panSceneContent,
} from "../../app/core/scene-content";

function HomePage() {
    return (
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
                scrollContent={cookerSceneContent}
            />
            <ScrollScene
                sectionName="scene-02"
                paddedZeros={5}
                totalFrames={675}
                imageExtension="png"
                imagesRoot="./assets/scenes/scene-02/Scene 2 V1_"
                cover
                playUntil="scroll-out"
                starts="in"
                scrollContent={panSceneContent}
            />
        </ScrollContainer>
    );
}

export default HomePage;
