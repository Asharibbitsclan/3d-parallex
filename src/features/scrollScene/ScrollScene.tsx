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
    scrollHeight: number;
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
    scrollHeight,
}: Props) {
    useEffect(() => {
        const imageSequences: string[] = [];
        for (let i = 1; i <= totalFrames; i++) {
            imageSequences.push(
                `(${i}).${imageExtension}`
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
    });

    return (
        <div
            className={`scroll-sequence__container ${sectionName}-container`}
            style={{ height: `${scrollHeight}vh` }}
        >
            <div className={`scroll-sequence ${sectionName}-sequence`} />
        </div>
    );
}

export default ScrollScene;
