/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Dropdown } from 'antd'
import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import {
  setSelectedCity,
  setSelectedShop,
} from '../../redux/dataReducer.js'
import { setLoggedIn } from '../../redux/formReducer'
import api from '../../utils/Api.js'
import style from './Header.module.css'

export default function Header({ type }) {
  const dispatch = useDispatch()
  const shops = useSelector(state => state.dataReducer.shops)
  const selectedShop = useSelector(state => state.dataReducer.selectedShop)
  const cities = useSelector(state => state.dataReducer.cities)
  const selectedCity = useSelector(state => state.dataReducer.selectedCity)

  useEffect(() => {
    
  }, [])

  const handleLogout = () => {
    api
      .logout()
      .then(() => {
        localStorage.removeItem('token')
        dispatch(setLoggedIn(false))
      })
      .catch(error => {
        console.log('error :', error)
      })
  }

  return (
    <header className={style.header}>
      <div className={style.logo} />
      <div className={style.wrapper}>
        <Dropdown
          menu={{
            items: cities.map(city => ({ key: city, label: city })),
            selectable: true,
            defaultSelectedKeys: selectedCity,
            onClick: ({ key }) => {
              dispatch(setSelectedCity(key))
            },
          }}
        >
          <a href='#' className={style.select}>
            {selectedCity}
            <DownOutlined className={style.selectIcon} />
          </a>
        </Dropdown>
        {type === 'forecast' && (
          <Dropdown
            menu={{
              items: shops.map(shop => ({ key: shop, label: shop })),
              selectable: true,
              defaultSelectedKeys: selectedShop,
              onClick: ({ key }) => {
                dispatch(setSelectedShop(key))
              },
            }}
          >
            <a href='#' className={style.select}>
              {selectedShop}
              <DownOutlined className={style.selectIcon} />
            </a>
          </Dropdown>
        )}
        <button className={style.button} onClick={handleLogout}>
          <LogoutOutlined style={{ color: '#fff' }} size='32px' />
        </button>
      </div>
    </header>
  )
}
