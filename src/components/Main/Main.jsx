/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux'
import { setForeCast } from '../../redux/dataReducer'
import { useEffect } from 'react'
import api from '../../utils/Api.js'
import { setCategories } from '../../redux/dataReducer.js'
import MainContent from '../MainContent/MainContent'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import style from './Main.module.css'

export default function Main({ type }) {
  const dispatch = useDispatch()
  const selectedShop = useSelector(state => state.dataReducer.selectedShop)
  const selectedCategories = useSelector(
    state => state.dataReducer.selectedCategories
  )

  async function updateForecast() {
    try {
      const res = await api.getForecast({
        store: selectedShop,
        subcategory: selectedCategories,
      })
      dispatch(setForeCast(res.data))
      console.log('res :', res)
    } catch (err) {
      console.log(err)
    }
  }

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
      <SideBar type={type} handleForecastUpdate={updateForecast} />
      <div className={style.wrapper}>
        <Header type={type} handleForecastUpdate={updateForecast} />
        <MainContent type={type} />
      </div>
    </div>
  )
}
