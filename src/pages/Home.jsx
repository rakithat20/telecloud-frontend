
function Home() {
  const handleAutoLogin = ()=>{
    try {
      const number = localStorage.getItem("number");
      const session = localStorage.getItem("session");
      console.log(number);
      console.log(session)
    } catch (error) {
      console.log(error)
      
    }
  }
  handleAutoLogin();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to TeleCloud</h1>
        <p className="text-lg text-gray-700">Your reliable cloud storage solution.</p>
      </header>
      <main className="text-center">
        <p className="text-gray-600 mb-6">Easily upload, manage, and access your files from anywhere.</p>
        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Login
          </a>
          
        </div>
      </main>
    </div>
  );
}

export default Home;
