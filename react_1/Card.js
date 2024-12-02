// src/Components/Card.js

import React from "react";
import PropTypes from 'prop-types'; // Para la validación de tipos (opcional pero recomendado)

const Card = ({ Name, Work }) => {
  return (
    <div className="card">
      <h3>{Name}</h3>
      <p>{Work}</p>
    </div>
  );
};

// Validación de las propiedades (opcional)
Card.propTypes = {
  Name: PropTypes.string.isRequired,
  Work: PropTypes.string.isRequired
};

export default Card;

  