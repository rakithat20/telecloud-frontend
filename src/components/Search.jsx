import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div className="flex flex-col items-center pt-12 pb-6">
      <h1 className="mb-4 text-center text-3xl">Welcome To Tele Cloud</h1>
      <form className="relative flex items-center w-full justify-center">
        <div className="relative w-full max-w-md">
          <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
          <input 
            type="text" 
            placeholder="Search Files" 
            className="pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
