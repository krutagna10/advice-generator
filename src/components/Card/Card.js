import "./Card.css";
import iconDice from "../../assets/icon-dice.svg";

const Card = ({ data, onClick }) => {
  return (
    <div className="card">
      <p className="card__advice-number">Advice Number: {data.id}</p>
      <h1 className="card__advice">{data.advice}</h1>
      <button className="card__btn" onClick={onClick}>
        <img src={iconDice} alt="Dice" />
      </button>
    </div>
  );
};

export default Card;
