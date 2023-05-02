import { useEffect } from "react";

import { ScrollSequence } from "../../app/core/image-sequence/scrollSequence";
import "./scroll-scene.css";

interface Props {
    sectionName: string;
    paddedZeros: number;
    totalFrames: number;
    imageExtension: string;
    imagesRoot: string;
    priorityFrames?: number[];
    cover: boolean;
    playUntil?: string;
    starts?: string;
    ends?: string;
}

function ScrollScene({
    imagesRoot,
    imageExtension,
    paddedZeros,
    totalFrames,
    cover,
    ends,
    playUntil,
    priorityFrames = [0, 20, 40, 60, 90],
    starts,
    sectionName,
}: Props) {
    useEffect(() => {
        const imageSequences: string[] = [];
        for (let i = 0; i <= totalFrames; i++) {
            imageSequences.push(
                `${`${i}`.padStart(paddedZeros, "0")}.${imageExtension}`
            );
        }
        new ScrollSequence({
            container: `.${sectionName}-sequence`,
            scrollWith: `.${sectionName}-container`,
            images: imageSequences,
            imagesRoot,
            priorityFrames,
            cover,
            playUntil,
            starts,
            ends,
        });
    }, []);

    return (
        <section
            className={`scroll-sequence__container ${sectionName}-container`}
        >
            <div className={`scroll-sequence ${sectionName}-sequence`}></div>
            <div className="scroll-sequence__content">
                <div className="speak">
                    <h1>OMM IS AN AUTOMATED EGG COOKER.</h1>
                    <p>
                        Lorem Ipsum is simply dummy text. simply dummy Lorem
                        Ipsum is simply dummy text. simply dummy loream ipsum
                        loream ipsum.
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
    );
}

export default ScrollScene;
