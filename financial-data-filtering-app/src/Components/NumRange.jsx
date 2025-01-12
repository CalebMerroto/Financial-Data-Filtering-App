// src/Components/NumRange.jsx
import "./NumRange.css"

function NumRange({ min, setMin, max, setMax, minLabel, maxLabel }) {
    return (
        <div className="num-range">
            <label>
                
            <span>{minLabel}: </span>
                <input
                    type="number"
                    value={min || ""}
                    onChange={(e) => setMin(Number(e.target.value))}
                />
            </label>
            <label>
                <span>{maxLabel}: </span>
                <input
                    type="number"
                    value={max || ""}
                    onChange={(e) => setMax(Number(e.target.value))}
                />
            </label>
        </div>
    );
}

export default NumRange;
