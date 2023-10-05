import { Table } from 'antd'
import './DataTable.module.css'

export default function DataTable() {
  // Mock data
  const groupArr = ['Хлеб', 'Сухарики']

  const data = []
  const tkArr = ['Орион', 'Альфа']

  const categoryArr = ['Черный вкусный хлеб', 'Белый вкусный хлеб', 'Сухарики']
  const subcategoryArr = ['Черный', 'Белый', 'Сухарики']
  const productArr = [
    'Черный хлеб «Вкусняшкино»',
    'Белый хлеб «МосХлеб»',
    'Сухарики «Кириешки»',
    'Очень вкусные сухарики с невероятно длинным названием, которое не помещается в ячейку',
  ]
  const days = [
    '01.01',
    '02.01',
    '03.01',
    '04.01',
    '05.01',
    '06.01',
    '07.01',
    '08.01',
    '09.01',
    '10.01',
    '11.01',
    '12.01',
    '13.01',
    '14.01',
  ]

  for (let i = 0; i < 100; i++) {
    const selectRandom = arr => arr[Math.floor(Math.random() * arr.length)]
    data.push({
      key: i,
      tk: selectRandom(tkArr),
      group: selectRandom(groupArr),
      category: selectRandom(categoryArr),
      subcategory: selectRandom(subcategoryArr),
      product: selectRandom(productArr),
      // add random qty for each day from days array
      ...days.reduce((acc, day) => {
        acc[day] = Math.floor(Math.random() * 1000)
        return acc
      }, {}),
    })
  }

  const daysColumns = days.map(day => ({
    title: day,
    dataIndex: day,
    key: day,
    width: 50,
    // fixed: 'right',
  }))

  const columns = [
    {
      title: 'Продукт/гр',
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
      width: 80,
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
      dataSource={data}
      // loading={true}
      // bordered
      size='middle'
      // scroll={{
      //   x: 'calc(700px + 50%)',
      // }}
    />
  )
}
