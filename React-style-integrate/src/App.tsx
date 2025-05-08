import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from './component/Title'
import { Wrapper } from './component/wrapper'
import { Button } from './component/Button'



function App() {

  return (
    <>
     {/* <h1>Hello World!</h1> */}
     <Wrapper>
      <Title>
        Hello world !
      </Title>

      
     </Wrapper>
     <Button>
        Normal
      </Button>
      <Button $primary>Primary</Button>
     
    
    </>
  )
}

export default App
