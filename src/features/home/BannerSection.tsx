import Banner from "../../app/common/banner/Banner";

function BannerSection() {
    return (
        <div className="banner-section">
            <Banner
                index={1}
                imageUrl="../assets/images/banner-1.png"
                heading={
                    <h1 className="primary-heading">
                        <span className="color-primary">Quick</span> and{" "}
                        <span className="color-primary">Efficient.</span>
                    </h1>
                }
                content="Omm Cooks Two Eggs at a Time, Keeping a Quick Pace
                That Gets Your Customers Served Fast."
            />
            <Banner
                index={2}
                alter
                imageUrl="../assets/images/banner-2.png"
                heading={
                    <h1 className="primary-heading">
                        {" "}
                        <span className="color-primary">
                            Fast Food Pace. <br />
                        </span>{" "}
                        Diner Quality.{" "}
                    </h1>
                }
                content="Omm Cooks Will Cook The Eggs Sunnyside Up With
                Control Over The Completeness Of The Yolk
                From Easy To Hard."
            />
            <Banner
                index={3}
                imageUrl="../assets/images/banner-3.png"
                heading={
                    <h1 className="primary-heading">
                        <span className="color-primary">Increase</span> Your{" "}
                        <span className="color-primary">Capacity.</span> <br />
                        <span className="color-primary">Lower</span> Your{" "}
                        <span className="color-primary">Costs</span>
                    </h1>
                }
                content="Omm Helps Reduce Overhead Costs While increasing Your Capacity
                For Hourly Sales Giving You The Opportunity To Grow Revenue,
                Profits And Your Business."
            />
        </div>
    );
}

export default BannerSection;
