import React from "react";

const SeminarCard = ({ seminar, onReserve }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{seminar.title}</h2>
        <p>{seminar.description}</p>
        <p className="text-sm text-gray-500">Speaker: {seminar.speaker.name}</p>
        <p className="text-sm text-gray-500">Date: {seminar.date}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => onReserve(seminar)}>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default SeminarCard;
