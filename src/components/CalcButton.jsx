import "./CalcButton.css";

import PropTypes from "prop-types";

export default function CalcButton({ label, onClick }) {
    const handleButtonClick = () => {
        onClick(label);
    };

    const operatorKeys = ["+", "-", "*", "/", "^", "%"];
    const clearKeys = ["C", "AC"];

    return (
        <div
            className={`calc-button ${operatorKeys.includes(label) && "bg-operator"} ${
                clearKeys.includes(label) && "bg-clear"
            } ${label === "=" && "bg-equals"}`}
            onClick={handleButtonClick}
        >
            {label}
        </div>
    );
}

CalcButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
