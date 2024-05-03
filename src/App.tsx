import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeroPage } from './pages/HeroPage';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
