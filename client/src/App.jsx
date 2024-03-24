import { Outlet } from 'react-router-dom'
import FooterSection from './components/FooterSection'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
      <FooterSection />
    </>
  )
}

