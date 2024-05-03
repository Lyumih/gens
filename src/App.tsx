import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeroPage } from './pages/HeroPage';
import { ConfigProvider } from 'antd';
import ru from 'antd/locale/ru_RU';
import { theme } from './theme';

function App() {
  return (
    <ConfigProvider theme={theme} locale={ru}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
