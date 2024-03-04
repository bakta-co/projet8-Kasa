import React, { useState } from "react";
import faChevronDown from "../assets/images/arrow_co.png";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const { title, description } = props;

  return (
    <div className="wrapper">
      <div className="collapse">
        <div className="item">
          <div className="title" onClick={toggle}>
            <h2>{title}</h2>
            <span className={`arrow ${isOpen ? "open" : ""}`}>
              <img src={faChevronDown} alt="flèche collapse" />
            </span>
          </div>
          <div className={`description ${isOpen ? "descriptionshow" : ""}`}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
