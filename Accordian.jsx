import React, { useState } from "react";
import data from "../../Info";
import "./Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multi, setMulti] = useState([]);

  const toggleMultipleSelection = () => {
    setEnableMultiple((prev) => !prev);
  };

  const handleSelect = (id) => {
    if (enableMultiple) {
      setMulti((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setSelected((prev) => (prev === id ? null : id));
    }
  };

  const renderItems = () =>
    data.map((item) => {
      const isSelected = enableMultiple ? multi.includes(item.id) : selected === item.id;
      return (
        <div
          key={item.id}
          onClick={() => handleSelect(item.id)}
          className="item"
        >
          <h3>{item.question}</h3>
          <span>+</span>
          <div>{isSelected ? <p>{item.answer}</p> : null}</div>
        </div>
      );
    });

  return (
    <div className="container">
      <button onClick={toggleMultipleSelection}>
        {enableMultiple ? "Disable" : "Enable"} Multiple Selection
      </button>
      <div className="accordion">{renderItems()}</div>
    </div>
  );
};

export default Accordian;
