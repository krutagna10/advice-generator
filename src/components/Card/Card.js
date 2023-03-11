import "./Card.css";
import iconDice from "../../assets/icon-dice.svg";
import dividerMobile from "../../assets/pattern-divider-mobile.svg";
import dividerDesktop from "../../assets/pattern-divider-desktop.svg";

const Card = ({ data, onClick }) => {
  return (
    <section className="card-section">
      <div className="card grid grid--items-center background-grayish-blue">
        <p className="card__advice-number">Advice #{data.id}</p>
        <h1 className="card__advice">"{data.advice}"</h1>
        <picture>
          <source media="(min-width: 48em)" src={dividerDesktop} />
          <img src={dividerMobile} aria-hidden="true" alt="" />
        </picture>
        <button className="card__btn" onClick={onClick}>
          <img src={iconDice} alt="Dice" />
        </button>
      </div>
    </section>
  );
};

export default Card;
