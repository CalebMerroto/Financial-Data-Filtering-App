// src/Components/DateRange.jsx
import "./DateRange.css"

function DateRange({ startDate, setStartDate, endDate, setEndDate }) {

    return (
        <div className="date-range">
            <label>
                Start Date:
                <input
                    type="date"
                    value={startDate || ""}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </label>
            <label>
                End Date:
                <input
                    type="date"
                    value={endDate || ""}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </label>
        </div>
    );
}

export default DateRange;
