import PropTypes from 'prop-types';
import { MdImage, MdDescription, MdAudioFile } from 'react-icons/md';
import { FaFileVideo, FaDownload } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Card = ({ file }) => {
  const [filedownload,setFileDownload] = useState(null);

  const handleDownload = (file)=>{
    setFileDownload(file);
  }
  useEffect(() => {
    if (filedownload) {
      axios.get(`http://localhost:3000/download/${filedownload.id}`, { responseType: 'blob' })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const a = document.createElement('a');
          a.href = url;
          a.download = filedownload.fileName;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url); 
        })
        .catch((error) => {
          console.error("There was an error: ", error);
        });
    }
  }, [filedownload]);
  

  function getIconByFileType(passedFile) {
    if (passedFile.mimeType.includes("image")) {
      return <MdImage className="w-16 h-16 text-gray-400" />;
    }
    else if (passedFile.mimeType.includes("application") || passedFile.mimeType.includes("text")) {
      return <MdDescription className='w-16 h-16 text-gray-400' />;
    }
    else if (passedFile.mimeType.includes('audio')) {
      return <MdAudioFile className='w-16 h-16 text-gray-400' />;
    }
    else if (passedFile.mimeType.includes('video')) {
      return <FaFileVideo className='w-16 h-16 text-gray-400' />;
    }
  }

  return (
    <div className="relative w-64 h-72 border-2 border-gray-300 rounded-lg shadow-md overflow-hidden hover:scale-105">
      <div className="absolute top-2 right-2" onClick={()=>{handleDownload(file)}}>
        <FaDownload className="text-gray-400 cursor-pointer hover:text-gray-600 focus:text-gray-900 text-xl" />
      </div>
      <div className="w-full h-2/3 bg-gray-100 flex items-center justify-center">
        {getIconByFileType(file)}
      </div>
      <div className="w-full h-1/3 px-4 py-2 bg-white">
        <h2 className="text-lg font-semibold text-gray-900">{file.fileName}</h2>
        <p className="text-sm text-gray-600">Size: {file.fileSize} bytes</p>
        <p className="text-sm text-gray-600">Date: {new Date(file.uploadDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  file: PropTypes.shape({
    id:PropTypes.number.isRequired,
    fileName: PropTypes.string.isRequired,
    fileSize: PropTypes.number.isRequired,
    uploadDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
