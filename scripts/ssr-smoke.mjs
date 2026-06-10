// Runtime smoke test: SSR-render every page of every wired site and report throws.
// Mirrors the real mount (parent splat route /site/:slug/*) so relative child routes match.
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import { Routes, Route } from 'react-router-dom'

const SITES = {
  filipitsch: ['', 'servicos', 'sobre', 'contacto'],
  'reparacao-tv-lisboa': ['', 'servicos', 'sobre', 'contacto'],
  'pedrita-studio': ['', 'projetos', 'estudio', 'contacto'],
  'tecnico-frio': ['', 'servicos', 'sobre', 'contacto'],
  nipolandia: ['', 'servicos', 'sobre', 'contacto'],
  'farol-vibrante': ['', 'servicos', 'sobre', 'contacto'],
  fornoportugal: ['', 'servicos', 'sobre', 'contacto'],
  iri: ['', 'servicos', 'sobre', 'contacto'],
  'conta-100': ['', 'servicos', 'sobre', 'contacto'],
  'rui-dinis': ['', 'solucoes', 'sobre', 'contacto'],
  doublespace: ['', 'servicos', 'sobre', 'contacto'],
  'linda-mulher': ['', 'servicos', 'sobre', 'contacto'],
  imobenfica: ['', 'imoveis', 'sobre', 'contacto'],
}

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })

let pass = 0
let fail = 0
for (const [slug, routes] of Object.entries(SITES)) {
  let mod
  try {
    mod = await vite.ssrLoadModule(`/src/sites/${slug}/index.jsx`)
  } catch (e) {
    console.log(`LOAD FAIL  ${slug}  → ${e.message.split('\n')[0]}`)
    fail += routes.length
    continue
  }
  const App = mod.default
  for (const r of routes) {
    const loc = `/site/${slug}${r ? '/' + r : ''}`
    try {
      renderToString(
        React.createElement(
          StaticRouter,
          { location: loc },
          React.createElement(
            Routes,
            null,
            React.createElement(Route, { path: '/site/:slug/*', element: React.createElement(App) }),
          ),
        ),
      )
      pass++
    } catch (e) {
      fail++
      console.log(`RENDER FAIL  ${loc}  → ${e.message.split('\n')[0]}`)
    }
  }
}

await vite.close()
console.log(`\n${pass} pages OK, ${fail} failed`)
process.exit(fail ? 1 : 0)
