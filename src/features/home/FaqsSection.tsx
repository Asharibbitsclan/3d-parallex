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
                <Accordion>
                    {faqs.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faq.heading}</Accordion.Header>
                            <Accordion.Body>{faq.content}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </>
    );
}

export default FaqsSection;
