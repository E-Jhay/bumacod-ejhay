import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      <button onClick={handleLogout} className="btn btn-secondary mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
