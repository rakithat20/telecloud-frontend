import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [number, setNumber] = useState('');
  const [ok,setOk] = useState(false);
  const navigate = useNavigate();
 
  const handleSetNumber = (e) => {
    setNumber(e.target.value.replace(/\D/,''));
  }
  const handleEnter =(e)=>{
    e.preventDefault();
    console.log(number);
    localStorage.setItem("number",number);
    
    axios.post(ok?'http://localhost:3000/login/verify':'http://localhost:3000/login/',ok?{
      otp:number,
    }:{pnumber:number})
    .then((res)=>{
      
      if(ok){
        let session = res.data;
        localStorage.setItem("session",session)
        navigate('/files')
      }
      else{
        if(res.status == 200){
          setOk(true);
        }
        console.log(ok)
      }
     
    })
  }
  const handleEnterKey = (e)=>{
    e.key=='Enter'?handleEnter(e):null
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-md text-left">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Login</h1>
        <hr className="mt-3 mb-5"/>
        <div className="text-left">
          <label htmlFor="number" className="block pb-2 text-xl">{ok ? 'OTP' : 'Phone Number'}</label>
          <input
            type="text"
            id="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
            value={number}
            onChange={handleSetNumber}
            onKeyDown={handleEnterKey}
          />
          <hr className="py-3"/>
        </div>
        <div className="flex justify-center">
          <a
            href="/login"
            className="w-20 h-9 bg-blue-600 text-white text-center py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
            onClick={handleEnter}
           
          >
            Enter
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
