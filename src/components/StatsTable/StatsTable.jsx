import {Table} from 'antd'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import api from "../../utils/Api.js";
import {setStats} from "../../redux/dataReducer.js";

export default function StatsTable() {
  const dispatch = useDispatch()
  const stats = useSelector(state => state.dataReducer.stats)
  const selectedShops = useSelector(state => state.dataReducer.selectedShops)


  useEffect(() => {
    if (stats.length) return

    api.getStats({
      store: selectedShops
    })
      .then(data => {
        console.log(data);
        dispatch(setStats(data.sales_and_forecast_objects))
        console.log(stats);
      })
      .catch(error => console.log('error :', error))
  }, [])
  console.log(stats)

  // const forecast = useSelector(state => state.dataReducer.forecast)
  const productList = stats.map(product => product.sku)
  const storeList = stats.map(store => store.store)
  const salesUnits = stats.map(units => units.diff)

  //достаю даты и привожу к нужному для таблицы формоту
  const keysArr = salesUnits.map(obj => Object.keys(obj))
  const days = keysArr.length ? keysArr[0].map(item => item.split('-').reverse().join('.')) : []

  //достаю значения и привожу к нужному для таблицы формоту
  const valuesArr = salesUnits.map(obj => Object.values(obj))

  const data = []
  for (let i = 0; i < productList.length; i++) {
    const select = arr => arr[i]
    if (i % 2 === 0) {
      data.push({
        key: i,
        tk: select(storeList),
        product: select(productList),
        forecast: 'Продано гр/шт',

        ...days.reduce((acc, day, currentIndex) => {
          acc[day] = valuesArr[i][currentIndex]
          return acc
        }, {})
      })
    } else {
      data.push({
        key: i,
        tk: select(storeList),
        product: select(productList),
        forecast: 'Точность %',

        ...days.reduce((acc, day, currentIndex) => {
          acc[day] = valuesArr[i][currentIndex]
          return acc
        }, {})
      })
    }
  }

  const daysColumns = days.map(day => ({
    title: day,
    dataIndex: day,
    key: day,
    width: 100,
    align: 'center',
    // fixed: 'right',
  }))

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
      columns={columns ? columns : []}
      dataSource={data ? data : []}
      // loading={true}
      // bordered
      size='middle'
      // scroll={{
      //   x: 'calc(700px + 50%)',
      // }}
    />
  )
}
