/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Dropdown } from 'antd'
import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCity, setSelectedShop } from '../../redux/dataReducer.js'
import {changeLogin, changePassword, setLoggedIn} from '../../redux/formReducer'
import api from '../../utils/Api.js'
import style from './Header.module.css'

export default function Header({ type, handleForecastUpdate }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const shops = useSelector(state => state.dataReducer.shops)
  const selectedShop = useSelector(state => state.dataReducer.selectedShop)
  const cities = useSelector(state => state.dataReducer.cities)
  const selectedCity = useSelector(state => state.dataReducer.selectedCity)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (selectedShop && !initialized) {
      setInitialized(true)
    } else if (initialized) {
      handleForecastUpdate()
    }
  }, [selectedShop, initialized])

  const handleLogout = () => {
    api
      .logout()
      .then(() => {
        dispatch(setLoggedIn(false))
        dispatch(changeLogin(''))
        dispatch(changePassword(''))
      })
      .catch(error => {
        console.log('error :', error)
      })
      .finally(() => {
        localStorage.clear()
        navigate('/')
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
          <Link to='#' className={style.select}>
            {selectedCity}
            <DownOutlined className={style.selectIcon} />
          </Link>
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
            <Link to='#' className={style.select}>
              {selectedShop}
              <DownOutlined className={style.selectIcon} />
            </Link>
          </Dropdown>
        )}
        <button className={style.button} onClick={handleLogout}>
          <LogoutOutlined style={{ color: '#fff' }} size='32px' />
        </button>
      </div>
    </header>
  )
}
