import style from './FormPage.module.css'
import formPageStyle from './FormPage.module.css'
import logo from '../../images/logo.svg'
import PropTypes from "prop-types";

function FormPage({children}) {
  return (
    <div className={style.formPage}>
      <img className={style.logo} src={logo} alt="Логотип"/>
      <div className={style.container}>
        <h1 className={formPageStyle.title}>Вход</h1>
        { children }
      </div>
    </div>
  )
}

export default FormPage;

FormPage.propTypes = {
  children: PropTypes.node.isRequired,
}