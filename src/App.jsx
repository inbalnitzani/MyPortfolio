import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

/**
 * GitHub Project Pages: app lives at https://<user>.github.io/<repoName>/
 * With relative asset base, we resolve the router basename from the URL in production
 * (no need to hard-code the repo name in vite.config).
 */
function getRouterBasename() {
  if (import.meta.env.DEV) return undefined
  if (typeof window === 'undefined') return undefined
  const raw = window.location.pathname.replace(/\/$/, '') || '/'
  if (raw === '/' || raw === '') return undefined
  return raw
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
