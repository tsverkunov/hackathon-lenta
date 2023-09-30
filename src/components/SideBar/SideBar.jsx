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
      <div className={style.filters}>
        <form action='submit'></form>
      </div>
      <div className={style.footer}>
        <button className={style.filterButton}
          onClick={handleSubmit}
        >Открыть прогноз</button>
      </div>
    </div>
  )
}
