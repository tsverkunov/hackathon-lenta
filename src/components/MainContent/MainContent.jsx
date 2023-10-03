import DataTable from '../DataTable/DataTable'
import btnStyle from '../Button/Button.module.css'
import style from './MainContent.module.css'

const btnStyles = `${btnStyle.button} ${style.button}`

export default function MainContent() {
  return (
    <main className={style.main}>
      <h2 className={style.title}>
        Прогноз спроса на продукцию собственного производства
      </h2>
      <DataTable />
      <div className={style.buttons}>
        <button className={btnStyles}>Посмотреть статистику</button>
        <button className={btnStyles}>
          <div className={style.icon} />
          Выгрузить таблицу
        </button>
      </div>
    </main>
  )
}
