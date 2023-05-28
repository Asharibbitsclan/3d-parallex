function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4>LOGO</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <p>Weekdays: 7:00 AM - 6:00 PM</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1">
                        <p>Resources</p>
                        <p>Community</p>
                        <p>Events</p>
                        <p>Help Center</p>
                        <p>Partner</p>
                    </div>
                    <div className="col-1">
                        <p>Resources</p>
                        <p>Community</p>
                        <p>Events</p>
                        <p>Help Center</p>
                        <p>Partner</p>
                    </div>
                    <div className="col-1">
                        <p>Resources</p>
                        <p>Community</p>
                        <p>Events</p>
                        <p>Help Center</p>
                        <p>Partner</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <p>Get Email Notifications</p>
                        <p>
                            Generate outside the box thinking with the
                            possibility to targtet the low
                        </p>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control footer-email"
                                placeholder="Enter email..."
                                aria-label="Enter email..."
                                aria-describedby="btn-email-footer"
                            />
                            <button
                                className="btn btn-outline-secondary footer-email-btn"
                                type="button"
                                id="btn-email-footer"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <p>
                    &copy; 2023 Bitsclan All rights reserved. | Terms and
                    Conditions | Return policy
                </p>
            </div>
        </div>
    );
}

export default Footer;
