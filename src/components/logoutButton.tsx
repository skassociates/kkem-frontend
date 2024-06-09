import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear all session storage
    console.log("here");

    sessionStorage.clear();

    // Clear all local storage
    localStorage.clear();

    // Navigate to the login page
    router.push("/student/login");
  };

  return (
    <div onClick={handleLogout}>
      <div className="bg-[#3D3E98] text-white rounded-[12px] w-[100px] h-[40px] p-2 mt-2 flex flex-row justify-around items-center gap-2 cursor-pointer">
        Logout
      </div>
    </div>
  );
};

export default LogoutButton;
