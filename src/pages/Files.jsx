import { useEffect, useState } from 'react'; 
import Card from '../components/Card';
import Search from '../components/Search';
import axios from 'axios';

const Files = () => {
  const [files, setFiles] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/files/')
      .then((response) => {
        setFiles(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("There was an error fetching the files!", error);
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-24 content-center py-10">
        {files.map((file) => (
          <Card key={file.id} file={file} />
        ))}
      </div>
    </>
  );
}

export default Files;
