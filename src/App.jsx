import { Routes, Route } from 'react-router-dom'
import Portfolio from './portfolio/Portfolio.jsx'
import SiteHost from './shared/SiteHost.jsx'
import ScrollToTop from './shared/ScrollToTop.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/site/:slug/*" element={<SiteHost />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </>
  )
}
