import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user' element={<UserPage />} />

        {/* <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="test" element={<TestPage />} />
                <Route path="layout" element={<LayoutComponent />}>
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
