import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
