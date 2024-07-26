import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './model/Home'
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { useFBX } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Environment } from "@react-three/drei";
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from "react";




function Model(props) {
  const { scene } = useGLTF("/a.glb");
  const obj = useLoader(OBJLoader, '/a.obj')
  return <primitive object={scene} {...props}></primitive>;
}
function Model1(props) {
  const { scene } = useGLTF("/b.glb");
  return <primitive object={scene} {...props}></primitive>;
}


 function Model_1() {
  return (
  
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Canvas >
        
           <Model />
        
       
        <Environment preset="city"></Environment>
        <OrbitControls />
      </Canvas>
    </div>

  );
}
function Model_2() {
  return (

 
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >

      <Canvas>
        
           <Model1 />
        
       
        <Environment preset="city"></Environment>
        <OrbitControls />
      </Canvas>
    </div>

  );
}
const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          
          <Route path='/model1' element={<Model_1 />}></Route>
          <Route path='/model2' element={<Model_2 />}></Route>
          <Route path='/' element={<Home/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App