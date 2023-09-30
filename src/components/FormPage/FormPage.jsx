import style from './FormPage.module.css'

export default function FormPage() {
  return (
    <div className={style.login}>
      <h1>Вход</h1>
      <form>
        <div>
          <label htmlFor='login'>Логин</label>
          <input type='text' id='login' />
        </div>
        <div>
          <label htmlFor='password'>Пароль</label>
          <input type='password' id='password' />
        </div>
        <button type='submit'>Войти</button>
      </form>
    </div>
  )
}