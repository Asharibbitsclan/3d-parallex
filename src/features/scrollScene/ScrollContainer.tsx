import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function ScrollContainer({ children }: Props) {
    return <div className="scroll-container">{children}</div>;
}

export default ScrollContainer;
