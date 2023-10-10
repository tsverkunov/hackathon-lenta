import {useDispatch} from "react-redux";
import style from './CustomSelect.module.css'
import arrow from '../../images/arrow.svg'
import {useRef} from "react";

const CustomSelect = ({
                        closedOtherList,
                        isOpenList,
                        city = false,
                        showList,
                        selectedDefaultText,
                        optionsList,
                        showOptionList,
                        defaultSelectText
                      }) => {
  const dispatch = useDispatch()
  const optionsRef = useRef(null)

  const handleListDisplay = () => {
    dispatch(showList())
    if (isOpenList) {
      dispatch(closedOtherList())
    }
  }

  const handleOptionClick = (e) => {
    dispatch(selectedDefaultText(e.target.getAttribute("data-name")))
    handleListDisplay()
  }

  return (
    <div className={style.select_container}>
      <div
        className={style.selected_text}
        onClick={handleListDisplay}
      >
        {defaultSelectText}
        <img
          className={showOptionList ? `${style.arrow} ${style.arrow_active}` : `${style.arrow}`}
          src={arrow}
          alt="стрелка"
        />
      </div>
      {showOptionList && (
        <ul className={style.options} ref={optionsRef}>
          {optionsList.map(option => {
            return (
              <div className={style.option_wrap} key={option.title}>
                <li
                  className={style.option}
                  data-name={city ? option.city : option.title}
                  onClick={handleOptionClick}
                >
                  {city ? option.city : option.title}
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
