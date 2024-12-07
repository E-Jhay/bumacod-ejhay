import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const SeminarPage = () => {
  const { user } = useContext(AuthContext);
  const [seminars, setSeminars] = useState([]);
  const [newSeminar, setNewSeminar] = useState({ title: "", date: "" });

  useEffect(() => {
    const fetchSeminars = async () => {
      const { data } = await axios.get("/api/seminars");
      setSeminars(data);
    };
    fetchSeminars();
  }, []);

  const addSeminar = async () => {
    const { data } = await axios.post(
      "/api/seminars",
      newSeminar,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    setSeminars([...seminars, data]);
    setNewSeminar({ title: "", date: "" });
  };

  const deleteSeminar = async (id) => {
    await axios.delete(`/api/seminars/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setSeminars(seminars.filter((seminar) => seminar.id !== id));
  };

  return (
    <div>
      <h1 className="text-center text-2xl">Welcome, {user.name}</h1>
      <div className="p-4">
        <input
          type="text"
          placeholder="Title"
          value={newSeminar.title}
          onChange={(e) => setNewSeminar({ ...newSeminar, title: e.target.value })}
          className="input input-bordered mr-2"
        />
        <input
          type="date"
          value={newSeminar.date}
          onChange={(e) => setNewSeminar({ ...newSeminar, date: e.target.value })}
          className="input input-bordered mr-2"
        />
        <button className="btn btn-primary" onClick={addSeminar}>Add Seminar</button>
      </div>
      <ul>
        {seminars.map((seminar) => (
          <li key={seminar.id} className="flex justify-between p-4 border-b">
            <span>{seminar.title} ({seminar.date})</span>
            <button
              className="btn btn-error"
              onClick={() => deleteSeminar(seminar.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeminarPage;
