import React, { useState, useEffect } from 'react';
import API from '../utils/api';

const EditSeminar = ({ seminar, onUpdate }) => {
  const [seminarData, setSeminarData] = useState(seminar);

  useEffect(() => {
    setSeminarData(seminar);
  }, [seminar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSeminarData({ ...seminarData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.put(`/seminars/${seminar._id}`, seminarData);
      onUpdate(data); // Update parent component state
    } catch (error) {
      console.error("Error updating seminar:", error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Edit Seminar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={seminarData.title}
          onChange={handleChange}
          placeholder="Title"
          className="input input-bordered mb-4 w-full"
        />
        <input
          type="text"
          name="description"
          value={seminarData.description}
          onChange={handleChange}
          placeholder="Description"
          className="input input-bordered mb-4 w-full"
        />
        <input
          type="text"
          name="speaker"
          value={seminarData.speaker}
          onChange={handleChange}
          placeholder="Speaker"
          className="input input-bordered mb-4 w-full"
        />
        <input
          type="date"
          name="date"
          value={seminarData.date}
          onChange={handleChange}
          className="input input-bordered mb-4 w-full"
        />
        <input
          type="url"
          name="image"
          value={seminarData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered mb-4 w-full"
        />
        <button type="submit" className="btn btn-primary">Update Seminar</button>
      </form>
    </div>
  );
};

export default EditSeminar;
