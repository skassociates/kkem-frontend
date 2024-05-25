"use client";

import ProgressIndicator from "@/components/ProgressIndicator";
import Progressbar from "@/components/Progressbar";
import Table from "@/components/Table";
import {
  CA_header_order,
  ICA_header_order,
  PA_header_order,
} from "@/schema/student";
import {
  getTopColleges,
  getTopStudents,
  getgetstudIns,
} from "@/services/api/commonApi";
import { getStudents, getTCEColleges } from "@/services/api/tce";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";

function Dashboard() {
  const dialog = React.useRef();

  const queryClient = new QueryClient();

  const [showDetails, setShowDetails] = useState<any>();
  const [topPerformers, setTopPerformers] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  // const [showstu, setshowstu] = useState<any>(null);

  const [type, setType] = useState("ENG_CLG");

  const closeModal = () => {
    dialog.current && dialog.current.close();
  };

  const showModal = () => {
    // dialog.current && dialog.current.showModal();
  };

  const { mutate, data: colData } = useMutation("pecCom", getgetstudIns);

  const { data, isLoading, isError, isSuccess } = useQuery(
    "repoData",
    getTCEColleges
  );
  const { data: tceStudents, refetch } = useQuery("tceStudents", getStudents, {
    enabled: false,
  });

  const { data: topCol } = useQuery("collData", getTopColleges);

  const { data: topStu } = useQuery("stuData", getTopStudents);
  useEffect(() => {
    if (data) {
      updateType(type);
    }
  }, [data]);

  const updateType = (value: string) => {
    setType(value);
    setSelectedInstitution(null);
    const list = data[value];
    setTopPerformers(list);
  };

  const showDetailsPage = (data: any) => {
    // console.log("sda", data);

    setShowDetails(data);
    refetch();
  };

  return (
    <div className="min-h-screen bg-[#C22B20]">
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
      <div className="bg-[#C22B20] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="flex flex-row gap-16 mt-8 text-xs">
              <div>
                <div className="text-[#EEB850] ">Cluster Number</div>
                <div className="font-medium text-white">123456</div>
                <div className="text-[#EEB850]  mt-2">District</div>
                <div className="font-medium text-white">student@gmail.com</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-[#EEB850] py-12 ">
        {!showDetails && (
          <div className="container mx-auto max-w-[750px] ">
            <div className="border border-[#996F1F]">
              <div className="w-full border-b border-[#996F1F] flex items-center cursor-pointer">
                <span
                  className={`px-3 py-2 ${
                    type == "ENG_CLG" ? "active-tab" : ""
                  }`}
                  onClick={() => updateType("ENG_CLG")}
                >
                  Engineering
                </span>
                <span
                  className={`px-3 py-2 ${type == "POLY" ? "active-tab" : ""}`}
                  onClick={() => updateType("POLY")}
                >
                  Polytechnic
                </span>
                <span
                  className={`px-3 py-2 ${type == "ARTS" ? "active-tab" : ""}`}
                  onClick={() => updateType("ARTS")}
                >
                  Arts & Science
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-[#6F4F12] text-2xl border-b border-[#6F4F12] pb-3">
                  Engineering
                </h4>
                <div className="mt-8 flex flex-row gap-8">
                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-4 text-[#6F4F12]">
                      Top Scorers
                    </div>
                    <table className="table-fixed rounded w-full">
                      <thead className="bg-[#C22B20] p-3 text-white">
                        <tr>
                          <th className="p-2 w-1/4 text-left">Rank</th>
                          <th className="p-2 w-3/4 text-left">Institute</th>
                        </tr>
                      </thead>
                      <tbody className="[&>*:nth-child(odd)]:bg-[#c6c6c6] [&>*:nth-child(even)]:bg-white">
                        {topCol?.data?.map((performers: any, index: any) => {
                          return (
                            <tr key={index}>
                              <td className="p-3">{index + 1}</td>
                              <td className="p-3">{performers.INST_NAME}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-4 text-[#6F4F12]">
                      Top Performers
                    </div>
                    <table className="table-fixed rounded w-full">
                      <thead className="bg-[#C22B20] p-3 text-white">
                        <tr>
                          <th className="p-2 w-1/4 text-left">Points</th>
                          <th className="p-2 w-3/4 text-left">Students</th>
                        </tr>
                      </thead>
                      <tbody className="[&>*:nth-child(odd)]:bg-[#c6c6c6] [&>*:nth-child(even)]:bg-white">
                        {topStu?.map((performers: any, index: any) => {
                          return (
                            <tr key={index}>
                              <td className="p-3">{performers.score}</td>
                              <td className="p-3">{performers.STU_NAME}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <h4 className="text-[#6F4F12] text-2xl mt-4 border-b border-[#6F4F12] pb-3">
                  List of Institutions
                </h4>
                <div className="mt-8 flex flex-row gap-8">
                  <div className=" w-1/2">
                    <table className="table-fixed rounded w-full">
                      <thead className="bg-[#C22B20] p-3 text-white">
                        <tr>
                          <th className="p-2 w-1/4 text-left">Points</th>
                          <th className="p-2 w-3/4 text-left">Institutes</th>
                        </tr>
                      </thead>
                      <tbody className="[&>*:nth-child(odd)]:bg-[#c6c6c6] [&>*:nth-child(even)]:bg-white">
                        {topPerformers?.map((performers: any, index: any) => {
                          return (
                            <tr
                              key={index}
                              onClick={() => {
                                setSelectedInstitution(performers);
                                mutate(performers.INST_ID);
                              }}
                            >
                              <td className="p-3">{index + 1}</td>
                              <td className="p-3">{performers.INST_NAME}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {selectedInstitution && (
                    <div className="w-1/2">
                      <div className="text-2xl mb-4 text-[#6F4F12]">
                        Summary of {selectedInstitution.INST_NAME}
                      </div>
                      <div className="flex flex-col gap-6">
                        <div
                          onClick={() =>
                            showDetailsPage({
                              PRCNT: colData?.data.CA_COMP_P,
                              studs: colData?.data.CA_students,
                              string: "Curation Activities",
                              headers: CA_header_order,
                            })
                          }
                          className="py-6 px-3 flex gap-6 border-2 border-white text-white bg-[#967D4E]"
                        >
                          <h2 className=" text-4xl font-bold">
                            {colData?.data.CA_COMP_P}%
                          </h2>
                          <p className="text-sm">
                            of students have completed Curation Activities
                          </p>
                        </div>
                        <div
                          onClick={() =>
                            showDetailsPage({
                              PRCNT: colData?.data.ICA_COMP_P,
                              studs: colData?.data.ICA_students,
                              string: "Industry Connect Activities",
                              headers: ICA_header_order,
                            })
                          }
                          className="py-6 px-3 flex gap-6 border-2 border-white text-white bg-[#967D4E]"
                        >
                          <h2 className=" text-4xl font-bold">
                            {colData?.data.ICA_COMP_P}%
                          </h2>
                          <p className="text-sm">
                            of students have completed Industry Connect
                            Activities
                          </p>
                        </div>
                        <div
                          onClick={() =>
                            showDetailsPage({
                              PRCNT: colData?.data.PA_COMP_P,
                              studs: colData?.data.PA_students,
                              string: "Industry Connect Activities",
                              headers: PA_header_order,
                            })
                          }
                          className="py-6 px-3 flex gap-6 border-2 border-white text-white bg-[#967D4E]"
                        >
                          <h2 className=" text-4xl font-bold">
                            {colData?.data.PA_COMP_P}%
                          </h2>
                          <p className="text-sm">
                            of students have completed Placement Activities
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {showDetails && (
          <div className="container mx-auto max-w-max ">
            <div className="flex w-full justify-between items-center">
              <p className="text-lg text-white">
                <span className="font-semibold">{showDetails.PRCNT}%</span> of
                students have completed {showDetails.string}
              </p>
              <div
                onClick={() => setShowDetails(false)}
                className="rounded-full px-6 py-3 flex items-center gap-2 mb-4 bg-[#B4A48A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>

                <span className="text-white">Back</span>
              </div>
            </div>
            <Table
              data={showDetails.studs}
              headersOrder={showDetails.headers}
            />
          </div>
        )}
      </div>
      <div className="bg-[#C22B20] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto text-right">
          <a href="#" className="underline text-[#6E6350]">
            Click this link to access Institution Form
          </a>
        </div>
      </div>

      <dialog className="dialog bg-gray-100" ref={dialog}>
        <div className="p-6">
          <div className="flex justify-between mb-3">
            <span>Students</span>{" "}
            <Image
              onClick={() => closeModal()}
              src={require("../../../../public/close.svg")}
              alt="close"
              className="cursor-pointer"
            ></Image>
          </div>
          <table className="table-fixed border-collapse border border-slate-500 px-2 py-1 text-xs">
            <thead>
              <tr className="text-gray-500">
                <th className="border border-slate-600 font-normal px-2 py-1">
                  Name
                </th>
                <th className="border border-slate-600 font-normal px-2 py-1">
                  Institution
                </th>
                <th className="border border-slate-600 font-normal px-2 py-1">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 px-2 py-1">Indiana</td>
                <td className="border border-slate-700 px-2 py-1">
                  Indianapolis
                </td>{" "}
                <td className="border border-slate-700 px-2 py-1">
                  Indianapolis
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dialog>
    </div>
  );
}

export default Dashboard;
