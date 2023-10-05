import FormPage from "../FormPage/FormPage.jsx";
import formPageStyle from "../FormPage/FormPage.module.css";
import style from "../StartSelection/StartSelection.module.css"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../Button/Button.jsx";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import {useSelector} from "react-redux";
import {selectedCities, showCitiesList} from "../../redux/selectCityReducer.js";
import {selectedTK, showListTK} from "../../redux/selectTKReducer.js";

const StartSelection = () => {
  const citiesList = useSelector(state => state.selectCityReducer.citiesList)
  const isShowedCities = useSelector(state => state.selectCityReducer.isShowedCities)
  const defaultTextCity = useSelector(state => state.selectCityReducer.defaultTextCity)
  const listTK = useSelector(state => state.selectTKReducer.listTK)
  const isShowedTK = useSelector(state => state.selectTKReducer.isShowedTK)
  const defaultTextTK = useSelector(state => state.selectTKReducer.defaultTextTK)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Send main select form')
  }

  return (
    <FormPage>
      <form className={formPageStyle.form} name='mainSelection'>
        <fieldset className={style.fieldset}>
          <CustomSelect
            optionsList={citiesList}
            showOptionList={isShowedCities}
            defaultSelectText={defaultTextCity}
            selectedDefaultText={selectedCities}
            showList={showCitiesList}
          />
          <CustomSelect
            optionsList={listTK}
            showOptionList={isShowedTK}
            defaultSelectText={defaultTextTK}
            selectedDefaultText={selectedTK}
            showList={showListTK}
          />
          <CustomCheckbox/>
        </fieldset>
        <Button onSubmit={onSubmit} value='Выбрать'/>
      </form>
    </FormPage>
  );
};

export default StartSelection;
