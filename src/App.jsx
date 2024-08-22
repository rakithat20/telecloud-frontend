import './App.css';
import Files from './pages/Files.jsx';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Upload from './pages/Upload.jsx';

function App() {
  return (
   <BrowserRouter>
    <main>
      <Routes>
        <Route path='/login'element={<Login/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/files'element={<Files/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
