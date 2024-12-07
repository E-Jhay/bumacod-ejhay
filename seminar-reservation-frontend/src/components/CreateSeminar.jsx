import React, { useState } from 'react';
import API from '../utils/api';

const CreateSeminar = ({ onCreate }) => {
  const [seminarData, setSeminarData] = useState({
    title: '',
    description: '',
    speaker: '',
    date: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSeminarData({ ...seminarData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post('/seminars', seminarData);
      onCreate(data); // Update parent component state
    } catch (error) {
      console.error("Error creating seminar:", error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Create Seminar</h2>
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
        <button type="submit" className="btn btn-primary">Create Seminar</button>
      </form>
    </div>
  );
};

export default CreateSeminar;
