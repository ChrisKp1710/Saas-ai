import { create } from "zustand";

interface FilePreviewState {
  filePreview: string | null;
  setFilePreview: (filePreview: string | null) => void;
}

export const useFilePreview = create<FilePreviewState>((set) => ({
  filePreview: null,
  setFilePreview: (filePreview) => set(() => ({ filePreview })),
}));
