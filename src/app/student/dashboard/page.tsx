import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#003B89]">
      <div className="bg-[#003B89] py-12 ">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="text-2xl text-white"> Student Name</div>
            <div className="flex flex-row gap-8 mt-8">
              <div>
                <div>DWMS ID</div>
                <div>123456</div>
                <div>Email ID</div>
                <div>student@gmail.com</div>
              </div>
              <div>
                <div>Institution Name</div>
                <div>Institution</div>
                <div>Institution Type</div>
                <div>Institution Type</div>
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
      <div className="bg-[#7CBDD0] py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div className="text-[#003B89]">Curation Activities :</div>
            </div>
            <div className="w-1/2">
              <div className="text-[#003B89]">
                Industry Connect Activities :
              </div>
            </div>
            <div className="w-1/2 mt-5">
              <div className="text-[#003B89]">Placement Activities :</div>
            </div>
          </div>
          <div className="mt-8 flex flex-row">
            <div className="w-1/2 p-5">
              <table className="table-fixed bg-white">
                <thead className="bg-[#5072A0] p-3">
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-1/2 p-5">
              <table className="table-fixed bg-white">
                <thead className="bg-[#5072A0] p-3">
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#003B89] py-12">
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
