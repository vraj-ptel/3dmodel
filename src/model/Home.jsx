import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Link to={'/model1'}>model1</Link>
        <Link to={'/model2'}>model2</Link>
    </>
  )
}

export default Home