import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import api from '../../utils/Api.js'
import { setStats, setIsStatsLoading } from '../../redux/dataReducer.js'

export default function StatsTable() {
  const dispatch = useDispatch()
  const stats = useSelector(state => state.dataReducer.stats)
  const selectedShop = useSelector(state => state.dataReducer.selectedShop)
  const selectedCategories = useSelector(
    state => state.dataReducer.selectedCategories
  )
  const isStatsLoading = useSelector(state => state.dataReducer.isStatsLoading)

  useEffect(() => {
    if (stats.length) return
    dispatch(setIsStatsLoading(true))
    api
      .getStats({
        store: selectedShop,
        subcategory: selectedCategories,
      })
      .then(data => {
        dispatch(setStats(data.sales_and_forecast_objects))
      })
      .catch(error => console.log('error :', error))
      .finally(() => {
        dispatch(setIsStatsLoading(false))
      })
  }, [])

function getRows() {
  const rows = []
  const products = [...new Set(stats.map(item => item.sku))]
  const stores = [...new Set(stats.map(item => item.store))]
  const dates = [...new Set(stats.map(item => item.date))]

  products.forEach(product => {
    stores.forEach(store => {
      const productStats = stats.filter(
        item => item.sku === product && item.store === store
      )
      const productRow = {
        product,
        tk: store,
        forecast: 'WAPE',
      }
      const diffRow = {
        product,
        tk: store,
        forecast: 'DIFF',
      }
      dates.forEach(date => {
        const stat = productStats.find(item => item.date === date)
        if (stat) {
          productRow[date] = stat.wape
          diffRow[date] = stat.diff
        } else {
          productRow[date] = 'no data'
          diffRow[date] = 'no data'
        }
      })
      rows.push(productRow)
      rows.push(diffRow)
    })
  })

  return rows
}

const rows = getRows()

function getColumns() {
  const dates = [...new Set(stats.map(item => item.date))]
  const daysColumns = dates.map(date => ({
    title: date,
    dataIndex: date,
    key: date,
    width: 100,
    align: 'center',
  }))
  return daysColumns
}

const daysColumns = getColumns()

  const columns = [
    {
      title: 'Категория/Продукт',
      dataIndex: 'product',
      key: 'product',
      width: 150,
      fixed: 'left',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'ТК',
      dataIndex: 'tk',
      key: 'tk',
      width: 60,
      fixed: 'left',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'Прогноз',
      dataIndex: 'forecast',
      key: 'forecast',
      width: 100,
      fixed: 'left',
      ellipsis: {
        showTitle: true,
      },
    },
    ...daysColumns,
  ]

  return (
    <Table
      columns={columns}
      dataSource={rows}
      loading={isStatsLoading}
      // bordered
      size='middle'
      // scroll={{
      //   x: 'calc(700px + 50%)',
      // }}
    />
  )
}
