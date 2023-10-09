/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DataTable from '../DataTable/DataTable'
import btnStyle from '../Button/Button.module.css'
import style from './MainContent.module.css'
import StatsTable from '../StatsTable/StatsTable'

const btnStyles = `${btnStyle.button} ${style.button}`

export default function MainContent({ type, getExcel }) {
  const navigate = useNavigate()
  const selectedShop = useSelector(state => state.dataReducer.selectedShop)
  const selectedShops = useSelector(state => state.dataReducer.selectedShops)
  const selectedCategories = useSelector(
    state => state.dataReducer.selectedCategories
  )
  const forecast = useSelector(state => state.dataReducer.forecast)

  const handleExcel = e => {
    // type === 'forecast'
    //   ? getExcel(type, { store: selectedShop, subcategory: selectedCategories })
    //   : getExcel(type, {
    //       store: selectedShops,
    //       subcategory: selectedCategories,
    //     })
    e.preventDefault()
    getExcel()
  }

  return (
    <main className={style.main}>
      <h2 className={style.title}>
        {type === 'forecast'
          ? 'Прогноз спроса на продукцию собственного производства'
          : 'Аналитика спроса на продукцию собственного производства'}
      </h2>
      {type === 'forecast' ? <DataTable /> : <StatsTable />}
      <div className={style.buttons}>
        {type === 'forecast' ? (
          <button className={btnStyles} onClick={() => navigate('/stats')}>
            Посмотреть статистику
          </button>
        ) : (
          <button className={btnStyles} onClick={() => navigate('/forecast')}>
            Вернуться в прогноз
          </button>
        )}
        <button className={btnStyles} onClick={handleExcel} disabled={
          type === 'forecast' ? !forecast.length : false
        }>
          <div className={style.icon} />
          Выгрузить таблицу
        </button>
      </div>
    </main>
  )
}
