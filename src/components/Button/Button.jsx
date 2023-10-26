import style from "../Button/Button.module.css";

const Button = ({
                  onSubmit,
                  value,
                  loading = false,
                  isValid = true
}) => {
  return (
    <button
      className={style.button}
      onClick={onSubmit}
      type='submit'
      disabled={!isValid}
      aria-label={value}
    >
      {loading ? 'Входим . . .' : value}
    </button>
  );
};

export default Button;
