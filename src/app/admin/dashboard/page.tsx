import Progressbar from "@/components/Progressbar";
import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
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
      <div className="bg-[#D3D1D2] py-12  mx-auto">
        <div className="container max-w-[750px] mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="text-3xl"> Career Ambassador Name</div>
            <div className="flex flex-row gap-16 mt-8 text-xs">
              <div>
                <div className="text-slate-500 ">DWMS ID</div>
                <div className="font-medium">123456</div>
                <div className="text-slate-500  mt-2">Email ID</div>
                <div className="font-medium">student@gmail.com</div>
              </div>
              <div>
                <div className="text-slate-500">Institution Name</div>
                <div className="font-medium">Institution</div>
                <div className="text-slate-500  mt-2">Institution Type</div>
                <div className="font-medium">Institution Type</div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#FFC24A] w-[100px] h-[100px] rounded-xl shadow-2xl shadow-black flex justify-center items-center text-6xl font-semibold main-score">
              02
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#DE4E4E] py-12">
        <div className="container max-w-[750px] mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div className="text-white">
                Curation Activities <br />
                (Based on Submitted Responses) :
              </div>
              <Progressbar label="65%" max={4} value={2} color={"white"} />
            </div>
            <div className="w-1/2">
              <div className="text-white">
                Industry Connect & Placement Activities <br /> (Based on
                Submitted Responses) :
                <Progressbar label="65%" max={5} value={3} color={"white"} />
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-row gap-4">
            <div className="flex-1">
              <div className="text-2xl font-bold mb-4 text-white">
                Top 5 colleges
              </div>
              <table className="table-fixed rounded w-full">
                <thead className="bg-[#162B47] p-3 text-white">
                  <tr>
                    <th className="p-2 text-left">Rank</th>
                    <th className="p-2 w-1/2 text-left">Name of College</th>
                    <th className="p-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#c0d2e9ed] [&>*:nth-child(even)]:bg-white">
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
              <div className="text-2xl font-bold mb-4 text-white">
                Top Performers
              </div>
              <table className="table-fixed rounded">
                <thead className="bg-[#162B47] p-3 text-white">
                  <tr>
                    <th className="p-2 text-left">Rank</th>
                    <th className="p-2 w-1/2 text-left">Name</th>
                    <th className="p-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#c0d2e9ed] [&>*:nth-child(even)]:bg-white">
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
      <div className="bg-[#D3D1D2] py-12">
        <div className="container mx-auto max-w-[750px] text-right">
          <div
            className="flex flex-col gap-4 text-[#162B47]
"
          >
            <a href="#" className="underline">
              Click this link to access Student Form
            </a>
            <a href="#" className="underline">
              Click this link to access Student Form
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
