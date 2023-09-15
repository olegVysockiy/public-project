import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './modules/Header/header'
import AppRoutes from './routes/routes'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  )
}
