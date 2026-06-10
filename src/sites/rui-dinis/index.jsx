import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Solucoes from './pages/Solucoes.jsx'
import Sobre from './pages/Sobre.jsx'
import Contacto from './pages/Contacto.jsx'

// Self-contained site app. Mounted at /site/rui-dinis/* by SiteHost.
// Child route paths are RELATIVE (no leading slash) so they resolve under the parent.
export default function RuiDinisSite() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="solucoes" element={<Solucoes />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
