import { Table } from 'antd'
import './DataTable.module.css'

export default function DataTable() {
  // Mock data
  const daysDataFromServer = [
    {
      day: '01.01.2021',
      qty: 1,
    },
    {
      day: '02.01.2021',
      qty: 322,
    },
    {
      day: '03.01.2021',
      qty: 4123,
    },
  ]
  const daysData = []
  const groupArr = ['Хлеб', 'Сухарики']
  const groupFiltersArr = groupArr.map(group => ({
    text: group,
    value: group,
  }))

  daysDataFromServer.forEach(dayData => {
    daysData.push({
      title: dayData.day,
      dataIndex: dayData.day,
      key: dayData.day,
      width: 55,
      fixed: 'right',
      // TO-DO: fix sorter
      sorter: (a, b) => a.day - b.day,
    })
  })

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

  for (let i = 0; i < 100; i++) {
    const selectRandom = arr => arr[Math.floor(Math.random() * arr.length)]
    data.push({
      key: i,
      tk: selectRandom(tkArr),
      group: selectRandom(groupArr),
      category: selectRandom(categoryArr),
      subcategory: selectRandom(subcategoryArr),
      product: selectRandom(productArr),
      '01.01.2021': Math.floor(Math.random() * 100),
      '02.01.2021': Math.floor(Math.random() * 100),
      '03.01.2021': Math.floor(Math.random() * 100),
    })
  }

  const columns = [
    {
      title: 'ТК',
      dataIndex: 'tk',
      key: 'tk',
      width: 50,
      fixed: 'left',
      filters: [
        {
          text: 'Орион',
          value: 'Альфа',
        },
        {
          text: 'Альфа',
          value: 'Альфа',
        },
      ],
      // TO-DO: fix filter
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Группа',
      dataIndex: 'group',
      key: 'group',
      width: 100,
      fixed: 'left',
      filters: groupFiltersArr,
      // TO-DO: fix filter
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
      width: 100,
      fixed: 'left',
    },
    {
      title: 'Подкатегория',
      dataIndex: 'subcategory',
      key: 'subcategory',
      width: 120,
      fixed: 'left',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'Товар',
      dataIndex: 'product',
      key: 'product',
      width: 150,
      fixed: 'left',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'Дни',
      children: daysData,
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      size='middle'
      // scroll={{
      //   x: 'calc(700px + 50%)',
      //   y: 240,
      // }}
    />
  )
}
