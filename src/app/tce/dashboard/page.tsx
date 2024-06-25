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
  getTopCollegesTCE,
  getTopStudents,
  getTopStudentsTCE,
  getgetstudIns,
  getgetstudInstce,
} from "@/services/api/commonApi";
import { getStudents, getTCEColleges } from "@/services/api/tce";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";

export type Inst = {
  ENG_CLG: string[];
  POLY: string[];
  ARTS: string[];
};

function Dashboard() {
  const dialog = useRef<HTMLDialogElement>(null);

  const queryClient = new QueryClient();

  const [showDetails, setShowDetails] = useState<any>();
  const [topPerformers, setTopPerformers] = useState([]);
  const [allInstIds, setAllInstIds] = useState<Inst>({
    ENG_CLG: [],
    ARTS: [],
    POLY: [],
  });

  const [selectedInstitution, setSelectedInstitution] = useState<any>(null);
  const [selectedInsT, setSelectedInsT] = useState<any | null>(null);
  // const [showstu, setshowstu] = useState<any>(null);

  const [type, setType] = useState<"ENG_CLG" | "ARTS" | "POLY">("ENG_CLG");

  const closeModal = () => {
    dialog.current && dialog.current.close();
  };

  const showModal = () => {
    // dialog.current && dialog.current.showModal();
  };

  const { mutate, data: colData } = useMutation("pecCom", getgetstudInstce);

  const {
    data: tceData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery("repoData", getTCEColleges);
  const { data: tceStudents, refetch } = useQuery("tceStudents", getStudents, {
    enabled: false,
  });

  // const { data: topCol } = useQuery("collData", getTopColleges);
  // const { data: topStu } = useQuery("stuData", getTopStudents);
  //change to new api end Points add value is header
  const { data: topCol, refetch: refetchTopCol } = useQuery(
    ["collData", allInstIds[type]],
    () => getTopCollegesTCE(allInstIds[type]),
    { enabled: !!type }
  );

  const { data: topStu, refetch: refetchTopStu } = useQuery(
    ["stuData", allInstIds[type]],
    () => getTopStudentsTCE(allInstIds[type]),
    { enabled: !!type }
  );

  // useEffect(() => {
  //   if (tceData) {
  //     updateType(type);
  //   }
  // }, [tceData]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const insts = JSON.parse(localStorage.getItem("InstList") || "[]");
      setAllInstIds(insts?.insts);
      console.log(insts?.insts);
      refetchTopCol();
      refetchTopStu();
    }
  }, []);

  const updateType = (value: "ENG_CLG" | "ARTS" | "POLY") => {
    console.log("type", value);

    //call the api to uppdate the inst
    // var instL = getTypeNameAndArray(type).typeArray;
    // console.log("instL", instL);
    // setSelectedInsT(instL);
    setType(value);
    setSelectedInstitution(null);
    const list = tceData[value];
    setTopPerformers(list);
    // refetchTopCol();
    // refetchTopStu();
  };

  const showDetailsPage = (data: any) => {
    setShowDetails(data);
    refetch();
  };
  const handleLogout = (e: any) => {
    localStorage.clear();
  };
  const getTypeNameAndArray = (type: any) => {
    // Retrieve insts from localStorage
    if (typeof window !== "undefined") {
      var insts = JSON.parse(localStorage.getItem("InstList") || "[]");
    }
    let typeName;
    let typeArray;
    console.log(insts);

    switch (type) {
      case "ARTS":
        typeName = "Arts & Science";
        typeArray = insts?.insts?.ARTS;
        break;
      case "POLY":
        typeName = "Polytechnic";
        typeArray = insts?.insts?.POLY;
        break;
      default:
        typeName = "Engineering";
        typeArray = insts?.insts?.ENG_CLG;
    }
    return { typeName, typeArray };
  };

  return (
    <div className="min-h-screen bg-[#C22B20]">
      <div className="bg-white py-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <img src="/kkem_logo.png" alt="" />
          </div>
          <div onClick={handleLogout}>
            <Link href={"/tce/login"}>
              <div
                className="bg-[#3D3E98]  text-white rounded-[12px] w-[100px] h-[40px] p-2 mt-2 flex flex-row justify-around items-center gap-2"
                // onClick={handleLogout}
              >
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#C22B20] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="flex flex-row gap-16 mt-8 text-xs">
              <div>
                <div className="text-[#EEB850] ">Cluster Number</div>
                <div className="font-medium text-white">{"1"}</div>
                <div className="text-[#EEB850]  mt-2">District</div>
                <div className="font-medium text-white">
                  {"Thiruvananthapuram"}
                </div>
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
                  {getTypeNameAndArray(type).typeName}
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
                              <td className="p-3">
                                {Math.round(performers.iqScore)}
                              </td>
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
                        {topStu?.data?.map((performers: any, index: any) => {
                          return (
                            <tr key={index}>
                              <td className="p-3">{performers.score}</td>
                              <td className="p-3 capitalize">
                                {performers.STU_NAME.toLowerCase()}
                              </td>
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
                        {topPerformers
                          ?.sort((a: any, b: any) => b.iqScore - a.iqScore) // Sort by iqScore in descending order
                          .map((performers: any, index: any) => {
                            return (
                              <tr
                                key={index}
                                onClick={() => {
                                  setSelectedInstitution(performers);
                                  mutate(String(performers.INST_ID)); // Ensure the ID is a string
                                }}
                              >
                                <td className="p-3">
                                  {Math.round(performers.iqScore)}
                                </td>
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
                        Summary of {selectedInstitution?.INST_NAME}
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
                            {colData?.data.CA_COMP_P || 0}%
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
                            {colData?.data.ICA_COMP_P || 0}%
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
                            {colData?.data.PA_COMP_P || 0}%
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
