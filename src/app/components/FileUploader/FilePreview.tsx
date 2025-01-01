"use client";

import { useFilePreview } from "@/app/hooks/useFilePreview";

export default function FilePreview() {
  const filePreview = useFilePreview((state) => state.filePreview);

  if (!filePreview) {
    return <p className="text-gray-500">Carica un file per vedere l&apos;anteprima.</p>;
  }

  return (
    <iframe
      src={filePreview}
      className="w-full h-[600px] border border-gray-300 rounded"
      title="Anteprima File"
    />
  );
}
