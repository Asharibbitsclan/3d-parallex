import { Accordion } from "react-bootstrap";

const faqs = [
    {
        heading: "WHAT ARE THE SPECS OF OMM?",
        content: `OMM was designed to fit in most countertop spaces to ensure it is easily accessible wherever you do your assembly or prep work.
            W: 17.25"
            H: 19.5"
            D: 27.5"
            OMM uses a 110v outlet and has an expected power draw of 16 AMPS.`,
    },
    {
        heading: "DOES OMM CONNECT TO THE INTERNET?",
        content:
            "OMM is designed to connect to the internet via Ethernet or Wi-Fi for device monitoring, PoS Integration, and updates. For best results and maximum connectivity, it is advised that OMM is connected to the internet via Ethernet.",
    },
    {
        heading: "WHAT HAPPENS IF OMM BREAKS OR NEEDS PARTS REPLACED?",
        content:
            "OMM is an advanced system using motors and sensors to collect performance data. OMM reports metrics back to our team on throughput, system malfunctions, and utilization. Customers can sign up for our service which will ensure regularly scheduled maintenance handled by a Bridge Appliance representative.",
    },
    {
        heading: "WHEN CAN I GET AN OMM?",
        content:
            "Production is expected to start in early 2024. OMMs will be rolled out by region and availability will vary by city or state.",
    },
    {
        heading: "WHEN CAN I DEMO?",
        content:
            "Demonstrations will start this summer. Follow our social media pages for updates on any events near you!",
    },
];

function FaqsSection() {
    return (
        <>
            <div className="faqs-section container">
                <div className="faq-heading">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>FAQ's</h1>
                        </div>
                        <div className="col-md-9">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.LoremIpsum is simply
                                dummy text of the printing and typesetting
                                industry Lorem Ipsum is simply dummy text of the
                                printing and typesetting.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faqs-container">
                    <Accordion>
                        {faqs.map((faq, index) => (
                            <Accordion.Item
                                eventKey={index.toString()}
                                key={index}
                            >
                                <Accordion.Header>
                                    {faq.heading}
                                </Accordion.Header>
                                <Accordion.Body>{faq.content}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default FaqsSection;
