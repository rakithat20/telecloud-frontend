import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-7 bg-gray-100">
        <label
          htmlFor="file"
          className="h-24 w-60 flex items-center justify-center text-xl text-center font-semibold border-b-2 bg-gray-300 rounded-md px-2 hover:bg-slate-400 cursor-pointer"
        >
          Choose a file
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileSelect}
          className="sr-only"
        />
        {!file ? (
          <></>
        ) : (
          <section className="mt-5 p-4 rounded-lg bg-white shadow-lg border border-gray-200">
            <ul className=" text-gray-600">
              <li className="font-semibold">File Name: {file.name}</li>
              <li className="font-semibold">File Size: {file.size} bytes</li>
              <li className="font-semibold">File Type: {file.type}</li>
            </ul>
          </section>
        )}
      </div>
    </>
  );
};

export default Upload;
