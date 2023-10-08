/* eslint-disable react/prop-types */
import MainContent from '../MainContent/MainContent'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import style from './Main.module.css'

export default function Main({type}) {
  return (
    <div className={style.main}>
      <SideBar type={type} />
      <div className={style.wrapper}>
        <Header type={type} />
        <MainContent type={type} />
      </div>
    </div>
  )
}
