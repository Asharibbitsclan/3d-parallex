import "./app-input.css";

interface IProps {
    labelText?: string;
    type: string;
    id?: string;
    required?: boolean;
}

function AppInput({ id, type, labelText, required }: IProps) {
    return (
        <span>
            <label className="app-label" htmlFor={id}>
                {labelText}
            </label>
            <br />
            <input
                className="app-input"
                type={type}
                id={id}
                required={required}
            />
        </span>
    );
}

export default AppInput;
