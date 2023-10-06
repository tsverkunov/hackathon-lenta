import {useDispatch} from "react-redux";
import style from './CustomSelect.module.css'
import arrow from '../../images/arrow.svg'

const CustomSelect = ({
                        city = false,
                        showList,
                        selectedDefaultText,
                        optionsList,
                        showOptionList,
                        defaultSelectText
                      }) => {
  const dispatch = useDispatch()

  const handleOptionClick = (e) => {
    dispatch(selectedDefaultText(e.target.getAttribute("data-name")))
    dispatch(showList())
  }

  const handleListDisplay = () => {
    dispatch(showList())
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
        <ul className={style.options}>
          {optionsList.map(option => {
            return (
              <div className={style.option_wrap}>
                <li
                  className={style.option}
                  data-name={city? option.city : option.title}
                  key={option.city}
                  onClick={handleOptionClick}
                >
                  {city? option.city : option.title}
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
