import React from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';


const Home = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/'); // Navigate to login page
  };
  



  return (
    <div>
       <div>
        <input onClick={goToLogin}  className='back' type="submit" value={"<"} />
      </div>
      <h1>User page</h1>
    </div>
  );
};

export default Home;