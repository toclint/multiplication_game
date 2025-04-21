import "./styles.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";  // added useFrame and useThree
import * as THREE from 'three';
import { Environment, OrbitControls, Float, Cloud, Clouds, CloudInstance, CameraControls } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState, useCallback } from "react";  // added useRef, useEffect, useState, useCallback
import {Spaceship} from "./Spaceship";
import { Balloon } from "./models/Balloon";

import { GLTFLoader } from "three/examples/jsm/Addons.js";

import { Line } from '@react-three/drei';  // added
import { motion, useMotionValue, useTransform } from 'framer-motion';  // added
import FloatingClouds from "./FloatingClouds";

import * as VARS from "./Constants";

import { GetData, GetAllProblems } from "./Utils";


export default function App() {


// removed controlnode  <OrbitControls />
/************  start Added Code  *************/
// Define the path the camera will follow
const centerDX = 25;
const centerDY = 10;
let pPoints = new Array();
for( let i = 150; i > 0; i -= 10 ) {
  pPoints.push(  new THREE.Vector3(centerDX, centerDY, i ) );
}
  

for( let i = 0; i > -750; i -= 10) {
  pPoints.push(  new THREE.Vector3(centerDX, centerDY, i ) );
}

const pathPoints = pPoints;

const Problems = GetAllProblems();


/*
const pathPoints2 = [
  new THREE.Vector3(centerDX, centerDY, 150),
  new THREE.Vector3(centerDX, centerDY, 140),  
  new THREE.Vector3(centerDX, centerDY, 130),  
  new THREE.Vector3(centerDX, centerDY, 120), 
  new THREE.Vector3(centerDX, centerDY, 110),
  new THREE.Vector3(centerDX, centerDY, 100),
  new THREE.Vector3(centerDX, centerDY, 90),     
  new THREE.Vector3(centerDX, centerDY, 80),
  new THREE.Vector3(centerDX, centerDY, 70),
  new THREE.Vector3(centerDX, centerDY, 60),
  new THREE.Vector3(centerDX, centerDY, 50),
  new THREE.Vector3(centerDX, centerDY, 40),  
  new THREE.Vector3(centerDX, centerDY, 30),  
  new THREE.Vector3(centerDX, centerDY, 20),  
  new THREE.Vector3(centerDX, centerDY, 10),  
  new THREE.Vector3(centerDX, centerDY, 0),  
  new THREE.Vector3(centerDX, centerDY, -10),
  new THREE.Vector3(centerDX, centerDY, -20),
  new THREE.Vector3(centerDX, centerDY, -30),
  new THREE.Vector3(centerDX, centerDY, -40),  
  new THREE.Vector3(centerDX, centerDY, -50),
  new THREE.Vector3(centerDX, centerDY, -60),
  new THREE.Vector3(centerDX, centerDY, -70),
  new THREE.Vector3(centerDX, centerDY, -80),
  new THREE.Vector3(centerDX, centerDY, -90),
  new THREE.Vector3(centerDX, centerDY, -100),
  new THREE.Vector3(centerDX, centerDY, -110),
  new THREE.Vector3(centerDX, centerDY, -120),
  new THREE.Vector3(centerDX, centerDY, -130),
  new THREE.Vector3(centerDX, centerDY, -140),      
  new THREE.Vector3(centerDX, centerDY, -150),
  new THREE.Vector3(centerDX, centerDY, -160),
  new THREE.Vector3(centerDX, centerDY, -170),
  new THREE.Vector3(centerDX, centerDY, -180),
  new THREE.Vector3(centerDX, centerDY, -190),
  new THREE.Vector3(centerDX, centerDY, -200),

];
*/

const SHIP_SCALE = 10;

const SHIPS_GROUP1_Z = -300;
const SHIPS_GROUP2_Z = -600;
const SHIPS_GROUP3_Z = -900;


// const SHIP_ROTATION_INTENSITY = 1;

const FollowPathCamera = () => {
  const { camera } = useThree();
  const path = new THREE.CatmullRomCurve3(pathPoints);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [isFollowing, setIsFollowing] = useState(true);

  const speed = 0.0005; // Adjust for camera speed
  const lookAhead = 0.01; // How far ahead on the path the camera looks



  useFrame(() => {
      if (isFollowing) {
          // Get the point on the path based on the current progress
          const newPosition = path.getPoint(progress);
          camera.position.copy(newPosition);

          // Calculate a point slightly ahead on the path to look at
          const lookAtPosition = path.getPoint((progress + lookAhead) % 1);
          camera.lookAt(lookAtPosition);

          // Increment progress, loop when it reaches 1
          setProgress((p) => (p + speed) % 1);
      }
  });

  const handleToggleFollow = () => {
      setIsFollowing(!isFollowing);
      // Reset progress when starting to follow again.
      if (!isFollowing) {
        setProgress(0);
      }
  };

  return (
      <group>
          <Line points={pathPoints} color="white" lineWidth={2} />
          <mesh position={[0,5,0]}>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshBasicMaterial color="red" />
          </mesh>

      </group>
  );
};

/************  end added code ********* */


  return (
    <div className="App">
<div>hi</div>
      <Canvas                 
          camera={{
                    fov: 75,
                    position: [0, 0, 100], // Initial camera position
                }}>
        <FollowPathCamera />
        <Suspense fallback={null}> 
/**** clouds */


<FloatingClouds/>


/********  End Clouds */
        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={.5} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Balloon rotation={[0, 120, 0]} position={[-20.75, 0, 0]} name="BE" numerator={Problems.VALUES[0][0].numerator} denominator={Problems.VALUES[0][0].denominator} answer={Problems.VALUES[0][0].answer}/> 
        </Float>            

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Balloon rotation={[0, 0, 0]} position={[15.75, 0, 0]} name="CE" numerator={Problems.VALUES[0][1].numerator} denominator={Problems.VALUES[0][1].denominator} answer={Problems.VALUES[0][1].answer}/>
        </Float>     

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Balloon rotation={[0, -120, 0]} position={[65.75, 0, 0]} name="DE" numerator={Problems.VALUES[0][2].numerator} denominator={Problems.VALUES[0][2].denominator} answer={Problems.VALUES[0][2].answer}/>
        </Float>                 

/***** SPACESHIPS  ***/
/*** Group 1 */
        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={VARS.SHIP_ROTATION_INTENSITY} // XYZ rotation intensity, defaults to 1
        floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Spaceship position={[50, 0, SHIPS_GROUP1_Z]} name="A" label="99" scale={SHIP_SCALE} numerator={Problems.VALUES[1][0].numerator} denominator={Problems.VALUES[1][0].denominator} answer={Problems.VALUES[1][0].answer}/> 
        </Float>

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={VARS.SHIP_ROTATION_INTENSITY} // XYZ rotation intensity, defaults to 1
        floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Spaceship position={[-50, 0, SHIPS_GROUP1_Z]} name="B" label="7"  scale={SHIP_SCALE}  numerator={Problems.VALUES[1][1].numerator} denominator={Problems.VALUES[1][1].denominator} answer={Problems.VALUES[1][1].answer}/> 
        </Float>

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={VARS.SHIP_ROTATION_INTENSITY} // XYZ rotation intensity, defaults to 1
        floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Spaceship position={[0, 0, SHIPS_GROUP1_Z]} name="B" label="7"  scale={SHIP_SCALE} numerator={Problems.VALUES[1][2].numerator} denominator={Problems.VALUES[1][2].denominator} answer={Problems.VALUES[1][2].answer}/> 
        </Float>    

/**  Group 2  ****/ 

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Balloon rotation={[0, 120, 0]} position={[-20.75, 0,  SHIPS_GROUP2_Z+100]} numerator={Problems.VALUES[2][0].numerator} denominator={Problems.VALUES[2][0].denominator} answer={Problems.VALUES[2][0].answer}/> 
        </Float>       

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Balloon rotation={[0, 0, 0]} position={[15.75, 0,  SHIPS_GROUP2_Z+100]} name="BE" numerator={Problems.VALUES[2][1].numerator} denominator={Problems.VALUES[2][1].denominator} answer={Problems.VALUES[2][1].answer}/> 
        </Float>    

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Balloon rotation={[0, -120, 0]} position={[65.5, 0,  SHIPS_GROUP2_Z+100]} name="BE" numerator={Problems.VALUES[2][2].numerator} denominator={Problems.VALUES[2][2].denominator} answer={Problems.VALUES[2][2].answer}/> 
        </Float>                        
     

/** Group 3 */

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={VARS.SHIP_ROTATION_INTENSITY} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Spaceship position={[-1.75, 0, SHIPS_GROUP3_Z]} name="E" label="11"/> 
        </Float> 

        <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={VARS.SHIP_ROTATION_INTENSITY} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ><Spaceship position={[2.75, 0, SHIPS_GROUP3_Z]} name="F" label="3"/> 
        </Float>                      

        
        <Environment preset="sunset" background backgroundBlurriness={0.5} />
        </Suspense>
        
      </Canvas>
    </div>
  );
}
