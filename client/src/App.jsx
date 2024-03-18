import { Outlet } from 'react-router-dom'
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

