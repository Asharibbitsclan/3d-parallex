import "./app-input.css";

interface IProps {
    labelText?: string;
    id?: string;
    required?: boolean;
}

function AppDropdown({ labelText, id, required }: IProps) {
    return (
        <span>
            <label className="app-label" htmlFor={id}>
                {labelText}
            </label>
            <br />
            <select className="app-input" name="about" id="about">
                <option value="coffee">Coffee Shop/Cafe</option>
                <option value="dining">University/College Dining</option>
                <option value="quick_restaurant">
                    Quick Service Restaurant
                </option>
                <option value="full_restaurant">Full Service Restaurant</option>
                <option value="press">Press</option>
                <option value="other">Other</option>
            </select>
        </span>
    );
}

export default AppDropdown;
