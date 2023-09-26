import { Routes, Route, Navigate } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import style from './App.module.css'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* Other routes here */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
