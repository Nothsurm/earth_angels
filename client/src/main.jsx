import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Design from './pages/Design.jsx'
import Contact from './pages/Contact.jsx'
import Visualisation from './pages/Visualisation.jsx'
import Tourism from './pages/Tourism.jsx'
import AboutUs from './pages/AboutUs.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Home />}></Route>
      <Route path='/design' element={<Design />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/visualisation' element={<Visualisation />}></Route>
      <Route path='/tourism' element={<Tourism />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
      <Route path='/terms-conditions' element={<TermsAndConditions />}></Route>
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
