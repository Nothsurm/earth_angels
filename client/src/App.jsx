import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import FooterSection from './components/FooterSection'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </>
  )
}

