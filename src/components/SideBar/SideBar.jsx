import style from './SideBar.module.css'

export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <div className={style.collapse}>
        <button className={style.collapseButton} />
      </div>
      <div className={style.filters}></div>
      <div className={style.footer}>
        <button className={style.filterButton}>Открыть прогноз</button>
      </div>
    </div>
  )
}
