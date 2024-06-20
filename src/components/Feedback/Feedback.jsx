import css from "./Feedback.module.css"

export default function Feedback({ count: { good, neutral, bad }, total, positive }) {
  return (
    <div className={css.container}>
      <p className={css.feedbackItem}>Good: {good}</p>
      <p className={css.feedbackItem}>Neutral: {neutral}</p>
      <p className={css.feedbackItem}>Bad: {bad}</p>
      <p className={css.feedbackItem}>Total: {total}</p>
      {positive !== undefined && (
        <p className={css.feedbackItem}>Positive: {positive}%</p>
      )}
    </div>
  );
};