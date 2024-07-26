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
  // const { scene } = useFBX("/a.fbx");
  const obj = useLoader(OBJLoader, '/a.obj')
  return <primitive object={scene} {...props}></primitive>;
}
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
// dpr={[1,2]} shadows camera={{fov:45}}
// speed={1.5} global zoom={.5} polar={[0,Math.PI/2]}
export default function Model1() {
  return (
    // <Canvas  style={{"width":"100vw","height":"100vh"}}>
    //   {/* <color attach={"background"} args={["#000000"]}></color> */}
    //   <PresentationControls >
    //     <Stage environment={null}>
    //       <Model />
    //     </Stage>
    //   </PresentationControls>
    // </Canvas>
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
        
           <Model />
        
       
        <Environment preset="city"></Environment>
        <OrbitControls />
      </Canvas>
    </div>

  );
}
