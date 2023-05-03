import { ReactNode, useEffect } from "react";

import { ScrollSequence } from "../../app/core/image-sequence/scrollSequence";
import "./scroll-scene.css";

interface Props {
    scrollContent: ReactNode[];
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
    scrollContent,
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
    });

    const renderedScrollContent = scrollContent.map((content, index) => (
        <div className="scene-content" key={index}>
            {content}
        </div>
    ));

    return (
        <section
            className={`scroll-sequence__container ${sectionName}-container`}
        >
            <div className={`scroll-sequence ${sectionName}-sequence`}></div>
            <div className="scroll-sequence__content">
                {renderedScrollContent}
            </div>
        </section>
    );
}

export default ScrollScene;
