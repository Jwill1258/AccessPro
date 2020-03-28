import React from "react";
import "./card.css";

function Card({ icon, title, children }) {
  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
