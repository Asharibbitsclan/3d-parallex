import GradientButton from "../../app/common/buttons/GradientButton";

function HeroSection() {
    return (
        <div className="hero-section">
            <h1 className="primary-heading">
                <span className="color-primary">Crush</span> Your{" "}
                <span className="color-primary">Morning</span> Rush with{" "}
                <span className="color-primary">OMM.</span>
            </h1>
            <p>Consistently fresh eggs through the power of automation.</p>
            <GradientButton content="Schedule a Demo" className="mt-3" />
        </div>
    );
}

export default HeroSection;
