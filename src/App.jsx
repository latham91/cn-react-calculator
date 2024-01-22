import "./App.css";
import CalcButton from "./components/CalcButton";
import { useState } from "react";

const keys = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "+", "0", ".", "-", "="];

export default function App() {
    const [sum, setSum] = useState([]);

    const handleClear = () => {
        setSum([]);
    };

    const handleButtonClick = (value) => {
        if (value === "=") {
            // Calculate the sum
            const calcString = sum.join("");
            const calcSum = eval(calcString);
            setSum([calcSum]);
            return;
        }

        setSum((prevSum) => [...prevSum, value]);
    };

    return (
        <div>
            <h1>React Calculator</h1>
            <main>
                <div className="container">
                    <div className="calc-header">
                        <h3>Casio</h3>
                        <div className="calc-solar"></div>
                    </div>
                    <div className="calc-screen">{sum[0] ? sum.join("") : 0}</div>
                    <div className="calc-clear">
                        <CalcButton label="AC" onClick={handleClear} />
                    </div>
                    <div className="calc-keys">
                        {keys.map((key) => (
                            <CalcButton key={key} label={key} onClick={handleButtonClick} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
