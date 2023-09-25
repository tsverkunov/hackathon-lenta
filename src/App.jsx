import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className='app'>
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
