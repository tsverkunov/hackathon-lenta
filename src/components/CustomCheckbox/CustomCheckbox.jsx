import style from '../CustomCheckbox/CustomCheckbox.module.css';
import {useDispatch, useSelector} from "react-redux";
import {checked} from "../../redux/checkboxReducer.js";
import {useEffect, useRef} from "react";

function CustomCheckbox() {
  const isChecked = useSelector(state => state.checkboxReducer.isChecked)
  const dispatch = useDispatch()
  const checkboxRef = useRef(null)

  const onChangeCheckbox = () => {
    dispatch(checked())
  };

  useEffect(() => {
    const checkboxEl = checkboxRef.current
    if (!checkboxEl) return;

    const handlePress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        onChangeCheckbox()
      }
    }

    checkboxEl.addEventListener('keydown', handlePress)
    return () => {
      checkboxEl.removeEventListener('keydown', handlePress)
    };
  }, [])

  return (
    <div className={style.wrap}>
      <fieldset className={style.container}>
        <label className={style.label}>
          <input
            ref={checkboxRef}
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
    </div>
  );
}

export default CustomCheckbox;
