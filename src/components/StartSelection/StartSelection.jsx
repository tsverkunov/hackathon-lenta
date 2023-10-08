import FormPage from "../FormPage/FormPage.jsx";
import formPageStyle from "../FormPage/FormPage.module.css";
import style from "../StartSelection/StartSelection.module.css"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../Button/Button.jsx";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {filled, selectedCities, selectedTK, showCitiesList, showListTK} from '../../redux/selectReducer.js';
import {useEffect} from "react";

const StartSelection = () => {
  const shops = useSelector(state => state.selectReducer.shops)
  // const citiesList = useSelector(state => state.selectReducer.citiesList)
  const isShowedCities = useSelector(state => state.selectReducer.isShowedCities)
  const defaultTextCity = useSelector(state => state.selectReducer.defaultTextCity)
  // const listTK = useSelector(state => state.selectReducer.listTK)
  const isShowedTK = useSelector(state => state.selectReducer.isShowedTK)
  const defaultTextTK = useSelector(state => state.selectReducer.defaultTextTK)
  const isFilled = useSelector(state => state.selectReducer.isFilled)

  const dispatch = useDispatch()

  useEffect(() => {
    if (defaultTextCity !== 'Город' && defaultTextTK !== 'Выберите ТК') {
      dispatch(filled(true))
    }
  }, [defaultTextCity, defaultTextTK])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Send main select form')
  }

  return (
    <FormPage>
      <form className={formPageStyle.form} name='mainSelection'>
        <fieldset className={style.fieldset}>
          <CustomSelect
            closedOtherList={showListTK}
            isOpenList={isShowedTK}
            city={true}
            optionsList={shops}
            showOptionList={isShowedCities}
            defaultSelectText={defaultTextCity}
            selectedDefaultText={selectedCities}
            showList={showCitiesList}
          />
          <CustomSelect
            closedOtherList={showCitiesList}
            isOpenList={isShowedCities}
            optionsList={shops}
            showOptionList={isShowedTK}
            defaultSelectText={defaultTextTK}
            selectedDefaultText={selectedTK}
            showList={showListTK}
          />
          <CustomCheckbox/>
        </fieldset>
        <Button onSubmit={onSubmit} value='Выбрать' isValid={isFilled}/>
      </form>
    </FormPage>
  );
};

export default StartSelection;
