import MainContent from '../MainContent/MainContent'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import style from './Main.module.css'

export default function Main() {
  return (
    <div className={style.main}>
      <SideBar />
      <div className={style.wrapper}>
        <Header />
        <MainContent />
      </div>
    </div>
  )
}
