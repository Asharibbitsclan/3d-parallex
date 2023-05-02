import ScrollContainer from "../scrollScene/ScrollContainer";
import ScrollScene from "../scrollScene/ScrollScene";

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
            />
        </ScrollContainer>
    );
}

export default HomePage;
