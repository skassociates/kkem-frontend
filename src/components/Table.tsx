import React from "react";

const Table = () => {
  return (
    <table className="table-fixed rounded w-full">
      <thead className="bg-[#5D584E] p-3 text-white">
        <tr>
          <th className="p-2 text-left">Points</th>
          <th className="p-2 w-1/2 text-left">Students</th>
        </tr>
      </thead>
      <tbody className="[&>*:nth-child(odd)]:bg-[#c6c6c6] [&>*:nth-child(even)]:bg-white">
        <tr className="cursor-pointer">
          <td className="p-3">1</td>
          <td className="p-3">Malcolm Lockyer</td>
        </tr>
        <tr>
          <td className="p-3">1</td>
          <td className="p-3">Malcolm Lockyer</td>
        </tr>
        <tr>
          <td className="p-3">1</td>
          <td className="p-3">Malcolm Lockyer</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
