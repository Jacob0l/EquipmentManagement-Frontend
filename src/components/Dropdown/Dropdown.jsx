import React from "react";

import { capitalize } from "../../utils/stringUtils";

export const Dropdown = ({ selectedCategory, categories, onSelect }) => {
    return (
        <select value={selectedCategory} onChange={(e) => onSelect(e.target.value)} >
            {categories.map((category) => (
                <option key={category} value={category}>
                    {capitalize(category)}
                </option>
            ))}
        </select>
    );
}
