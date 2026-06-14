import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Tratamentos from './pages/Tratamentos.jsx'
import Sobre from './pages/Sobre.jsx'
import Contacto from './pages/Contacto.jsx'

// Self-contained site app. Mounted at /site/nova-dentismed/* by SiteHost.
// Child route paths are RELATIVE (no leading slash) so they resolve under the parent.
export default function NovaDentismedSite() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tratamentos" element={<Tratamentos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
