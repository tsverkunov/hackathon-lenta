import { Routes, Route, Navigate } from 'react-router-dom'
import Main from '../Main/Main.jsx'
import FormPage from '../FormPage/FormPage.jsx'
import style from './App.module.css'

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/prediction' element={<Main />} />
        <Route path='/stats' element={<Main />} />
        <Route path='/login' element={<FormPage />} />
        <Route path='/' element={<FormPage />} />
        {/* Other routes here */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
