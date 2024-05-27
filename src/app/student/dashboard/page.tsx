"use client";
import Progressbar from "@/components/Progressbar";
import { getTopColleges, getTopStudents } from "@/services/api/commonApi";
import { form } from "@/services/api/form";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";
import { toast } from "react-toastify";

function Dashboard() {
  const queryClient = new QueryClient();

  const [studentDashboard, setStudentDashboard] = useState({
    STU_NAME: "",
    CA_PRCNT: 0,
    ICA_PRCNT: 0,
    PA_PRCNT: 0,
    score: 0,
    instScore: "",
    DWMS_ID: "",
    EMAIL_ID: "",
    INST_NAME: "",
    INST_TYPE: "",
  });
  // const [topColl, setTopColl] = useState([]);

  const { data } = useQuery("collData", getTopColleges);

  const { data: topStu } = useQuery("stuData", getTopStudents);

  const fetchdata = async () => {
    const get = toast.loading("Fetching Your Details....");
    form
      .getStudentDashboard()
      .then((response) => {
        toast.update(get, {
          render: "Done",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        setStudentDashboard(response.data.student);
      })
      .catch((error) => {
        console.log(error);
        toast.update(get, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  const percentage = Math.round((studentDashboard.CA_PRCNT / 7) * 100);
  const IPApercentage = Math.round((studentDashboard.ICA_PRCNT / 3) * 100);
  const PApercentage = Math.round((studentDashboard.PA_PRCNT / 6) * 100);

  return (
    <div className="min-h-screen bg-[#003B89]">
      <div className="bg-white py-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <img src="/kkem_logo.png" alt="" />
          </div>
          <div>
            <Link href={"/student/login"}>
              <div className="bg-[#3D3E98]  text-white rounded-[12px] w-[100px] h-[40px] p-2 mt-2 flex flex-row justify-around items-center gap-2">
                LogOut
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#003B89] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="text-3xl text-white">
              {" "}
              {studentDashboard.STU_NAME}
            </div>
            <div className="flex flex-row gap-16 mt-8 text-xs">
              <div>
                <div className="text-slate-400">DWMS ID</div>
                <div className="text-white">{studentDashboard.DWMS_ID}</div>
                <div className="text-slate-400 mt-2">Email ID</div>
                <div className="text-white">{studentDashboard.EMAIL_ID}</div>
              </div>
              <div>
                <div className="text-slate-400">Institution Name</div>
                <div className="text-white">{studentDashboard.INST_NAME}</div>
                <div className="text-slate-400 mt-2">Institution Type</div>
                <div className="text-white">{studentDashboard.INST_TYPE}</div>
              </div>
            </div>
          </div>
          <div>
            <div className=" main-score bg-[#FFC24A] w-[150px] h-[100px] rounded-xl shadow-2xl shadow-black flex justify-center items-center text-6xl font-semibold">
              {studentDashboard.score}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7CBDD0] py-12 ">
        <div className="container mx-auto max-w-[750px] ">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div className="text-[#003B89]">Curation Activities :</div>
              <Progressbar
                label={`${percentage}%`}
                max={7}
                value={studentDashboard.CA_PRCNT}
                color="blue"
              />
            </div>
            <div className="w-1/2">
              <div className="text-[#003B89]">
                Industry Connect Activities :
                <Progressbar
                  // label="65%"
                  label={`${IPApercentage}%`}
                  max={3}
                  value={studentDashboard.ICA_PRCNT}
                  color="blue"
                />
              </div>
            </div>
            <div className="w-1/2 mt-5">
              <div className="text-[#003B89]">Placement Activities :</div>
              <Progressbar
                label={`${PApercentage}%`}
                max={6}
                value={studentDashboard.PA_PRCNT}
                color="blue"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-row gap-12">
            <div className="flex-grow-2">
              <div className="text-2xl font-bold mb-4">Top 5 colleges</div>
              <table className="table-fixed rounded w-full">
                <thead className="bg-[#5072A0] p-3 text-white">
                  <tr>
                    <th className="p-2 w-1/6 text-left">Rank</th>
                    <th className="p-2 w-1/2 text-left">Name of College</th>
                    <th className="p-2 w-1/6 text-left">Points</th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#5072A04D] [&>*:nth-child(even)]:bg-white">
                  {data?.data?.map((performers: any, index: any) => {
                    return (
                      <tr key={index}>
                        <td className="p-3">{index + 1}</td>
                        <td className="p-3">{performers.INST_NAME}</td>
                        <td className="p-3">{performers.TOT_STR}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex-grow-2">
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
                  {topStu?.map((performers: any, index: any) => {
                    return (
                      <tr key={index}>
                        <td className="p-3">{index + 1}</td>
                        <td className="p-3">{performers.STU_NAME}</td>
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
      <div className="bg-[#003B89] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto text-right">
          <a href="/student/instructions" className="underline text-white">
            Click this link to access Student Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
