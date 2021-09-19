import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrBtn = Object.keys(options);

  return (
    <ul className={css.btnList}>
      {arrBtn.map((btn) => (
        <li key={btn}>
          <button
            className={css.button}
            type="button"
            name={btn}
            onClick={onLeaveFeedback}
          >
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
};
