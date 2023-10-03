import FilterMenu from '../FilterMenu/FilterMenu'
import buttonStyle from '../Button/Button.module.css'
import style from './SideBar.module.css'

export default function SideBar() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('Открыть прогноз')
  }

  function handleCollapse(e) {
    e.preventDefault()
    const sidebar = document.querySelector(`.${style.sidebar}`)
    sidebar.classList.toggle(style.collapsed)
  }

  return (
    <div className={style.sidebar}>
      <div className={style.collapse}>
        <button className={style.collapseButton} onClick={handleCollapse} />
      </div>
      <FilterMenu className={style.filters} />
      <div className={style.footer}>
        <button
          className={`${buttonStyle.button} ${style.filterButton}`}
          onClick={handleSubmit}
        >
          Открыть прогноз
        </button>
      </div>
    </div>
  )
}
