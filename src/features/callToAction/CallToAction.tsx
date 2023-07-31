import AppDropdown from "../../app/common/form/AppDropdown";
import AppInput from "../../app/common/form/AppInput";

function CallToAction() {
    return (
        <div className="call-to-action-section container">
            <h3 className="text-center mb-4">
                <span className="color-primary">Join</span> The Waiting List
            </h3>
            <form className="call-action-form">
                <div className="row">
                    <div className="col-4">
                        <AppInput type="text" labelText="Name" id="name" />
                    </div>
                    <div className="col-4">
                        <AppInput
                            required
                            type="text"
                            labelText="Business Name *"
                            id="business-name"
                        />
                    </div>
                    <div className="col-4">
                        <AppInput
                            required
                            type="email"
                            labelText="Email *"
                            id="email"
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-4">
                        <AppInput type="text" labelText="Phone" id="phone" />
                    </div>
                    <div className="col-4">
                        <AppInput
                            required
                            type="text"
                            labelText="Address"
                            id="address"
                        />
                    </div>
                    <div className="col-4">
                        <AppDropdown labelText="Tell us which bests describes you?" />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className="app-btn" type="submit">
                        Schedule a Demo
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CallToAction;
