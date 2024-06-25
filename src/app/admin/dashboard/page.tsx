"use client";

import Progressbar from "@/components/Progressbar";
import { getTopColleges, getTopStudents } from "@/services/api/commonApi";
import { getCAdash } from "@/services/api/form";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";

function Dashboard() {
  const queryClient = new QueryClient();

  const { data } = useQuery("caData", getCAdash);
  const [instTypeLoaded, setInstTypeLoaded] = useState(false);

  // localStorage.setItem("INST_TYPE", data?.data.data.INST_TYPE);

  useEffect(() => {
    // Check if caData is available before setting INST_TYPE
    if (data?.data?.data?.INST_TYPE) {
      localStorage.setItem("INST_TYPE", data.data.data.INST_TYPE);
      setInstTypeLoaded(true);
    }
  }, [data]);
  const handleLogout = (e: any) => {
    localStorage.clear();
    setInstTypeLoaded(false);
  };
  // const { data: topCol } = useQuery("collData", getTopColleges);
  const { data: topCol, isLoading: collLoading } = useQuery(
    "collData",
    getTopColleges,
    { enabled: instTypeLoaded }
  );

  // const { data: topStu } = useQuery("stuData", getTopStudents);
  const { data: topStu, isLoading: stuLoading } = useQuery(
    "stuData",
    getTopStudents,
    { enabled: instTypeLoaded }
  );
  const percentage = isNaN(Math.round((data?.data.data.CA_PRCNT / 4) * 100))
    ? 0
    : Math.round((data?.data.data.CA_PRCNT / 4) * 100);
  const IPApercentage = isNaN(Math.round((data?.data.data.ICA_PRCNT / 5) * 100))
    ? 0
    : Math.round((data?.data.data.ICA_PRCNT / 5) * 100);
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="bg-white py-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <img src="/kkem_logo.png" alt="" />
          </div>
          <div onClick={handleLogout}>
            <Link href={"/admin/login"}>
              <div
                className="bg-[#3D3E98]  text-white rounded-[12px] w-[100px] h-[40px] p-2 mt-2 flex flex-row justify-around items-center gap-2"
                // onClick={handleLogout}
              >
                Logout
              </div>
            </Link>
            {/* <LogoutButton /> */}
          </div>
        </div>
      </div>
      <div className="bg-[#D3D1D2] py-12  mx-auto">
        <div className="container max-w-[750px] mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="text-3xl">{data?.data.data.CA_NAME}</div>
            <div className="flex flex-row gap-16 mt-8 text-xs">
              <div>
                <div className="text-slate-500 ">DWMS ID</div>
                <div className="font-medium">{data?.data.data.DWMS_ID}</div>
                <div className="text-slate-500  mt-2">Email ID</div>
                <div className="font-medium">{data?.data.data.EMAIL_ID}</div>
              </div>
              <div>
                <div className="text-slate-500">Institution Name</div>
                <div className="font-medium">{data?.data.data.INST_NAME}</div>
                <div className="text-slate-500  mt-2">Institution Type</div>
                <div className="font-medium">{data?.data.data.INST_TYPE}</div>
              </div>
            </div>
          </div>
          <div>
            <div className=" main-score bg-[#FFC24A] w-[150px] h-[100px] rounded-xl shadow-2xl shadow-black flex justify-center items-center text-6xl font-semibold">
              {data?.data.data.score}
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
              {/* <Progressbar label="65%" max={4} value={2} color={"white"} /> */}
              <Progressbar
                label={`${percentage}%`}
                max={4}
                value={data?.data.data.CA_PRCNT}
                color="white"
              />
            </div>
            <div className="w-1/2">
              <div className="text-white">
                Industry Connect & Placement Activities <br /> (Based on
                Submitted Responses) :
                {/* <Progressbar label="65%" max={5} value={3} color={"white"} /> */}
                <Progressbar
                  label={`${IPApercentage}%`}
                  max={5}
                  value={data?.data.data.ICA_PRCNT}
                  color="white"
                />
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
                  {collLoading && (
                    <tr>
                      <td colSpan={3}> Loading...</td>{" "}
                    </tr>
                  )}
                  {!collLoading &&
                    topCol?.data?.map((performers: any, index: any) => {
                      return (
                        <tr key={index}>
                          <td className="p-3">{index + 1}</td>
                          <td className="p-3">{performers.INST_NAME}</td>
                          <td className="p-3">{performers.score}</td>
                        </tr>
                      );
                    })}
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
                  {stuLoading && (
                    <tr>
                      <td colSpan={3}> Loading...</td>{" "}
                    </tr>
                  )}
                  {!stuLoading &&
                    topStu?.data.map((performers: any, index: any) => {
                      return (
                        <tr key={index}>
                          <td className="p-3">{index + 1}</td>
                          <td className="p-3 capitalize">
                            {performers.STU_NAME.toLowerCase()}
                          </td>
                          <td className="p-3">{performers.score}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D3D1D2] py-12">
        <div className="container mx-auto max-w-[750px] text-right">
          <div className="flex flex-col gap-4 text-[#162B47]">
            <a href="/admin/instructions" className="underline">
              Click this link to access Entry Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
