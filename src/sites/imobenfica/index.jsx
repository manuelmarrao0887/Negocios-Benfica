import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Imoveis from './pages/Imoveis.jsx'
import Sobre from './pages/Sobre.jsx'
import Contacto from './pages/Contacto.jsx'

// Self-contained site app. Mounted at /site/imobenfica/* by SiteHost.
// Child route paths are RELATIVE (no leading slash) so they resolve under the parent.
export default function ImobenficaSite() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="imoveis" element={<Imoveis />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
