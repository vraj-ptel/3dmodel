import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Model1 from './model/Model1'
import Model2 from './model/Model2'
import Home from './model/Home'
const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          
          <Route path='/model1' element={<Model1 />}></Route>
          <Route path='/model2' element={<Model2 />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App