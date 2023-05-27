interface Props {
    imageUrl: string;
    heading: React.ReactElement;
    content: string;
    alter?: boolean;
}

function Banner({ imageUrl, heading, content, alter }: Props) {
    const imageOrder = alter ? "order-md-2" : "order-md-1";
    const contentOrder = alter ? "order-md-1" : "order-md-2";
    return (
        <div className="banner container">
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
