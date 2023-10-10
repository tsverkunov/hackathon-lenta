import FormPage from "../FormPage/FormPage.jsx";
import formPageStyle from "../FormPage/FormPage.module.css";
import style from "../StartSelection/StartSelection.module.css"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../Button/Button.jsx";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {filled, selectedCities, selectedTK, showCitiesList, showListTK} from '../../redux/selectReducer.js';
import {setForeCast, setSelectedCity, setSelectedShop, setIsForecastLoading} from "../../redux/dataReducer.js";
import {useEffect} from "react";
import api from "../../utils/Api.js";

const StartSelection = () => {
  const navigate = useNavigate()
  const shops = useSelector(state => state.selectReducer.shops)
  const isShowedCities = useSelector(state => state.selectReducer.isShowedCities)
  const defaultTextCity = useSelector(state => state.selectReducer.defaultTextCity)
  const isShowedTK = useSelector(state => state.selectReducer.isShowedTK)
  const defaultTextTK = useSelector(state => state.selectReducer.defaultTextTK)
  const isFilled = useSelector(state => state.selectReducer.isFilled)

  const dispatch = useDispatch()

  useEffect(() => {
    if (defaultTextCity !== 'Город' && defaultTextTK !== 'Выберите ТК') {
      dispatch(filled(true))
    }
  }, [defaultTextCity, defaultTextTK])

  const handleForecast = () => {
    dispatch(setIsForecastLoading(true))
    api
      .getForecast({
        store: [defaultTextTK],
      })
      .then((data) => {
        dispatch(setForeCast(data.data))
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(setIsForecastLoading(false))
      })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(setSelectedCity(defaultTextCity))
    dispatch(setSelectedShop(defaultTextTK))
    navigate('/forecast')
    handleForecast()
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
