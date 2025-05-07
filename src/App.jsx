import './App.css'
import Home from './Components/Home'
import { Analytics } from "@vercel/analytics/react"

function App() {
 

  return (
    <div className=''>
     <Home/>
    <Analytics/>
    </div>
  )
}

export default App
