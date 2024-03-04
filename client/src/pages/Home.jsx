import { useState } from 'react'
import Hero from './DropdownComponents.jsx/Hero'
import Louisa from './DropdownComponents.jsx/Louisa'
import WhatWeDo from './DropdownComponents.jsx/WhatWeDo'
import Testimonials from './DropdownComponents.jsx/Testimonials'
import WhatWeDo2 from './DropdownComponents.jsx/WhatWeDo2'
import WhatWeDo3 from './DropdownComponents.jsx/WhatWeDo3'
import ComingSoon from './DropdownComponents.jsx/ComingSoon'

export default function Home() {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY > 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      {/* COMPONENTS */}
      <div>
        <Hero />
      </div>
      <div>
        <Louisa />
      </div>
      <div className="min-h-screen mb-20">
        <WhatWeDo />
      </div>
      <div>
        <WhatWeDo2 />
      </div>
      <div>
        <WhatWeDo3 />
      </div>
      <div>
        <ComingSoon />
      </div>
      <div>
        <Testimonials />
      </div>
    </>
  )
}

