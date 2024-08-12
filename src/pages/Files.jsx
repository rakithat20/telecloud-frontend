import { useEffect, useState } from 'react'; // Import necessary hooks
import Card from '../components/Card';
import Search from '../components/Search';
import axios from 'axios';

const Files = () => {
  const [files, setFiles] = useState([]); // State to hold files data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Fetch files from the server when the component mounts
    axios.get('http://localhost:3000/files/')
      .then((response) => {
        setFiles(response.data); // Update the files state with fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the files!", error);
        setLoading(false); // Also stop loading on error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
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
