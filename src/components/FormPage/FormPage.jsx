import style from './FormPage.module.css'
import logo from '../../images/logo.svg'

export default function FormPage() {
  return (
    <div className={style.formPage}>
      <img className={style.logo} src={logo} alt="Логотип"/>
      <div className={style.container}>
        <h1 className={style.title}>Вход</h1>
        <form
          className={style.form}
          name='formPage'
        >
          <fieldset className={style.fieldset} >
            <input className={style.input} placeholder='Логин' type='text' id='login'/>
            <input className={style.input} placeholder='Пароль' type='password' id='password'/>
          </fieldset>
          <button className={style.button} type='submit'>Войти</button>
        </form>
      </div>
    </div>
  )
}
