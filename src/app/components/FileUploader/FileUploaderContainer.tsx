// src/app/components/FileUploader/FileUploaderContainer.tsx
"use client";

import { useState } from "react";
import { useFilePreview } from "@/app/hooks/useFilePreview";
import FileUploader from "./FileUploader";

export default function FileUploaderContainer() {
  const { setFilePreview } = useFilePreview();
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string }[]>([]);

  const handleFileUpload = (fileUrl: string, fileName: string) => {
    setUploadedFiles((prevFiles) => [...prevFiles, { name: fileName, url: fileUrl }]);
    setFilePreview(fileUrl);
  };

  const handlePreviewClick = (fileUrl: string) => {
    setFilePreview(fileUrl);
  };

  return (
    <div>
      <FileUploader
        onFilePreview={(fileUrl, fileName) => handleFileUpload(fileUrl, fileName)}
      />
      <div className="mt-4 grid gap-4">
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition"
            onClick={() => handlePreviewClick(file.url)}
          >
            {/* Icona per il file */}
            <div className="mr-3 text-blue-500">
              {file.name.endsWith(".pdf") ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2M4 8s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2M4 12s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2"
                  />
                </svg>
              )}
            </div>
            {/* Nome del file */}
            <p className="text-gray-700 font-medium truncate">{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
