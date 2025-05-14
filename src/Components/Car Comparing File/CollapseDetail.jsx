
import React, { useState } from "react";

const CollapseDetail = ({ topic, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="collapse-card" style={{cursor: "pointer"}}>
      {/* Accordion Header */}
      <div id="collapseButton"
        className="card-header p-4 border-t border-b cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className="mb-0">{topic}</h5>
      </div>

      {/* Accordion Content - Only visible when isOpen is true */}
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CollapseDetail;