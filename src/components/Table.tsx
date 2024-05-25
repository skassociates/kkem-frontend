import React from "react";

const Table = ({ data, headersOrder }) => {
  // Check if data is available and not empty

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
  const headers = headersOrder || Object.keys(data[0]);

  return (
    <table className="rounded w-full">
      <thead className="bg-[#5D584E] p-3 text-white">
        <tr>
          {headers.map((header) => (
            <th key={header} className="p-2 text-left">
              {header.charAt(0).toUpperCase() + header.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&>*:nth-child(odd)]:bg-[#c6c6c6] [&>*:nth-child(even)]:bg-white">
        {data.map((row, index) => (
          <tr key={index} className="cursor-pointer">
            {headers.map((header) => (
              <td key={header} className="p-3">
                {typeof row[header] === "boolean"
                  ? row[header]
                    ? "Yes"
                    : "No"
                  : row[header]}{" "}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
