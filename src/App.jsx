import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

const routerBasename = (() => {
  const b = import.meta.env.BASE_URL
  if (b === '/' || b === './') return undefined
  return b.replace(/\/$/, '') || undefined
})()

function App() {
  return (
    <>
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
