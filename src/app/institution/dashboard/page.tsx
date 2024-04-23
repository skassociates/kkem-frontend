"use client";

import ProgressIndicator from "@/components/ProgressIndicator";
import Progressbar from "@/components/Progressbar";
import Table from "@/components/Table";
import Image from "next/image";
import React, { useState } from "react";

function Dashboard() {
  const dialog = React.useRef();

  const [showDetails, setShowDetails] = useState(false);

  const closeModal = () => {
    dialog.current && dialog.current.close();
  };

  const showModal = () => {
    dialog.current && dialog.current.showModal();
  };

  return (
    <div className="min-h-screen bg-[#C8BD6D]">
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
      <div className="bg-[#C8BD6D] py-12 max-w-[750px] mx-auto">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div>
            <div className="text-3xl text-white">Institution Name</div>
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
            <div className="bg-[#FFC24A] w-[100px] h-[100px] rounded-xl shadow-2xl shadow-black flex justify-center items-center text-6xl font-semibold">
              02
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6E6350] py-12 ">
        {!showDetails && (
          <div className="container mx-auto max-w-[750px] ">
            <div className="flex flex-wrap">
              {" "}
              <div className="w-1/2">
                <div className="text-white">Progress of Activities :</div>
                <ProgressIndicator width={70} />
              </div>
            </div>
            <div className="mt-8 flex flex-row gap-8">
              <div className="flex-1">
                <div className="text-2xl font-bold mb-4 text-white">
                  Top Scorers
                </div>
                <table className="table-fixed rounded w-full">
                  <thead className="bg-[#5D584E] p-3 text-white">
                    <tr>
                      <th className="p-2 text-left">Points</th>
                      <th className="p-2 w-1/2 text-left">Students</th>
                    </tr>
                  </thead>
                  <tbody className="[&>*:nth-child(odd)]:bg-[#c6c6c6] [&>*:nth-child(even)]:bg-white">
                    <tr onClick={() => showModal()} className="cursor-pointer">
                      <td className="p-3">1</td>
                      <td className="p-3">Malcolm Lockyer</td>
                    </tr>
                    <tr onClick={() => showModal()}>
                      <td className="p-3">1</td>
                      <td className="p-3">Malcolm Lockyer</td>
                    </tr>
                    <tr onClick={() => showModal()}>
                      <td className="p-3">1</td>
                      <td className="p-3">Malcolm Lockyer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold mb-4 text-transparent">
                  Details
                </div>
                <div className="flex flex-col gap-6">
                  <div
                    onClick={() => setShowDetails(true)}
                    className="py-6 px-3 flex gap-6 border-2 border-white text-white"
                  >
                    <h2 className=" text-4xl font-bold">10%</h2>
                    <p className="text-sm">
                      of students have completed Curation Activities
                    </p>
                  </div>
                  <div
                    onClick={() => setShowDetails(true)}
                    className="py-6 px-3 flex gap-6 border-2 border-white text-white"
                  >
                    <h2 className=" text-4xl font-bold">10%</h2>
                    <p className="text-sm">
                      of students have completed Curation Activities
                    </p>
                  </div>{" "}
                  <div
                    onClick={() => setShowDetails(true)}
                    className="py-6 px-3 flex gap-6 border-2 border-white text-white"
                  >
                    <h2 className=" text-4xl font-bold">10%</h2>
                    <p className="text-sm">
                      of students have completed Curation Activities
                    </p>
                  </div>{" "}
                  <div
                    onClick={() => setShowDetails(true)}
                    className="py-6 px-3 flex gap-6 border-2 border-white text-white"
                  >
                    <h2 className=" text-4xl font-bold">10%</h2>
                    <p className="text-sm">
                      of students have completed Curation Activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showDetails && (
          <div className="container mx-auto max-w-[750px] ">
            <div className="flex w-full justify-between items-center">
              <p className="text-lg text-white">
                <span className="font-semibold">10%</span> of students have
                completed Curation Activities
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
            <Table />
          </div>
        )}
      </div>
      <div className="bg-[#C8BD6D] py-12 max-w-[750px] mx-auto">
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
