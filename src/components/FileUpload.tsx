/* eslint-disable @next/next/no-img-element */
import { files } from "@/services/api/fileupload";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

interface Props {
  label: string;
}
const FileUpload: React.FC<Props> = ({ label }) => {
  const fileTypes = ["JPG", "PNG"];
  const [datafile, setFile] = useState(null);

  const handleChange = async (data: any) => {
    files
      .upload(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  console.log({ datafile });
  return (
    <>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
        <div className="mt-7 text-[#6F7482]">
          <div>{label}</div>
          <div className="h-[150px] w-full bg-white cursor-pointer rounded border-dashed border-2 flex flex-col justify-center items-center">
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
      </FileUploader>
    </>
  );
};

export default FileUpload;
