// src/app/components/FileUploader/FileUploaderContainer.tsx
"use client";

import { useFilePreview } from "@/app/hooks/useFilePreview";
import FileUploader from "./FileUploader";

export default function FileUploaderContainer() {
  const { setFilePreview } = useFilePreview();

  return (
    <div>
      <FileUploader onFilePreview={setFilePreview} />
    </div>
  );
}
