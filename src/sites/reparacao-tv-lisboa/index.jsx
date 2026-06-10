import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Servicos from './pages/Servicos.jsx'
import Sobre from './pages/Sobre.jsx'
import Contacto from './pages/Contacto.jsx'

// Self-contained site app. Mounted at /site/reparacao-tv-lisboa/* by SiteHost.
// Child route paths are RELATIVE (no leading slash) so they resolve under the parent.
export default function ReparacaoTvLisboaSite() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
