import React, { useEffect, useState } from "react";
import SeminarCard from "../components/SeminarCard";
import API from "../utils/api";

const Dashboard = () => {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const { data } = await API.get("/seminars");
        setSeminars(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching seminars:", error.response.data.message);
      }
    };

    fetchSeminars();
  }, []);

  const handleReserve = (seminar) => {
    alert(`Reserved: ${seminar.title}`);
  };

  return (
    <div className="container mx-auto my-8 px-4 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6">Available Seminars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seminars.map((seminar) => (
          <SeminarCard key={seminar._id} seminar={seminar} onReserve={handleReserve} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
