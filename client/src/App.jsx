import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import FooterSection from './components/FooterSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </>
  )
}

