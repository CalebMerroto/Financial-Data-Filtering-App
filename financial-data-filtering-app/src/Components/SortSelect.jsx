// src/Components/SortSelect.jsx
import React, { useEffect, useState } from "react";
import "./SortSelect.css"

function SortSelect({ sortBy, setSortBy, sortOrder, setSortOrder, label }) {
    const [arrow, setArrow] = useState(" -");

    const handleClick = () => {
        if (sortBy === label) {
            // Toggle sort order if the same column is clicked
            const newOrder = sortOrder === "ascending" ? "descending" : "ascending";
            setSortOrder(newOrder);
            setArrow(newOrder === "ascending" ? " 🔼" : " 🔽");
        } else {
            // Set sorting to this column in ascending order
            setSortBy(label);
            setSortOrder("ascending");
            setArrow(" 🔼");
        }
    };

    useEffect(() => {
        // Reset arrow if another column is selected
        if (sortBy !== label) {
            setArrow(" -");
        }
    }, [sortBy, label]);

    return (
        <th onClick={handleClick} className="sort-select">
            <span>{label}</span>
            {arrow}
        </th>
    );
}

export default SortSelect;
