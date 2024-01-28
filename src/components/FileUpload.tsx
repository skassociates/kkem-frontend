/* eslint-disable @next/next/no-img-element */
import { files } from "@/services/api/fileupload";
import React, { useRef } from "react";
import { toast } from "react-toastify";

interface Props {
  label: string;
}
const FileUpload: React.FC<Props> = ({ label }) => {
  const fileRef: any = useRef(null);
  return (
    <>
      <input
        type="file"
        name=""
        hidden
        id=""
        ref={fileRef}
        onChange={(e: any) => {
          const get = toast.loading("Uploading your file....");
          e.preventDefault();
          let formData = new FormData();
          formData.append("file", e.target.files[0]);

          files
            .upload(formData)
            .then((response) => {
              toast.update(get, {
                render: "File uploaded successfully",
                type: "success",
                isLoading: false,
                autoClose: 1000,
              });
            })
            .catch((error: any) => {
              toast.update(get, {
                render: "Something went wrong",
                type: "error",
                isLoading: false,
              });
            });
        }}
      />

      <div className="mt-7 text-[#6F7482]">
        <div>{label}</div>
        <div
          className="h-[150px] w-full bg-white cursor-pointer rounded border-dashed border-2 flex flex-col justify-center items-center"
          onClick={() => {
            fileRef?.current.click();
          }}
        >
          <img src="/Uploadicon.svg" alt="upload icon" />
          <div className="text-sm">
            Drag & drop files or{" "}
            <span className="text-[#3C83E3] underline">Browse</span>
          </div>
          <div className="text-xs text-[#676767]">
            Limit: 1 MB, jpg/jpeg format
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
