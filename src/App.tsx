import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.tsx'
import { MainNavbar } from './layout/Navbar.tsx'
import { ExpandableCardDemo } from './components/Cards/Menu.tsx'
import { TextGenerateEffectDemo } from './components/Cards/Homecard.tsx'

function App() {

  return (
    <div className='container'>
    <MainNavbar/>
    <div className='my-24'>
    <TextGenerateEffectDemo/>
    </div>
    <ExpandableCardDemo/>
     <div className="p-4 flex justify-center">
      </div>
      <div className='bg-blue-500 text-white p-4 text-center'>This is a Tailwind CSS styled banner!
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="starter-kit logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
  
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </div>
  )
}

export default App
