import "./Card.css";

// Card.js
function Card({ Name, Work, pics }) {
  return (
    <div className="card">
      <img
        src={pics || "https://miro.medium.com/v2/resize:fit:1200/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg"}
        alt={`${Name}'s Profile`}
        width="200px"
      />
      <h1>{Name}</h1>
      <p>{Work}</p>
    </div>
  );
}

export default Card;
