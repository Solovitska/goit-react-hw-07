import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.message}>
      <p>Please note, an error has occurred. Try refreshing the page.</p>
    </div>
  );
};

export default ErrorMessage;