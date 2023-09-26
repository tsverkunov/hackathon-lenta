import DataTable from '../DataTable/DataTable'
import style from './Main.module.css'

export default function Main() {
  return (
    <main className={style.main}>
      <h2>React App</h2>
      <DataTable />
    </main>
  )
}
