interface Props {
    imageUrl: string;
    heading: React.ReactElement;
    content: string;
    alter?: boolean;
    index?: number;
}

function Banner({ imageUrl, heading, content, alter, index }: Props) {
    const imageOrder = alter ? "order-md-2" : "order-md-1";
    const contentOrder = alter ? "order-md-1" : "order-md-2";

    let filledStyles: React.CSSProperties, outlinedStyles: React.CSSProperties;

    if (index === 1) {
        filledStyles = { top: "-50%", transform: "translate(-50%, 50%)" };
        outlinedStyles = {
            right: "-4%",
            bottom: "-15%",
        };
    } else if (index == 2) {
        filledStyles = { bottom: "-50%", transform: "translate(-50%, -50%)" };
        outlinedStyles = {
            top: "-15%",
            left: "-4%",
        };
    } else if (index === 3) {
        filledStyles = { bottom: "-50%", transform: "translate(-50%, -50%)" };
        outlinedStyles = {
            top: "-15%",
            right: "-4%",
        };
    } else {
        filledStyles = { top: "-50%", transform: "translate(-50%, 50%)" };
        outlinedStyles = {
            right: "-4%",
            bottom: "-15%",
        };
    }

    return (
        <div className="banner container">
            <img
                src="/assets/images/filled-circle.svg"
                className="banner-doodle filled-circle"
                style={filledStyles}
            />
            <img
                src="/assets/images/outline-circle.svg"
                className="banner-doodle"
                style={outlinedStyles}
            />
            <div className="row banner-row">
                <div className={`col-md-6 ${imageOrder}`}>
                    <div
                        className={`banner-img ${
                            alter
                                ? "u-remove-border-left"
                                : "u-remove-border-right"
                        }`}
                        style={{ background: `url(${imageUrl})` }}
                    ></div>
                </div>
                <div className={`col-md-6 ${contentOrder}`}>
                    <div
                        className={`banner-content ${
                            alter
                                ? "u-remove-border-right"
                                : "u-remove-border-left"
                        }`}
                    >
                        {heading}
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
