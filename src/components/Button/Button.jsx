import style from "../Button/Button.module.css";

const Button = ({onSubmit, value, isValid = true}) => {

  return (
    <button
      className={style.button}
      onClick={onSubmit}
      type='submit'
      disabled={!isValid}
      aria-label={value}
    >
      {value}
    </button>
  );
};

export default Button;
