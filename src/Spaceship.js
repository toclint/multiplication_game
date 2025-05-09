import React, { useRef } from 'react'
import { useGLTF, useAnimations, Text } from '@react-three/drei'
import { label } from 'three/tsl'

export function Spaceship(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/buster_drone.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.013}>
          <group name="BusterDronefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Env">
                  <group
                    name="Scheibe"
                    position={[0, -99, 0]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                    <mesh
                      name="Scheibe_Boden_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Scheibe_Boden_0.geometry}
                      material={materials.Boden}
                    />
                  </group>
                  <group name="Himmel" />
                </group>
                <group name="Drone_Controller">
                  <group name="Turbine_Controller" position={[0, -100, -5]}>
                    <group
                      name="Turbine_R"
                      position={[12.245, 0, -1.007]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Turbine_L"
                      position={[-12.245, 0, -1.007]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                  </group>
                  <group name="U_MassPoint" position={[0, 0.119, -12.91]} rotation={[1.321, 0, 0]}>
                    <group
                      name="Eye_Controller"
                      position={[0, 143.073, 58.637]}
                      rotation={[0.035, 0, 0]}>
                      <group name="Eye_Pupil" rotation={[-Math.PI / 2, 0, 0]} />
                    </group>
                    <group name="D_MassPoint" position={[0, 0, 77.5]}>
                      <group
                        name="Drone_Body"
                        position={[0, 0, -37.5]}
                        rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                          name="Drone_Body_body_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Drone_Body_body_0.geometry}
                          material={materials.body}
                        />
                        <group name="Drone_leg_F" position={[0, -38.681, 20.012]}>
                          <mesh
                            name="Drone_leg_F_leg_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_leg_F_leg_0.geometry}
                            material={materials.material}
                          />
                          <group
                            name="F_P1_G"
                            position={[0.007, -5.511, -0.093]}
                            rotation={[0, Math.PI / 2, 0]}>
                            <mesh
                              name="F_P1_G_leg_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.F_P1_G_leg_0.geometry}
                              material={materials.material}
                            />
                            <group name="F_P2" rotation={[Math.PI / 2, 0.087, -Math.PI / 2]}>
                              <mesh
                                name="F_P2_leg_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.F_P2_leg_0.geometry}
                                material={materials.material}
                              />
                              <group name="F_P3_G" position={[0, -22.916, 0.027]}>
                                <mesh
                                  name="F_P3_G_leg_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.F_P3_G_leg_0.geometry}
                                  material={materials.material}
                                />
                                <group name="F_P4" rotation={[1.222, 0, Math.PI]}>
                                  <mesh
                                    name="F_P4_leg_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.F_P4_leg_0.geometry}
                                    material={materials.material}
                                  />
                                  <group name="F_P5_M" position={[-0.016, -11.283, 0.082]}>
                                    <mesh
                                      name="F_P5_M_leg_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.F_P5_M_leg_0.geometry}
                                      material={materials.material}
                                    />
                                    <group name="F_P6_G" position={[0.005, -9.326, -0.082]}>
                                      <mesh
                                        name="F_P6_G_leg_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.F_P6_G_leg_0.geometry}
                                        material={materials.material}
                                      />
                                      <group name="F_P7" rotation={[1.26, 0, 0]}>
                                        <mesh
                                          name="F_P7_leg_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.F_P7_leg_0.geometry}
                                          material={materials.material}
                                        />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="Drone_Gen_R"
                          position={[-26.78, -31.109, -0.748]}
                          rotation={[Math.PI / 2, -1.03, Math.PI / 2]}>
                          <mesh
                            name="0"
                            castShadow
                            receiveShadow
                            geometry={nodes['0'].geometry}
                            material={materials.body}
                          />
                          <group name="Drone_Panel_R" position={[0.679, -0.375, 4.958]}>
                            <mesh
                              name="Drone_Panel_R_body_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.Drone_Panel_R_body_0.geometry}
                              material={materials.body}
                            />
                            <group
                              name="Drone_leg_R"
                              position={[-12.887, -9.611, -0.729]}
                              rotation={[-1.239, 1.571, 0]}>
                              <mesh
                                name="Drone_leg_R_leg_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Drone_leg_R_leg_0.geometry}
                                material={materials.material}
                              />
                              <group
                                name="R_P1_G"
                                position={[2.415, -4.842, -0.007]}
                                rotation={[-Math.PI, 1.309, Math.PI]}>
                                <mesh
                                  name="R_P1_G_leg_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.R_P1_G_leg_0.geometry}
                                  material={materials.material}
                                />
                                <group name="R_P2" rotation={[1.334, 0, 0]}>
                                  <mesh
                                    name="R_P2_leg_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.R_P2_leg_0.geometry}
                                    material={materials.material}
                                  />
                                  <group name="R_P3_G" position={[0.003, -22.916, 0.027]}>
                                    <mesh
                                      name="R_P3_G_leg_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.R_P3_G_leg_0.geometry}
                                      material={materials.material}
                                    />
                                    <group
                                      name="R_P4"
                                      position={[0.005, 0.003, -0.001]}
                                      rotation={[1.295, 0, Math.PI]}>
                                      <mesh
                                        name="R_P4_leg_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.R_P4_leg_0.geometry}
                                        material={materials.material}
                                      />
                                      <group name="R_P5_M" position={[0.011, -11.286, 0.082]}>
                                        <mesh
                                          name="R_P5_M_leg_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.R_P5_M_leg_0.geometry}
                                          material={materials.material}
                                        />
                                        <group name="R_P6_G" position={[-0.006, -9.326, -0.082]}>
                                          <mesh
                                            name="R_P6_G_leg_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.R_P6_G_leg_0.geometry}
                                            material={materials.material}
                                          />
                                          <group name="R_P7" rotation={[1.411, 0, 0]}>
                                            <mesh
                                              name="R_P7_leg_0"
                                              castShadow
                                              receiveShadow
                                              geometry={nodes.R_P7_leg_0.geometry}
                                              material={materials.material}
                                            />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="Drone_Gen_L"
                          position={[26.78, -31.109, -0.748]}
                          rotation={[Math.PI / 2, 1.03, -Math.PI / 2]}>
                          <mesh
                            name="Drone_Gen_L_body_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_Gen_L_body_0.geometry}
                            material={materials.body}
                          />
                          <group name="Drone_Panel_L" position={[-0.678, -0.377, 4.958]}>
                            <mesh
                              name="Drone_Panel_L_body_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.Drone_Panel_L_body_0.geometry}
                              material={materials.body}
                            />
                            <group
                              name="Drone_leg_L"
                              position={[12.887, -9.611, -0.729]}
                              rotation={[-1.239, -1.571, 0]}>
                              <mesh
                                name="Drone_leg_L_leg_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Drone_leg_L_leg_0.geometry}
                                material={materials.material}
                              />
                              <group
                                name="L_P1_G"
                                position={[-2.415, -4.842, -0.007]}
                                rotation={[Math.PI, -1.411, Math.PI]}>
                                <mesh
                                  name="L_P1_G_leg_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.L_P1_G_leg_0.geometry}
                                  material={materials.material}
                                />
                                <group name="L_P2" rotation={[1.283, 0, 0]}>
                                  <mesh
                                    name="L_P2_leg_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.L_P2_leg_0.geometry}
                                    material={materials.material}
                                  />
                                  <group name="L_P3_G" position={[0, -22.916, 0.027]}>
                                    <mesh
                                      name="L_P3_G_leg_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.L_P3_G_leg_0.geometry}
                                      material={materials.material}
                                    />
                                    <group
                                      name="L_P4"
                                      position={[-0.004, 0, 0]}
                                      rotation={[1.465, 0, -Math.PI]}>
                                      <mesh
                                        name="L_P4_leg_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.L_P4_leg_0.geometry}
                                        material={materials.material}
                                      />
                                      <group
                                        name="L_P5_M"
                                        position={[0.057, -11.237, 0.082]}
                                        rotation={[0, 0, -0.022]}>
                                        <mesh
                                          name="L_P5_M_leg_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.L_P5_M_leg_0.geometry}
                                          material={materials.material}
                                        />
                                        <group name="L_P6_G" position={[0.143, -9.371, -0.082]}>
                                          <mesh
                                            name="L_P6_G_leg_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.L_P6_G_leg_0.geometry}
                                            material={materials.material}
                                          />
                                          <group
                                            name="L_P7"
                                            position={[0.012, 0, 0]}
                                            rotation={[Math.PI / 2, 0, 0]}>
                                            <mesh
                                              name="L_P7_leg_0"
                                              castShadow
                                              receiveShadow
                                              geometry={nodes.L_P7_leg_0.geometry}
                                              material={materials.material}
                                            />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="Drone_UPanel_R"
                          position={[-28.345, -10.205, 0.145]}
                          rotation={[Math.PI / 2, -1.304, Math.PI / 2]}>
                          <mesh
                            name="Drone_UPanel_R_body_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_UPanel_R_body_0.geometry}
                            material={materials.body}
                          />
                        </group>
                        <group
                          name="Drone_UPanel_L"
                          position={[28.231, -11.228, -0.077]}
                          rotation={[Math.PI / 2, 1.304, -Math.PI / 2]}>
                          <mesh
                            name="Drone_UPanel_L_body_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_UPanel_L_body_0.geometry}
                            material={materials.body}
                          />
                        </group>
                        <group name="Drone_UPart" position={[0, 38.977, -3.073]}>
                          <mesh
                            name="Drone_UPart_body_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_UPart_body_0.geometry}
                            material={materials.body}
                          />
                        </group>
                        <group name="Drone_ILens" position={[0, -14.966, 41.505]}>
                          <mesh
                            name="Drone_ILens_body_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_ILens_body_0.geometry}
                            material={materials.body}
                          />
                          <group
                            name="Drone_IEye"
                            position={[0, -0.018, -8.909]}
                            rotation={[3.115, 0.12, -3.138]}>
                            <mesh
                              name="1"
                              castShadow
                              receiveShadow
                              geometry={nodes['1'].geometry}
                              material={materials.body}
                              morphTargetDictionary={nodes['1'].morphTargetDictionary}
                              morphTargetInfluences={nodes['1'].morphTargetInfluences}
                            />
                          </group>
                        </group>
                        <group
                          name="Drone_Turb_M_L"
                          position={[19.973, 24.557, -6.007]}
                          rotation={[-1.678, -0.236, 1.571]}>
                          <mesh
                            name="Drone_Turb_M_L_body_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_Turb_M_L_body_0.geometry}
                            material={materials.body}
                          />
                          <group
                            name="Drone_Turb_Blade_L"
                            position={[0, -36.155, -10.967]}
                            rotation={[-1.276, 1.067, Math.PI]}>
                            <mesh
                              name="Drone_Turb_Blade_L_body_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.Drone_Turb_Blade_L_body_0.geometry}
                              material={materials.body}
                            />
                          </group>
                        </group>
                        <group
                          name="Drone_Turb_M_R"
                          position={[-19.973, 24.557, -6.007]}
                          rotation={[-1.687, 0.235, -Math.PI / 2]}>
                          <mesh
                            name="Drone_Turb_M_R_body_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Drone_Turb_M_R_body_0.geometry}
                            material={materials.body}
                          />
                          <group
                            name="Drone_Turb_Blade_R"
                            position={[0, -36.155, -10.967]}
                            rotation={[-1.276, -1.067, Math.PI]}>
                            <mesh
                              name="Drone_Turb_Blade_R_body_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.Drone_Turb_Blade_R_body_0.geometry}
                              material={materials.body}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <Text position={[0, 0, .7]} color="#078a33" fontWeight="bold" scale={.5} anchorX="right" anchorY="middle" outlineWidth={.1} outlineColor="#ffffff" outlineBlur={0}>
  {props.numerator} x {props.denominator} = {props.answer}
</Text>
    </group>
    
  )
}


useGLTF.preload('/buster_drone.glb')