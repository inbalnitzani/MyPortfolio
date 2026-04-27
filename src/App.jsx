import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

/** Must stay aligned with `base` in vite.config.js (same subpath as GitHub Pages URL). */
function getRouterBasename() {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/' || base === './') return undefined
  return base.replace(/\/$/, '') || undefined
}

const routerBasename = getRouterBasename()

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
