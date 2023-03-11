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
        <picture className="card__divider-picture">
          <source media="(min-width: 48em)" src={dividerDesktop} />
          <img
            className="card__divider-image"
            src={dividerMobile}
            aria-hidden="true"
            alt=""
          />
        </picture>
        <button className="card__btn" onClick={onClick}>
          <img className="card__btn-image" src={iconDice} alt="Dice" />
        </button>
      </div>
    </section>
  );
};

export default Card;
