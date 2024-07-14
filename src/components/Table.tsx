import React, { useState } from "react";
import * as XLSX from "xlsx";

interface TableProps {
  data: Array<{ [key: string]: string | number | boolean }>;
  headersOrder?: string[];
  itemsPerPage?: number;
  fileName?: string;
}

const Table: React.FC<TableProps> = ({
  data,
  headersOrder,
  itemsPerPage = 10,
  fileName = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = headersOrder || Object.keys(data[0]);

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();

    const excelData = data.map((row) =>
      headers.reduce((acc, header) => {
        if (typeof row[header] === "boolean") {
          acc[header] = row[header] ? "Yes" : "No";
        } else {
          acc[header] = row[header];
        }
        return acc;
      }, {} as { [key: string]: string | number })
    );

    const worksheet = XLSX.utils.json_to_sheet(excelData, { header: headers });
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
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
          {currentData.map((row, index) => (
            <tr key={index} className="cursor-pointer">
              {headers.map((header) => (
                <td key={header} className="p-3">
                  {typeof row[header] === "boolean"
                    ? row[header]
                      ? "Yes"
                      : "No"
                    : row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <br />
      <button
        onClick={exportToExcel}
        className="mb-4 text-blue-500 hover:text-blue-700 underline bg-transparent border-none cursor-pointer transition duration-300 ease-in-out focus:outline-none"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default Table;
