import "./Card.css";

const Card = ({ data, onClick }) => {
  return (
    <div>
      <p>Advice Number: {data.id}</p>
      <h1>{data.advice}</h1>
      <button onClick={onClick}>Generate Advice</button>
    </div>
  );
};

export default Card;
