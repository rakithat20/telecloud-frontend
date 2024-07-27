import files from '../data/files';  
import Card from '../components/Card';
import Search from '../components/Search';

const Files = () => {
  return (
    <>

    <Search/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-24 content-center py-10">
      {files.map((file) => (  
        <Card key={file.id} file={file} />  
      ))}
    </div>
    </>
  );
}

export default Files;
