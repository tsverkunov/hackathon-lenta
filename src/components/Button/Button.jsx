import style from "../Button/Button.module.css";
import {useSelector} from "react-redux";

const Button = ({onSubmit}) => {
  const isValid = useSelector(state => state.formReducer.isValid)

  return (
    <button
      className={style.button}
      onClick={onSubmit}
      type='submit'
      disabled={!isValid}
      aria-label="Войти"
    >
      Войти
    </button>
  );
};

export default Button;
