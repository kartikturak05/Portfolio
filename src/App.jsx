import React from 'react'
import LoadingIntro from './components/ui/LoadingIntro'
<link href="/src/styles.css" rel="stylesheet"></link>

const App = () => {
  return (
    <LoadingIntro onComplete={() => console.log("Loading complete!")} />  
  )
}

export default App