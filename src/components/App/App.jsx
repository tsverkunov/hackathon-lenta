import {Navigate, Route, Routes} from 'react-router-dom'
import Main from '../Main/Main.jsx'
import style from './App.module.css'
import Login from "../Login/Login.jsx";
import StartSelection from "../StartSelection/StartSelection.jsx";

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/prediction' element={<Main />} />
        <Route path='/stats' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<StartSelection />} />
        {/* Other routes here */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
