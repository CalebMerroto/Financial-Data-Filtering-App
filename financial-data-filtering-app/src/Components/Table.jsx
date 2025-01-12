// src/Components/Table.jsx
import { useEffect, useState } from "react";
import fetchIncomeData from "../API";
import DateRange from "./DateRange";
import "./Table.css";
import NumRange from "./NumRange";

function Table() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [maxRev, setMaxRev] = useState("");
    const [minRev, setMinRev] = useState("");
    const [maxIncome, setMaxIncome] = useState("");
    const [minIncome, setMinIncome] = useState("");
    const [sortBy, setSortBy] = useState("none");
    const [sortOrder, setSortOrder] = useState("ascending");

    // Fetch data
    useEffect(() => {
        async function fetchData() {
            const fetchedData = await fetchIncomeData();
            setData(fetchedData);
            setFiltered(fetchedData); // Initialize filtered with full data
        }

        fetchData();
    }, []);

    // Filter data based on criteria
    useEffect(() => {
        let temp = data;

        // Filter by date
        if (startDate || endDate) {
            temp = temp.filter((row) => {
                const rowDate = new Date(row.date);
                const start = startDate ? new Date(startDate) : null;
                const end = endDate ? new Date(endDate) : null;
                return (!start || rowDate >= start) && (!end || rowDate <= end);
            });
        }

        // Filter by revenue
        if (minRev || maxRev) {
            temp = temp.filter((row) => {
                return (
                    (!minRev || row.revenue >= minRev) &&
                    (!maxRev || row.revenue <= maxRev)
                );
            });
        }

        // Filter by net income
        if (minIncome || maxIncome) {
            temp = temp.filter((row) => {
                return (
                    (!minIncome || row.netIncome >= minIncome) &&
                    (!maxIncome || row.netIncome <= maxIncome)
                );
            });
        }

        setFiltered(temp); // Update the filtered data
    }, [startDate, endDate, data, maxRev, minRev, maxIncome, minIncome]);

    // Sort data
    useEffect(() => {
        if (sortBy === "none") return;

        const sortedData = [...filtered].sort((a, b) => {
            const valueA = a[sortBy];
            const valueB = b[sortBy];

            if (sortOrder === "ascending") {
                return valueA > valueB ? 1 : -1;
            } else {
                return valueA < valueB ? 1 : -1;
            }
        });

        setFiltered(sortedData); // Update filtered data with sorted data
    }, [sortBy, sortOrder, filtered]);

    return (
        <>
            <div className="filters">
                <DateRange
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                />
                <NumRange
                    min={minRev}
                    setMin={setMinRev}
                    max={maxRev}
                    setMax={setMaxRev}
                    minLabel={"Minimum Revenue"}
                    MinLabel={"Maximum Revenue"}
                />
                <NumRange
                    min={minIncome}
                    setMin={setMinIncome}
                    max={maxIncome}
                    setMax={setMaxIncome}
                    minLabel={"Minimum Income"}
                    MinLabel={"Maximum Income"}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Revenue</th>
                        <th>Net Income</th>
                        <th>Gross Profit</th>
                        <th>EPS (Earnings Per Share)</th>
                        <th>Operating Income</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((row, index) => (
                        <tr key={index}>
                            <td>{row.date}</td>
                            <td>{row.revenue}</td>
                            <td>{row.netIncome}</td>
                            <td>{row.grossProfit}</td>
                            <td>{row.eps}</td>
                            <td>{row.operatingIncome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;
