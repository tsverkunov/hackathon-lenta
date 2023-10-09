import {Table} from 'antd'
import {useSelector} from "react-redux";

export default function StatsTable() {

  const forecast = useSelector(state => state.dataReducer.forecast)
  const productList = forecast.map(product => product.sku)
  const storeList = forecast.map(store => store.store)
  const salesUnits = forecast.map(units => units.sales_units)

  //достаю даты и привожу к нужному для таблицы формоту
  const keysArr = salesUnits.map(obj => Object.keys(obj))
  const days = keysArr.length ? keysArr[0].map(item => item.split('-').slice(1).reverse().join('.')) : []

  //достаю значения и привожу к нужному для таблицы формоту
  const valuesArr = salesUnits.map(obj => Object.values(obj))

  const data = []
  for (let i = 0; i < productList.length; i++) {
    const select = arr => arr[i]
    data.push({
      key: i,
      tk: select(storeList),
      product: select(productList),

      ...days.reduce((acc, day, currentIndex) => {
        acc[day] = valuesArr[i][currentIndex]
        return acc
      }, {}),
    })
  }

  const daysColumns = days.map(day => ({
    title: day,
    dataIndex: day,
    key: day,
    width: 70,
    // fixed: 'right',
  }))

  const columns = [
    {
      title: 'Категория/продукт',
      dataIndex: 'product',
      key: 'product',
      // width: 150,
      fixed: 'left',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'ТК',
      dataIndex: 'tk',
      key: 'tk',
      // width: 80,
      fixed: 'left',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'Прогноз',
      dataIndex: 'forecast',
      key: 'forecast',
      // width: 150,
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
