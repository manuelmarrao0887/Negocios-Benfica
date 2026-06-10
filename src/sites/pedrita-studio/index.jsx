import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx'
import Estudio from './pages/Estudio.jsx'
import Contacto from './pages/Contacto.jsx'

// Self-contained site app. Mounted at /site/pedrita-studio/* by SiteHost.
// Child route paths are RELATIVE (no leading slash) so they resolve under the parent.
export default function PedritaStudioSite() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="estudio" element={<Estudio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
