import React, { useRef } from 'react'
import { useGLTF, Text, Line } from '@react-three/drei'


const handleClick = (event, name, numerator, denominator, answer) => {
  // Handle the click event
  console.log('Model clicked! denominator: ' + denominator + " x numerator " + numerator + " = " + answer);
  console.log(" Correct? " + (numerator*denominator == answer)  + " event: " + event);
  event.stopPropagation();
  // Perform actions like changing the model's color or playing an animation
};

const onClickHandler = param => e => {
  // param is the argument you passed to the function
  // e is the event object that returned
};

const onClicked = (_name) => {
  console.log('Baloon clicked !', _name);
}

export function Balloon(props) {
  const { nodes, materials } = useGLTF('/hot_air_balloon.glb')
  return (
    <group {...props} dispose={null} onClick={ (event) => handleClick(event, props.name, props.numerator, props.denominator, props.answer) }>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hot_Air_Balloon_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, 57.838, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[25.874, 25.874, 19.525]}
        />
      </group>
      <Text position={[2, 14, 7]} color="#000000" fontSize="2" fontWeight="bold" anchorX="right" anchorY="middle" outlineWidth={.1} outlineColor="#FFFFFF" outlineBlur={0} overflowWrap="break-word" maxWidth={10}>{props.numerator}</Text>     
      <Text position={[2, 12, 7]} color="#000000" fontSize="2" fontWeight="bold" anchorX="right" anchorY="middle" outlineWidth={.1} outlineColor="#FFFFFF" outlineBlur={0} overflowWrap="break-word" maxWidth={10}>{props.denominator}</Text>  
      <Text position={[-2.2, 12, 7]} color="#000000" fontSize="2" fontWeight="bold" anchorX="right" anchorY="middle" outlineWidth={.1} outlineColor="#FFFFFF" outlineBlur={0} overflowWrap="break-word" maxWidth={10}>x</Text>         

      <Text position={[2.2, 12, 7]} color="#000000" fontSize="3" fontWeight="bold" anchorX="right" anchorY="middle"  overflowWrap="break-word" maxWidth={10}>_____</Text>     

      <Text position={[2, 9, 7]} color="#000000" fontSize="2" fontWeight="bold" anchorX="right" anchorY="middle" outlineWidth={.1} outlineColor="#FFFFFF" outlineBlur={0} overflowWrap="break-word" maxWidth={10}>{props.answer}</Text>                  
    </group>

  )
}

useGLTF.preload('/hot_air_balloon.glb')