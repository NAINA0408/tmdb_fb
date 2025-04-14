import "../componentscss/Add.css";
// import React from 'react';

const Add = ({ isAdded, onAdd, onRemove }) => {
  const handleClick = (e) => {
    e.currentTarget.classList.toggle("active");
    isAdded ? onRemove() : onAdd();
  };

  return (
    <button className={`add ${isAdded ? "active" : ""}`} onClick={handleClick}>
      <span className="line horizontal"></span>
      <span className="line vertical"></span>
    </button>
  );
};

export default Add;
