import "./CalcButton.css";

import PropTypes from "prop-types";

export default function CalcButton({ label, onClick }) {
    const handleButtonClick = () => {
        onClick(label);
    };

    return (
        <div className="calc-button" onClick={handleButtonClick}>
            {label}
        </div>
    );
}

CalcButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
