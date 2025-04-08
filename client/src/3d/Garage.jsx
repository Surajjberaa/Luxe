import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Garage(props) {
  const { nodes, materials } = useGLTF('/assets/models/sci-fi_garage.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={2.094}>
          <group
            name="54c625915ceb46b09c1c7337b7561aa0fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode">
              <group name="Garage" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Garage_Main_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Main_0.geometry}
                  material={materials.Main}
                />
                <mesh
                  name="Garage_Floor_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Floor_0.geometry}
                  material={materials.Floor}
                />
                <mesh
                  name="Garage_Big_Lights_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Big_Lights_0.geometry}
                  material={materials.Big_Lights}
                />
                <mesh
                  name="Garage_Out_RIng_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Out_RIng_0.geometry}
                  material={materials.Out_RIng}
                />
                <mesh
                  name="Garage_Ring_Light_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Ring_Light_0.geometry}
                  material={materials.Ring_Light}
                />
                <mesh
                  name="Garage_Middle_Ring_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Middle_Ring_0.geometry}
                  material={materials.Middle_Ring}
                />
                <mesh
                  name="Garage_In_Ring_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_In_Ring_0.geometry}
                  material={materials.In_Ring}
                />
                <mesh
                  name="Garage_In_Ring_Ring_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_In_Ring_Ring_0.geometry}
                  material={materials.In_Ring_Ring}
                />
                <mesh
                  name="Garage_Strahler_Main_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Strahler_Main_0.geometry}
                  material={materials.Strahler_Main}
                />
                <mesh
                  name="Garage_Strahler_Transparent_Plastic__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Strahler_Transparent_Plastic__0.geometry}
                  material={materials.Strahler_Transparent_Plastic}
                />
                <mesh
                  name="Garage_Strahler_Light_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Strahler_Light_0.geometry}
                  material={materials.Strahler_Light}
                />
                <mesh
                  name="Garage_Strahler_Glass_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Strahler_Glass_0.geometry}
                  material={materials.Strahler_Glass}
                />
                <mesh
                  name="Garage_Blue_Light_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Garage_Blue_Light_0.geometry}
                  material={materials.Blue_Light}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sci-fi_garage.glb')
