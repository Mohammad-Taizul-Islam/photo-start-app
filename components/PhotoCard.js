import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={photo.url} alt={photo.title} className="w-full" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{photo.title}</h2>
        <p>{photo.description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
