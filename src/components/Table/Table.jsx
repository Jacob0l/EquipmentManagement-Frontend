import React from "react";

import { capitalize } from "../../utils/stringUtils";

import './Table.css'

export const Table = ({ data, sortBy, sortOrder, onSort }) => {

    const rows = Array.isArray(data) ? data : [data];
    const headers = rows.length > 0 ? Object.keys(rows[0]) : [];

    return (
        <table >
            <thead >
                <tr>
                    {headers.map((header) => (
                        <th key={header}>
                            <button
                            type="button"
                            onClick={(e) => onSort(header)}
                            className="header-btn">
                                {capitalize(header)}
                                {sortBy === header ? (sortOrder === "ASC" ? "▲" : "▼") : "⇅"}
                            </button>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header) => (
                            <td key={header}>
                                {row[header]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
