import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Profile from './gallary/profile'
// import Gallery from './gallary/gallary'
// import TodoList from './todo-list/todo'
import Avatar from './gallary/Avatar'
import Profile from './gallary/Profile'
import PackageList from './components/PackageList'
import Counter from './Counter'

function App() {

  if(1==1) {
    const [state] = useState(0);
  }
  return (
    <>
    <PackageList />
    <Counter />
    {/* <Profile /> */}
     {/* <Gallery /> */}
     {/* <TodoList /> */}
    </>
  )
}

export default App
