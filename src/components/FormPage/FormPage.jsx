import style from './FormPage.module.css'
import logo from '../../images/logo.svg'

function FormPage({children}) {
  return (
    <div className={style.formPage}>
      <img className={style.logo} src={logo} alt="Логотип"/>
      <div className={style.container}>
        { children }
      </div>
    </div>
  )
}

export default FormPage;
