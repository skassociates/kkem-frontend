/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { files } from "@/services/api/fileupload";

interface Props {
  label: string;
  allowedFormats: string[]; // Array of allowed file formats (e.g., ["image/jpeg", "image/jpg", "application/pdf"])
  folderId: string;
}

const FileUpload: React.FC<Props> = ({ label, allowedFormats, folderId }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (allowedFormats.includes(file.type)) {
        if (file.size <= 5 * 1024 * 1024) {
          const uploadToast = toast.loading("Uploading your file....");
          const formData = new FormData();
          formData.append("file", file);
          formData.append("body", folderId);

          files
            .upload(formData)
            .then(() => {
              setFileName(file.name);
              toast.update(uploadToast, {
                render: "File uploaded successfully",
                type: "success",
                isLoading: false,
                autoClose: 1000,
              });
            })
            .catch((error: any) => {
              toast.update(uploadToast, {
                render: "Something went wrong",
                type: "error",
                isLoading: false,
              });
            });
        } else {
          toast.error(`File size exceeds the limit of 5 MB.`);
        }
      } else {
        toast.error(
          `Invalid file format. Please upload ${allowedFormats.join(
            ", "
          )} files.`
        );
      }
    }
  };

  return (
    <>
      <input
        type="file"
        name=""
        hidden
        id=""
        ref={fileRef}
        onChange={handleFileChange}
        accept={allowedFormats
          .map((format) => `.${format.split("/")[1]}`)
          .join(", ")}
      />

      <div className="mt-7 text-[#6F7482]">
        <div>{label}</div>
        <div
          className="h-[150px] w-full bg-white cursor-pointer rounded border-dashed border-2 flex flex-col justify-center items-center"
          onClick={() => {
            fileRef?.current?.click();
          }}
        >
          <img src="/Uploadicon.svg" alt="upload icon" />
          <div className="text-sm">
            Drag & drop files or{" "}
            <span className="text-[#3C83E3] underline">Browse</span>
          </div>
          <div className="text-xs text-[#676767]">
            Limit: 5 MB, select{" "}
            {allowedFormats.map((mimeType) => mimeType.split("/")[1]).join(" ")}{" "}
            format
          </div>
        </div>
        {fileName && (
          <div className="text-green-500">
            {fileName} - successfully uploaded
          </div>
        )}
      </div>
    </>
  );
};

export default FileUpload;
