import "./button.css";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
    content: string;
}

function GradientButton({ content, ...rest }: Props) {
    return (
        <button className={`btn button gradient-btn ${rest.className}`}>
            {content}
        </button>
    );
}

export default GradientButton;
