import DataTable from '../DataTable/DataTable'
import style from './MainContent.module.css'

export default function MainContent() {
  return (
    <main className={style.main}>
      <h2 className={style.title}>
        Прогноз спроса на продукцию собственного производства
      </h2>
      <DataTable />
      <div className={style.buttons}>
        <button className={style.button}>Посмотреть статистику</button>
        <button className={style.button}>
          <div className={style.icon} />
          Выгрузить таблицу
        </button>
      </div>
    </main>
  )
}
