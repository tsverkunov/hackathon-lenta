import style from '../CustomCheckbox/CustomCheckbox.module.css';
import {useDispatch, useSelector} from "react-redux";
import {checked} from "../../redux/selectReducer.js";

function CustomCheckbox() {
  const isChecked = useSelector(state => state.selectReducer.isChecked)
  const dispatch = useDispatch()

  const onChangeCheckbox = (e) => {
    e.target.checked
      ? dispatch(checked(true))
      : dispatch(checked(false))
  };

  return (
    <fieldset className={style.container}>
      <label className={style.label}>
        <input
          type="checkbox"
          className={style.checkbox}
          name="checkbox"
          checked={isChecked}
          onChange={onChangeCheckbox}
        />
        <span className={style.visible}></span>
        <span className={style.text}>Запомнить</span>
      </label>
    </fieldset>
  );
}

export default CustomCheckbox;
