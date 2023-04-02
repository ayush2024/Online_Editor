import React from 'react'
import Home from './compnents/Home'
import DataProvider from './context/Dataprovider'

const App = () => {
  return (
    <>
    <DataProvider>
      <Home />
    </DataProvider>
    </>
  )
}

export default App