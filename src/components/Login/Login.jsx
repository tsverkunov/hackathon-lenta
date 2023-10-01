import FormPage from "../FormPage/FormPage";
import formPageStyle from "../FormPage/FormPage.module.css";

const Login = () => {

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
      >
        <fieldset className={formPageStyle.fieldset} >
          <input className={formPageStyle.input} placeholder='Логин' type='text' id='login'/>
          <input className={formPageStyle.input} placeholder='Пароль' type='password' id='password'/>
        </fieldset>
        <button className={formPageStyle.button} onClick={onSubmit} type='submit'>Войти</button>
      </form>
    </FormPage>
  );
};

export default Login;
