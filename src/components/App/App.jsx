import {Navigate, Route, Routes} from 'react-router-dom'
import {ConfigProvider} from 'antd';
import theme from '../../utils/theme'
import Main from '../Main/Main.jsx'
import style from './App.module.css'
import Login from "../Login/Login.jsx";
import StartSelection from "../StartSelection/StartSelection.jsx";
import ProtectedRout from "../ProtectedRout/ProtectedRout.jsx";

function App() {
  let loggedIn = true;
  return (
    <ConfigProvider theme={theme}>
      <div className={style.app}>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route element={<ProtectedRout loggedIn={loggedIn}/>}>
            <Route path='/' element={<StartSelection/>}/>
            <Route path='/prediction' element={<Main/>}/>
            <Route path='/stats' element={<Main/>}/>
          </Route>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </ConfigProvider>
  )
}

export default App
