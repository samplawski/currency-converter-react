import "./style.css";

const Buttons = ({ onReset }) => (
  <p className="form__buttons">
    <button
      className="form__button"
      type="submit"
      value="Przelicz"
      title="Przelicz"
    >
      Przelicz
    </button>

    <button
      className="form__button"
      type="button"
      onClick={onReset}
      value="Wyczyść"
      title="Wyczyść"
    >
      Wyczyść
    </button>
  </p>
);

export default Buttons;
