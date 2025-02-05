import { useState } from 'react'

import './App.css'
import Hero from './components/custom/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Hero/>
      
    </div>
  )
}

export default App
