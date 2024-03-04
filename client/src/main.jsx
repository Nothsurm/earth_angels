import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Design from './pages/Design.jsx'
import Contact from './pages/Contact.jsx'
import Louisa from './pages/Louisa.jsx'
import WhatWeDo from './pages/WhatWeDo.jsx'
import Testimonials from './pages/Testimonials.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Home />}></Route>
      <Route path='/design' element={<Design />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/louisa' element={<Louisa />}></Route>
      <Route path='/what-we-do' element={<WhatWeDo />}></Route>
      <Route path='/testimonials' element={<Testimonials />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
