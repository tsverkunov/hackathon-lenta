import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import {ConfigProvider} from 'antd';
import theme from '../../utils/theme'
import Main from '../Main/Main.jsx'
import style from './App.module.css'
import Login from "../Login/Login.jsx";
import StartSelection from "../StartSelection/StartSelection.jsx";
import ProtectedRout from "../ProtectedRout/ProtectedRout.jsx";
import api from "../../utils/Api.js";
import {setLoggedIn} from "../../redux/formReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {setShops} from "../../redux/selectReducer.js";

function App() {
  const loggedIn = useSelector(state => state.formReducer.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = ({login, password}) => {
    api.login(login, password)
      .then((data) => {
        dispatch(setLoggedIn(true))
        navigate('/select')
        localStorage.setItem('token', data.auth_token)
        handleShops()
      })
      .catch((error) => {
        console.log('error :', error)
      })
  }

  const handleShops = () => {
    api.getShops()
      .then((data) => {
        dispatch(setShops(data.data))
      })
      .catch(error => {
        console.log('error :', error)
      })
  }

  return (
    <ConfigProvider theme={theme}>
      <div className={style.app}>
        <Routes>
          <Route path='/' element={<Login onLogin={handleLogin}/>}/>
          {/*<Route element={<ProtectedRout loggedIn={loggedIn}/>}>*/}
            <Route path='/select' element={<StartSelection/>}/>
            <Route path='/prediction' element={<Main/>}/>
            <Route path='/stats' element={<Main/>}/>
          {/*</Route>*/}
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </ConfigProvider>
  )
}

export default App
