import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import theme from '../../utils/theme'
import Main from '../Main/Main.jsx'
import style from './App.module.css'
import Login from '../Login/Login.jsx'
import StartSelection from '../StartSelection/StartSelection.jsx'
import ProtectedRout from '../ProtectedRout/ProtectedRout.jsx'
import api from '../../utils/Api.js'
import { setLoggedIn } from '../../redux/formReducer.js'
import { useDispatch, useSelector } from 'react-redux'
import { setShops } from '../../redux/selectReducer.js'
import {
  setShops as setDataShops,
  setCities,
} from '../../redux/dataReducer.js'

function App() {
  const loggedIn = useSelector(state => state.formReducer.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = ({ login, password }) => {
    localStorage.removeItem('token')
    api
      .login(login, password)
      .then(data => {
        dispatch(setLoggedIn(true))
        navigate('/select')
        localStorage.setItem('token', data.auth_token)
        handleShops()
      })
      .catch(error => {
        console.log('error :', error)
      })
  }

  const handleShops = () => {
    api
      .getShops()
      .then(data => {
        dispatch(setShops(data.data))
        const shopTitles = data.data.map(shop => shop.title)
        dispatch(setDataShops(shopTitles))
        const uniqueCities = [...new Set(data.data.map(shop => shop.city))]
        dispatch(setCities(uniqueCities))
      })
      .catch(error => {
        console.log('error :', error)
      })
  }

  return (
    <ConfigProvider theme={theme}>
      <div className={style.app}>
        <Routes>
          <Route path='/' element={<Login onLogin={handleLogin} />} />
          <Route element={<ProtectedRout loggedIn={loggedIn} />}>
            <Route path='/select' element={<StartSelection />} />
            <Route path='/forecast' element={<Main type='forecast' />} />
            <Route path='/stats' element={<Main type='stats' />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </ConfigProvider>
  )
}

export default App
