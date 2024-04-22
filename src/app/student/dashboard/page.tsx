import Progressbar from "@/components/Progressbar";
import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#003B89]">
      <div className="bg-white py-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <img src="/kkem_logo.png" alt="" />
          </div>
          <div>
            <div className="text-[#003B89CC] text-2xl font-semibold">
              Student
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#003B89] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="text-3xl text-white"> Student Name</div>
            <div className="flex flex-row gap-16 mt-8 text-xs">
              <div>
                <div className="text-slate-400">DWMS ID</div>
                <div className="text-white">123456</div>
                <div className="text-slate-400 mt-2">Email ID</div>
                <div className="text-white">student@gmail.com</div>
              </div>
              <div>
                <div className="text-slate-400">Institution Name</div>
                <div className="text-white">Institution</div>
                <div className="text-slate-400 mt-2">Institution Type</div>
                <div className="text-white">Institution Type</div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#FFC24A] w-[100px] h-[100px] rounded-xl shadow-2xl shadow-black flex justify-center items-center text-6xl font-semibold">
              02
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7CBDD0] py-12 ">
        <div className="container mx-auto max-w-[750px] ">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div className="text-[#003B89]">Curation Activities :</div>
              <Progressbar label="65%" max={7} value={3} color="blue" />
            </div>
            <div className="w-1/2">
              <div className="text-[#003B89]">
                Industry Connect Activities :
                <Progressbar label="65%" max={3} value={2} color="blue" />
              </div>
            </div>
            <div className="w-1/2 mt-5">
              <div className="text-[#003B89]">Placement Activities :</div>
              <Progressbar label="65%" max={6} value={3} color="blue" />
            </div>
          </div>
          <div className="mt-8 flex flex-row gap-4">
            <div className="flex-1">
              <div className="text-2xl font-bold mb-4">Top 5 colleges</div>
              <table className="table-fixed rounded w-full">
                <thead className="bg-[#5072A0] p-3 text-white">
                  <tr>
                    <th className="p-2 text-left">Rank</th>
                    <th className="p-2 w-1/2 text-left">Name of College</th>
                    <th className="p-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#5072A04D] [&>*:nth-child(even)]:bg-white">
                  <tr>
                    <td className="p-3">1</td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">1</td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">1</td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold mb-4">Top Performers</div>
              <table className="table-fixed rounded">
                <thead className="bg-[#5072A0] p-3 text-white">
                  <tr>
                    <th className="p-2 text-left">Rank</th>
                    <th className="p-2 w-1/2 text-left">Name</th>
                    <th className="p-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#5072A04D] [&>*:nth-child(even)]:bg-white">
                  <tr>
                    <td className="p-3">1</td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">1</td>
                    <td className="p-3">Malcolm Lockyer asdf asfd sdfsa</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">1</td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#003B89] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto text-right">
          <a href="#" className="underline text-white">
            Click this link to access Student Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
