// src/app/page.tsx
import { FileUploaderContainer } from "@/app/components";
import FilePreview from "@/app/components/FileUploader/FilePreview";

export default function HomePage() {
  return (
    <div className="flex h-screen">
      {/* Colonna sinistra */}
      <aside className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
        <FileUploaderContainer />
      </aside>

      {/* Colonna centrale (Anteprima File) */}
      <main className="flex-1 bg-white p-4">
        <h3 className="text-lg font-bold mb-4">Anteprima File</h3>
        <FilePreview />
      </main>

      {/* Colonna destra (Chat AI) */}
      <aside className="w-1/4 bg-gray-100 p-4 border-l border-gray-300 flex flex-col">
        {/* Parte superiore: Risposte AI */}
        <div className="flex-1 overflow-y-auto border-b border-gray-300 p-2">
          <h3 className="text-lg font-bold">Risposte</h3>
          <div className="text-gray-600">Le risposte dell&apos;AI compariranno qui...</div>
        </div>

        {/* Parte inferiore: Input domande */}
        <div className="mt-2">
          <input
            type="text"
            placeholder="Scrivi una domanda..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Invia
          </button>
        </div>
      </aside>
    </div>
  );
}
