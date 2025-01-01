// src/app/components/FileUploader/FileUploader.tsx
"use client";

interface FileUploaderProps {
  onFilePreview: (filePreview: string | null) => void;
}

export default function FileUploader({ onFilePreview }: FileUploaderProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      onFilePreview(fileUrl);
    }
  };

  return (
    <div>
      <h2 className="file-uploader-title">Carica un File</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt,.md"
        onChange={handleFileUpload}
        className="file-input"
      />
    </div>
  );
}
