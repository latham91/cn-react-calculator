import "./App.css";
import CalcButton from "./components/CalcButton";
import { useState, useEffect, useCallback } from "react";

const keys = ["%", "^", "C", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "+", "0", ".", "-", "="];

export default function App() {
    const [sum, setSum] = useState([]);

    const handleButtonClick = useCallback(
        (value) => {
            if (value === "=") {
                // Calculate the sum
                try {
                    const calcString = sum.join("");
                    const calcSum = eval(calcString);

                    setSum([calcSum]);
                    return;
                } catch (error) {
                    setSum([]);
                    setSum(["Error"]);
                    return;
                }
            }

            if (value === "C") {
                // Clear the last value
                const newSum = [...sum];
                newSum.pop();
                setSum(newSum);
                return;
            }

            if (value === "AC") {
                // Clear the entire sum
                setSum([]);
                return;
            }

            if (value === "^") {
                // Instead of pushing ^ to the sum, push ** to the sum
                setSum((prevSum) => [...prevSum, "**"]);
                return;
            }

            if (value === "%") {
                // Instead of pushing % to the sum, push /100 to the sum
                setSum((prevSum) => [...prevSum, "/100"]);
                return;
            }

            setSum((prevSum) => [...prevSum, value]);
        },
        [sum, setSum]
    );

    useEffect(() => {
        // Add event listener for keyboard support
        const handleKeyDown = (event) => {
            const { key } = event;

            if (key === "Enter" || key === "=") {
                handleButtonClick("=");
                return;
            }

            if (key === "Backspace") {
                handleButtonClick("C");
                return;
            }

            if (key === "Escape") {
                handleButtonClick("AC");
                return;
            }

            if (key === "Shift") {
                handleButtonClick("^");
                return;
            }

            if (key === "%") {
                handleButtonClick("%");
                return;
            }

            if (key === ".") {
                handleButtonClick(".");
                return;
            }

            if (key === "/") {
                handleButtonClick("/");
                return;
            }

            if (key === "*") {
                handleButtonClick("*");
                return;
            }

            if (key === "-") {
                handleButtonClick("-");
                return;
            }

            if (key === "+") {
                handleButtonClick("+");
                return;
            }

            if (key === "0") {
                handleButtonClick("0");
                return;
            }

            if (key === "1") {
                handleButtonClick("1");
                return;
            }

            if (key === "2") {
                handleButtonClick("2");
                return;
            }

            if (key === "3") {
                handleButtonClick("3");
                return;
            }

            if (key === "4") {
                handleButtonClick("4");
                return;
            }

            if (key === "5") {
                handleButtonClick("5");
                return;
            }

            if (key === "6") {
                handleButtonClick("6");
                return;
            }

            if (key === "7") {
                handleButtonClick("7");
                return;
            }

            if (key === "8") {
                handleButtonClick("8");
                return;
            }

            if (key === "9") {
                handleButtonClick("9");
                return;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Need to remove event listener or else useEffect will keep adding them
        // and multiple of the same keys will be added
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleButtonClick]);

    return (
        <div>
            <h1>React Calculator</h1>
            <main>
                <div className="container">
                    <div className="calc-header">
                        <h3>Casio</h3>
                        <div className="calc-solar"></div>
                    </div>
                    <div
                        className={`calc-screen ${sum.length > 8 ? "text-sm" : ""} ${sum.length > 9 ? "text-xs" : ""} ${
                            sum.length > 10 ? "text-xxs" : ""
                        }`}
                    >
                        {sum[0] ? sum.join("") : 0}
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
