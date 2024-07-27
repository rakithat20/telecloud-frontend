import PropTypes from 'prop-types';
import { MdImage, MdDescription, MdAudioFile } from 'react-icons/md';
import { FaFileVideo, FaDownload } from 'react-icons/fa';

export const Card = ({ file }) => {
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
      <div className="absolute top-2 right-2">
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
    fileName: PropTypes.string.isRequired,
    fileSize: PropTypes.number.isRequired,
    uploadDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
