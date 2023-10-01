import FormPage from "../FormPage/FormPage";
import formPageStyle from "../FormPage/FormPage.module.css";
import style from "../Login/Login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
  changeErrorLogin,
  changeErrorPassword,
  changeLogin,
  changePassword,
  checkValid
} from "../../redux/formReducer.js";

const Login = () => {
  const login = useSelector(state => state.formReducer.login)
  const password = useSelector(state => state.formReducer.password)
  const errors = useSelector(state => state.formReducer.errors)
  const isValid = useSelector(state => state.formReducer.isValid)
  const dispatch = useDispatch()

  const handleChangeValue = (e) => {
    dispatch(changeLogin(e.target.value))
    dispatch(changeErrorLogin(e.target.validationMessage))
    dispatch(checkValid(e.target.closest('form').checkValidity()))
  }

  const handleChangePassword = (e) => {
    dispatch(changePassword(e.target.value))
    dispatch(changeErrorPassword(e.target.validationMessage))
    dispatch(checkValid(e.target.closest('form').checkValidity()))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Send login form')
  }

  return (
    <FormPage>
      <h1 className={formPageStyle.title}>Вход</h1>
      <form
        className={formPageStyle.form}
        name='login'
        noValidate
      >
        <fieldset className={formPageStyle.fieldset}>
          <input
            className={formPageStyle.input}
            placeholder='Логин'
            type='text'
            name='login'
            id='login'
            value={login}
            onChange={handleChangeValue}
            required
          />
          <span className={style.error}>{errors.login}</span>
          <input
            className={formPageStyle.input}
            placeholder='Пароль'
            type='password'
            name='password'
            id='password'
            minLength="8"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <span className={style.error}>{errors.password}</span>
        </fieldset>
        <button
          className={formPageStyle.button}
          onClick={onSubmit}
          type='submit'
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
    </FormPage>
  );
};

export default Login;
