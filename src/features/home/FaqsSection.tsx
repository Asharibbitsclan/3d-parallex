import { Accordion } from "react-bootstrap";

const faqs = [
    {
        heading: "What is your work dicipline?",
        content:
            "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.",
    },
    {
        heading: "What is your work dicipline?",
        content:
            "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.",
    },
    {
        heading: "What is your work dicipline?",
        content:
            "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.",
    },
    {
        heading: "What is your work dicipline?",
        content:
            "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.",
    },
];

function FaqsSection() {
    return (
        <>
            <div className="faqs-section container">
                <div className="faq-heading">
                    <h1>FAQ's</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.LoremIpsum is simply dummy text of
                        the printing and typesetting industry Lorem Ipsum is
                        simply dummy text of the printing and typesetting.
                    </p>
                </div>
                <div className="faqs-container">
                    <img
                        src="/assets/images/outline-circle-dark.svg"
                        className="faqs-doodle"
                        style={{
                            width: 80,
                            top: "-6%",
                            left: "-2%",
                        }}
                    />
                    <img
                        src="/assets/images/blue-filled-circle.svg"
                        className="faqs-doodle"
                        style={{
                            width: 150,
                            top: "-10%",
                            right: "-4%",
                        }}
                    />
                    <img
                        src="/assets/images/green-filled-circle.svg"
                        className="faqs-doodle"
                        style={{
                            bottom: "-7%",
                            left: "50%",
                        }}
                    />
                    <img
                        src="/assets/images/outline-circle-dark.svg"
                        className="faqs-doodle"
                        style={{
                            width: 100,
                            bottom: "-10%",
                            right: "-2%",
                        }}
                    />
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
