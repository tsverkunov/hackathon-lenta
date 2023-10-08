/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import api from '../../utils/Api.js'
import { useSelector, useDispatch } from 'react-redux'
import {
  setShops,
  setSelectedShop,
  setCities,
  setSelectedCity,
  setCategories,
  setSelectedCategories,
} from '../../redux/dataReducer.js'
import MainContent from '../MainContent/MainContent'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import style from './Main.module.css'

export default function Main({ type }) {
  const dispatch = useDispatch()
  const shops = useSelector(state => state.dataReducer.shops)
  const cities = useSelector(state => state.dataReducer.cities)
  const categories = useSelector(state => state.dataReducer.categories)


  useEffect(() => {

  }, [])
  // useEffect(() => {
  //   api
  //     .getShops()
  //     .then(data => {
  //       const shopTitles = data.data.map(shop => shop.title)
  //       // console.log('shopTitles :', shopTitles)
  //       dispatch(setShops(shopTitles))
  //       dispatch(setSelectedShop(shopTitles[0]))
  //       const uniqueCities = [...new Set(data.data.map(shop => shop.city))]
  //       dispatch(setCities(uniqueCities))
  //       dispatch(setSelectedCity(uniqueCities[0]))
  //     })
  //     .catch(error => {
  //       console.log('error :', error)
  //     })
  // }, [])

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
