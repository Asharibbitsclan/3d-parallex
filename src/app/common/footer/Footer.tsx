function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h6>Contact</h6>
                        <a href="mailto:sales@bridgeappliances.com?subject=I%27d%20like%20to%20learn%20more%20about%20Bridge%20Appliances!">
                            sales@bridgeappliances.com
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <h6>Address</h6>
                        <p>Portsmouth, NH</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Company</h6>
                        <ul>
                            <li>
                                <a href="https://www.bridgeappliances.com/about">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="https://www.bridgeappliances.com">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="https://www.bridgeappliances.com/blog/tags/automation">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h6>Customers</h6>
                        <ul>
                            <li>
                                <a href="https://www.bridgeappliances.com/omm">
                                    OMM
                                </a>
                            </li>
                            <li>
                                <a href="https://www.bridgeappliances.com/restaraunt-solutions">
                                    Restaurant Solutions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="text-center mt-5 footer-credits">
                        ©2023 by Bridge Appliances. Proudly created with Wix.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
