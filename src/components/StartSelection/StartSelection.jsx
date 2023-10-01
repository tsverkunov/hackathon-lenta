import FormPage from "../FormPage/FormPage.jsx";
import formPageStyle from "../FormPage/FormPage.module.css";
import style from "../StartSelection/StartSelection.module.css"
import {Checkbox} from "antd";

const StartSelection = () => {

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
            <Checkbox className={style.checkbox} onChange={onChange} id='checkbox'>Запомнить</Checkbox>
            {/*<input type='checkbox' id='remember'/>*/}
            {/*<label htmlFor="remember">Запомнить</label>*/}
          </div>
        </fieldset>
        <button className={formPageStyle.button} onClick={onSubmit} type='submit'>Выбрать</button>
      </form>
    </FormPage>
  );
};

export default StartSelection;
