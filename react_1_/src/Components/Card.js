import "./Card.css";

function Card({ Name, Work }) {
  return (
    <div className="card">
      <img
        src="https://miro.medium.com/v2/resize:fit:1200/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg"
        alt="Profile"
        width="200px"
      />
      <h1>{Name}</h1>
      <p>{Work}</p>
    </div>
  );
}
//this is just see if the folders and my work is pushing to git hub

export default Card;
