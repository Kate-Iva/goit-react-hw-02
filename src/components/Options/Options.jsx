import css from "./Options.module.css";

const Options = ({ onFeedback, total, reset }) => (
  <div className={css.container}>
    <button type="button" className={css.button} onClick={() => onFeedback('good')}>
      Good
    </button>
    <button type="button" className={css.button} onClick={() => onFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" className={css.button} onClick={() => onFeedback('bad')}>
      Bad
    </button>

    {typeof total === 'number' && total > 0 && (
      <button type="button" className={css.button} onClick={reset}>
        Reset
      </button>
    )}
  </div>
);

export default Options;