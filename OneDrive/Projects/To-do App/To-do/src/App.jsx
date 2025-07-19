import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-sky-100 to-indigo-200">
        <div className="h-16 w-full text-3xl flex items-center justify-center font-extrabold text-gray-700 bg-gray-100 border border-gray-300 shadow-sm rounded-md">
          Welcome to Task Manager App
        </div>
      </div>
    </>
  )
}

export default App
