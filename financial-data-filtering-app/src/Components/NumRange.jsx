// src/Components/NumRange.jsx


function NumRange({ min, setMin, max, setMax, minLabel, maxLabel }) {
    return (
        <div className="num-range">
            <label>
                {minLabel}
                <input
                    type="number"
                    value={min || ""}
                    onChange={(e) => setMin(Number(e.target.value))}
                />
            </label>
            <label>
                {maxLabel}
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
