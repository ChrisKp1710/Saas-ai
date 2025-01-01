// src/app/page.tsx
import { FileUploaderContainer } from "@/app/components";
import FilePreview from "@/app/components/FileUploader/FilePreview";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Colonna sinistra */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-6 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Carica un File</h2>
        <FileUploaderContainer />
      </aside>

      {/* Colonna centrale (Anteprima File) */}
      <main className="flex-1 bg-gray-50 p-6 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">Anteprima File</h3>
        <div className="w-full max-w-4xl h-[80%] bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
          <FilePreview />
        </div>
      </main>

      {/* Colonna destra (Chat AI) */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-6 border-l border-gray-300 flex flex-col">
        <div className="flex-1 overflow-y-auto border-b border-gray-300 p-4">
          <h3 className="text-xl font-semibold">Risposte AI</h3>
          <p className="text-gray-600 mt-2">Le risposte dell&apos;AI compariranno qui...</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Scrivi una domanda..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Invia
          </button>
        </div>
      </aside>
    </div>
  );
}
