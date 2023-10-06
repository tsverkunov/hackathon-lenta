import { Dropdown } from 'antd'
import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import style from './Header.module.css'

const items = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
]

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}/>
      <div className={style.wrapper}>
        <Dropdown
          menu={{
            items,
            selectable: true,
          }}
        >
          <a href='#' className={style.select}>
            Москва и МО
            <DownOutlined className={style.selectIcon} />
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
            selectable: true,
          }}
        >
          <a href='#' className={style.select}>
            ТК №8
            <DownOutlined className={style.selectIcon} />
          </a>
        </Dropdown>
        <button className={style.button}>
          <LogoutOutlined style={{ color: '#fff' }} size='32px' />
        </button>
      </div>
    </header>
  )
}
