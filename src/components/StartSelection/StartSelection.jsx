import FormPage from "../FormPage/FormPage.jsx";
import formPageStyle from "../FormPage/FormPage.module.css";
import style from "../StartSelection/StartSelection.module.css"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../Button/Button.jsx";

const StartSelection = () => {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Send main select form')
  }

  return (
    <FormPage>
      <form
        className={formPageStyle.form}
        name='mainSelection'
      >
        <fieldset className={style.fieldset}>
          <select className={formPageStyle.input} id='selectCity'>
            <option value="">Город</option>
            <option value="Moscow">Moscow</option>
            <option value="Batumi">Batumi</option>
          </select>
          <select className={formPageStyle.input} id='selectTK'>
            <option value="">Выберете ТК</option>
            <option value="1">ТК №1</option>
            <option value="2">ТК №2</option>
          </select>
          <div className={style.wrap}>
            <CustomCheckbox/>
          </div>
        </fieldset>
        <Button onSubmit={onSubmit} value='Выбрать'/>
      </form>
    </FormPage>
  );
};

export default StartSelection;
