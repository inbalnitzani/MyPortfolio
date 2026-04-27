import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

/** GitHub Pages serves the app at /<repo>/ — basename comes from the URL (works with relative asset base). */
function getRouterBasename() {
  if (typeof window === 'undefined') return undefined
  let path = window.location.pathname
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1)
  path = path.replace(/\/index\.html$/i, '')
  if (!path || path === '/') return undefined
  return path
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
