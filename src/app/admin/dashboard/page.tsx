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
      <div className="bg-[#D3D1D2] py-12 ">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="text-3xl text-white"> Student Name</div>
            <div className="flex flex-row gap-16 mt-8">
              <div>
                <div className="text-slate-400">DWMS ID</div>
                <div className="text-white">123456</div>
                <div className="text-slate-400">Email ID</div>
                <div className="text-white">student@gmail.com</div>
              </div>
              <div>
                <div className="text-slate-400">Institution Name</div>
                <div className="text-white">Institution</div>
                <div className="text-slate-400">Institution Type</div>
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
      <div className="bg-[#DE4E4E] py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div className="text-[#003B89]">Curation Activities :</div>
              <Progressbar label="65%" max={6} value={3} />
            </div>
            <div className="w-1/2">
              <div className="text-[#003B89]">
                Industry Connect Activities :
                <Progressbar label="65%" max={4} value={3} />
              </div>
            </div>
            <div className="w-1/2 mt-5">
              <div className="text-[#003B89]">Placement Activities :</div>
              <Progressbar label="65%" max={3} value={3} />
            </div>
          </div>
          <div className="mt-8 flex flex-row">
            <div className="w-1/2 p-5">
              <div className="text-2xl font-semibold mb-4">Top 5 colleges</div>
              <table className="table-fixed rounded">
                <thead className="bg-[#5072A0] p-3">
                  <tr>
                    <th className="p-2">Song</th>
                    <th className="p-2">Artist</th>
                    <th className="p-2">Year</th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#5072A04D] [&>*:nth-child(even)]:bg-white">
                  <tr>
                    <td className="p-3">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-1/2 p-5 ">
              <div className="text-2xl font-semibold mb-4">Top Performers</div>
              <table className="table-fixed rounded">
                <thead className="bg-[#5072A0] p-3">
                  <tr>
                    <th className="p-2">Song</th>
                    <th className="p-2">Artist</th>
                    <th className="p-2">Year</th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#5072A04D] [&>*:nth-child(even)]:bg-white">
                  <tr>
                    <td className="p-3">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="p-3">Malcolm Lockyer</td>
                    <td className="p-3">1961</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
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
