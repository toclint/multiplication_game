
import { Canvas, useFrame, useThree } from "@react-three/fiber";  // added useFrame and useThree
import * as THREE from 'three';
import { Environment, OrbitControls, Float, Cloud, Clouds, CloudInstance, CameraControls } from "@react-three/drei";
import * as Constants from './Constants';


const FloatingClouds = () => {
    return (
        <>

        <Float
                speed={Constants.CLOUD_SPEED} // Animation speed, defaults to 1
                rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                <Clouds material={THREE.MeshBasicMaterial} position={[-30, 0, -100]}>
                    <Cloud segments={40} bounds={[10, 2, 2]} volume={30} color="white" />
                    <Cloud seed={1} scale={4} volume={10} color="lightgrey" fade={100} />
                </Clouds>            
        </Float>
        <Float
                speed={3} // Animation speed, defaults to 1
                rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                <Clouds material={THREE.MeshBasicMaterial} position={[30, 0, -50]}>
                    <Cloud segments={40} bounds={[10, 2, 2]} volume={20} color="white" />
                    <Cloud seed={1} scale={3} volume={10} color="lightgrey" fade={100} />
                </Clouds>            
        </Float>

        <Float
                speed={3} // Animation speed, defaults to 1
                rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                <Clouds material={THREE.MeshBasicMaterial} position={[-70, 0, -250]}>
                    <Cloud segments={40} bounds={[10, 2, 2]} volume={30} color="white" />
                    <Cloud seed={1} scale={4} volume={10} color="lightgrey" fade={100} />
                </Clouds>            
        </Float>
        <Float
                speed={3} // Animation speed, defaults to 1
                rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                <Clouds material={THREE.MeshBasicMaterial} position={[70, 0, -200]}>
                    <Cloud segments={40} bounds={[10, 2, 2]} volume={20} color="white" />
                    <Cloud seed={1} scale={3} volume={10} color="lightgrey" fade={100} />
                </Clouds>            
        </Float>

            <Float
                    speed={3} // Animation speed, defaults to 1
                    rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                    <Clouds material={THREE.MeshBasicMaterial} position={[-150, 0, -350]}>
                        <Cloud segments={40} bounds={[10, 2, 2]} volume={30} color="white" />
                        <Cloud seed={1} scale={20} volume={10} color="lightgrey" fade={100} />
                    </Clouds>            
            </Float>
            <Float
                    speed={3} // Animation speed, defaults to 1
                    rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                    <Clouds material={THREE.MeshBasicMaterial} position={[170, 0, -400]}>
                        <Cloud segments={40} bounds={[10, 2, 2]} volume={20} color="white" />
                        <Cloud seed={1} scale={30} volume={10} color="lightgrey" fade={100} />
                    </Clouds>            
            </Float>

            <Float
                    speed={3} // Animation speed, defaults to 1
                    rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                    <Clouds material={THREE.MeshBasicMaterial} position={[-250, 0, -550]}>
                        <Cloud segments={40} bounds={[10, 2, 2]} volume={30} color="white" />
                        <Cloud seed={1} scale={20} volume={10} color="lightgrey" fade={100} />
                    </Clouds>            
            </Float>
            <Float
                    speed={3} // Animation speed, defaults to 1
                    rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                    <Clouds material={THREE.MeshBasicMaterial} position={[70, 0, -600]}>
                        <Cloud segments={40} bounds={[10, 2, 2]} volume={20} color="white" />
                        <Cloud seed={1} scale={30} volume={10} color="lightgrey" fade={100} />
                    </Clouds>            
            </Float>


            <Float
                    speed={3} // Animation speed, defaults to 1
                    rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                    <Clouds material={THREE.MeshBasicMaterial} position={[-50, 0, -650]}>
                        <Cloud segments={40} bounds={[10, 2, 2]} volume={30} color="white" />
                        <Cloud seed={1} scale={20} volume={10} color="lightgrey" fade={100} />
                    </Clouds>            
            </Float>
            <Float
                    speed={3} // Animation speed, defaults to 1
                    rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                    <Clouds material={THREE.MeshBasicMaterial} position={[250, 0, -700]}>
                        <Cloud segments={40} bounds={[10, 2, 2]} volume={20} color="white" />
                        <Cloud seed={1} scale={30} volume={10} color="lightgrey" fade={100} />
                    </Clouds>            
            </Float>

            </>
    )
}

export default FloatingClouds;
