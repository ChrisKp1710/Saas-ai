"use client";

import { useFilePreview } from "@/app/hooks/useFilePreview";

export default function FilePreview() {
    const filePreview = useFilePreview((state) => state.filePreview);
  
    if (!filePreview) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Carica un file per vedere l&apos;anteprima.</p>
        </div>
      );
    }
  
    return (
      <iframe
        src={filePreview}
        className="w-full h-full border-0"
        title="Anteprima File"
      />
    );
  }
  