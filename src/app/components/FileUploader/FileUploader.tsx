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
    <div className="text-center">
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
      >
        Carica un File
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".pdf,.doc,.docx,.txt,.md"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
