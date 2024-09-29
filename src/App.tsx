import { ThemeControl } from 'components'
import { MainRouter } from 'routes'

import './styles/index.css'

function App() {
  return (
    <div className='bg-baseBackground h-[100vh] w-[100vw]'>
      <h1 className='text-3xl font-bold underline text-primary'>Hello world!</h1>
      <ThemeControl />
      <MainRouter />
    </div>
  )
}

export default App
