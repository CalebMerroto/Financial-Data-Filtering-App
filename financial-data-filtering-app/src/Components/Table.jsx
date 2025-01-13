// src/Components/Table.jsx
import { React, useEffect, useState } from "react";
import fetchIncomeData from "../API";
import DateRange from "./DateRange";
import "./Table.css";
import NumRange from "./NumRange";
import SortSelect from "./SortSelect"

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

    // Filter data based on criteria & sort it
    useEffect(() => {
        if (sortBy === "none") return;
    
        const sortedData = [...data].filter((row) => {
            // Apply the current filters
            const rowDate = new Date(row.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;
    
            return (
                (!start || rowDate >= start) &&
                (!end || rowDate <= end) &&
                (!minRev || row.revenue >= minRev) &&
                (!maxRev || row.revenue <= maxRev) &&
                (!minIncome || row.netIncome >= minIncome) &&
                (!maxIncome || row.netIncome <= maxIncome)
            );
        });
    
        // Apply sorting
        sortedData.sort((a, b) => {
            let valueA, valueB;
    
            if (sortBy === "Date") {
                valueA = new Date(a.date);
                valueB = new Date(b.date);
            } else if (sortBy === "Revenue") {
                valueA = a.revenue;
                valueB = b.revenue;
            } else if (sortBy === "Net Income") {
                valueA = a.netIncome;
                valueB = b.netIncome;
            }
    
            if (sortOrder === "ascending") {
                return valueA > valueB ? 1 : -1;
            } else {
                return valueA < valueB ? 1 : -1;
            }
        });
    
        setFiltered(sortedData); // Update the filtered and sorted data
    }, [sortBy, sortOrder, data, startDate, endDate, minRev, maxRev, minIncome, maxIncome]);
    

    return (
        <div>
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
                    maxLabel={"Maximum Revenue"}
                />
                <NumRange
                    min={minIncome}
                    setMin={setMinIncome}
                    max={maxIncome}
                    setMax={setMaxIncome}
                    minLabel={"Minimum Income"}
                    maxLabel={"Maximum Income"}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <SortSelect
                            sortBy={sortBy} 
                            setSortBy={setSortBy} 
                            setSortOrder={setSortOrder} 
                            sortOrder={sortOrder} 
                            label="Date" 
                        />
                        <SortSelect 
                            sortBy={sortBy} 
                            setSortBy={setSortBy} 
                            setSortOrder={setSortOrder} 
                            sortOrder={sortOrder} 
                            label="Revenue" 
                        />
                        <SortSelect 
                            sortBy={sortBy} 
                            setSortBy={setSortBy} 
                            setSortOrder={setSortOrder} 
                            sortOrder={sortOrder} 
                            label="Net Income" 
                        />
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
        </div>
    );
}

export default Table;
