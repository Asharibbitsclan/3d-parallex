import { ReactNode, useEffect } from "react";

import "./scroll-scene.css";
import { ScrollSequence } from "../../app/core/image-sequence/scrollSequence";

interface Props {
    children: ReactNode;
}

function ScrollScene() {
    const appleSequenceImages: string[] = [];
    const treeSequenceImages: string[] = [];

    for (let i = 0; i <= 330; i++) {
        appleSequenceImages.push(`${`000${i}`.slice(-4)}.png`);
    }
    for (let i = 0; i <= 675; i++) {
        treeSequenceImages.push(`${`0000${i}`.slice(-5)}.png`);
    }

    useEffect(() => {
        new ScrollSequence({
            container: ".apple-sequence",
            scrollWith: ".apple-container",
            images: appleSequenceImages,
            imagesRoot: "./assets/scenes/scene-01/Scene 1 V1_",
            priorityFrames: [0, 20, 40, 60, 90],
            cover: true,
            playUntil: "scroll-out",
            starts: "in",
        });

        new ScrollSequence({
            container: ".tree-sequence",
            scrollWith: ".tree-container",
            images: treeSequenceImages,
            imagesRoot: "./assets/scenes/scene-02/Scene 2 V1_",
            priorityFrames: [0, 20, 40, 60, 90],
            cover: true,
            starts: "out",
            ends: "in",
        });
    }, []);

    return (
        <div className="container scroll-container">
            <section className="scroll-sequence__container apple-container">
                <div className="scroll-sequence apple-sequence"></div>
                <div className="scroll-sequence__content">
                    <div className="speak">
                        <h1>OMM IS AN AUTOMATED EGG COOKER.</h1>
                        <p>
                            Lorem Ipsum is simply dummy text. simply dummy Lorem
                            Ipsum is simply dummy text. simply dummy loream
                            ipsum loream ipsum.
                        </p>
                    </div>
                    <div className="speak hidden">
                        <h1>This is Apple's image sequence</h1>
                        <p>All copyrights to them. Please don't sue me!</p>
                    </div>
                    <div className="speak hidden">
                        <h1>The Text Animation</h1>
                        <p>Is created with Scroll-out.js. Go check it out!</p>
                    </div>
                </div>
            </section>
            <section className="scroll-sequence__container tree-container">
                <div className="scroll-sequence tree-sequence"></div>
                <div className="scroll-sequence__content">
                    <div className="speak">
                        <h1>OMM CRACKS THE EGG INTO A HOT PAN</h1>
                        <p>
                            Lorem Ipsum is simply dummy text. simply dummy Lorem
                            Ipsum is simply dummy text. simply dummy loream
                            ipsum loream ipsum.
                        </p>
                    </div>
                    <div className="speak hidden">
                        <h1>Apple's images load faster</h1>
                        <p>
                            Compression favors less details. So, shots of the
                            forest was not the best idea :P
                        </p>
                    </div>
                    <div className="speak hidden">
                        <h1>Running out of things</h1>
                        <p>To say so imma head out.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ScrollScene;
