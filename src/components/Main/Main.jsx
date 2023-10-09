/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import api from '../../utils/Api.js'
import { useDispatch } from 'react-redux'
import {
  setCategories,
} from '../../redux/dataReducer.js'
import MainContent from '../MainContent/MainContent'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import style from './Main.module.css'

export default function Main({ type }) {
  const dispatch = useDispatch()

  useEffect(() => {
    api
      .getProducts()
      .then(data => {
        const tree = {}

        data.data.forEach(item => {
          const group = item.group
          const category = item.category
          const subcategory = item.subcategory
          // const sku = item.sku
          if (!tree[group]) {
            tree[group] = {}
          }
          if (!tree[group][category]) {
            tree[group][category] = []
          }
          if (!tree[group][category].includes(subcategory)) {
            tree[group][category].push(subcategory)
          }
          // if (!tree[group][category][subcategory]) {
          //   tree[group][category][subcategory] = []
          // }
          // tree[group][category][subcategory].push(sku)
        })

        console.log('tree :', tree)
        dispatch(setCategories(tree))
      })
      .catch(error => {
        console.log('error :', error)
      })
  }, [])

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
