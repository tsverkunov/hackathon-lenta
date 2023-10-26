import style from "../Button/Button.module.css";
import PropTypes from 'prop-types';


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

Button.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  isValid: PropTypes.bool,
}

