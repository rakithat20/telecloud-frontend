import axios from "axios";
import { useState,  } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import { useNavigate } from 'react-router-dom'; 

import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const Upload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log(file);
      const formData = new FormData(); // Corrected FormData instantiation
      formData.append('file', file);

      axios.post('http://localhost:3000/upload', formData)
        .then(() => {
          toast.success('Successfully uploaded'); // Display success toast
          setTimeout(() => {
            navigate('/files')
          },5000 );
          
        })
        .catch((error) => {
          toast.error('Upload failed'); // Display error toast
          console.error('Upload failed:', error);
        });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
        
        {file && (
          <>
            <input
              type="button"
              value="Upload"
              onClick={handleUpload}
              className="h-12 w-32 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
            />
            <section className="mt-5 p-4 rounded-lg bg-white shadow-lg border border-gray-200">
              <ul className="text-gray-600">
                <li className="font-semibold">File Name: {file.name}</li>
                <li className="font-semibold">File Size: {file.size} bytes</li>
                <li className="font-semibold">File Type: {file.type}</li>
              </ul>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Upload;
