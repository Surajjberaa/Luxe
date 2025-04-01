
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./src/assets/bmw_m5_cs.glb')
  return (
    <group {...props} position={[1,0,0]} rotation={[0,5,0]} castShadow={true} receiveShadow={true} dispose={null} >
      <group position={[-0.068, 0.169, 0.984]} rotation={[1.57, 0, Math.PI]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials['TEX.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials['TEX.006']}
        />
      </group>
      <group position={[0.626, 0.272, 2.358]} rotation={[1.57, 0, 0]} scale={3.068}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials['TEX.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials['TEX.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials['TEX.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials['TEX.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          material={materials['TEX.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials['TEX.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          material={materials['TEX.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials['TEX.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_65.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials['TEX.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials['TEX.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials['TEX.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials['TEX.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials['TEX.038']}
        />
      </group>
      <group position={[-0.025, 0.01, 1.184]} rotation={[1.57, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials['TEX.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials['TEX.001']}
        />
      </group>
      <group position={[-0.626, 0.272, 2.358]} rotation={[1.57, 0, Math.PI]} scale={3.068}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_75.geometry}
          material={materials['TEX.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials['TEX.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_77.geometry}
          material={materials['TEX.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_78.geometry}
          material={materials['TEX.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_79.geometry}
          material={materials['TEX.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials['TEX.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_81.geometry}
          material={materials['TEX.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_82.geometry}
          material={materials['TEX.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_83.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_84.geometry}
          material={materials['TEX.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_85.geometry}
          material={materials['TEX.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_86.geometry}
          material={materials['TEX.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_87.geometry}
          material={materials['TEX.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_88.geometry}
          material={materials['TEX.038']}
        />
      </group>
      <group position={[0.025, 0.011, 3.532]} rotation={[1.57, 0, Math.PI]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_90.geometry}
          material={materials['TEX.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials['TEX.001']}
        />
      </group>
      <group position={[0.63, 0.271, 0]} rotation={[1.57, 0, 0]} scale={[3.086, 3.068, 3.068]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials['TEX.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_94.geometry}
          material={materials['TEX.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials['TEX.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_96.geometry}
          material={materials['TEX.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials['TEX.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_98.geometry}
          material={materials['TEX.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_99.geometry}
          material={materials['TEX.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_100.geometry}
          material={materials['TEX.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_101.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_102.geometry}
          material={materials['TEX.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_103.geometry}
          material={materials['TEX.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_104.geometry}
          material={materials['TEX.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_105.geometry}
          material={materials['TEX.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_106.geometry}
          material={materials['TEX.038']}
        />
      </group>
      <group position={[-0.025, 0.009, -1.174]} rotation={[1.57, 0, 0]} scale={[0.011, 0.01, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_108.geometry}
          material={materials['TEX.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_109.geometry}
          material={materials['TEX.001']}
        />
      </group>
      <group
        position={[-0.63, 0.271, 0]}
        rotation={[1.57, 0, Math.PI]}
        scale={[3.086, 3.068, 3.068]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_111.geometry}
          material={materials['TEX.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_112.geometry}
          material={materials['TEX.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials['TEX.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_114.geometry}
          material={materials['TEX.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_115.geometry}
          material={materials['TEX.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_116.geometry}
          material={materials['TEX.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_117.geometry}
          material={materials['TEX.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_118.geometry}
          material={materials['TEX.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_119.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_120.geometry}
          material={materials['TEX.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_121.geometry}
          material={materials['TEX.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_122.geometry}
          material={materials['TEX.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_123.geometry}
          material={materials['TEX.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_124.geometry}
          material={materials['TEX.038']}
        />
      </group>
      <group
        position={[0.025, 0.01, 1.174]}
        rotation={[1.57, 0, Math.PI]}
        scale={[0.011, 0.01, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_126.geometry}
          material={materials['TEX.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_127.geometry}
          material={materials['TEX.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['TEX.018']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['TEX.017']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['TEX.016']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['TEX.016']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['TEX.019']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['TEX.004']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['TEX.010']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['TEX.012']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['TEX.015']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials['TEX.008']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials['TEX.040']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials['TEX.019']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials['TEX.007']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_33.geometry}
        material={materials['TEX.009']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials['TEX.011']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_37.geometry}
        material={materials['TEX.013']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials['TEX.014']}
        position={[-0.068, 0.169, 0.984]}
        rotation={[1.57, 0, Math.PI]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials.material}
        position={[-0.05, 0.261, 2.965]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_43.geometry}
        material={materials['TEX.026']}
        position={[0.453, 0.261, 2.965]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_45.geometry}
        material={materials['TEX.006']}
        position={[0.635, 0.069, 3.058]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials['TEX.025']}
        position={[0.635, 0.178, 3]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials['TEX.027']}
        position={[0.635, 0.178, 3]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_51.geometry}
        material={materials['TEX.029']}
        position={[0.668, -0.233, 3.052]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_53.geometry}
        material={materials['TEX.030']}
        position={[0.751, -0.188, 2.98]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials['TEX.031']}
        position={[0.754, -0.136, 3.056]}
        rotation={[1.57, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_129.geometry}
        material={materials['TEX.002']}
        position={[0, 0.606, -0.78]}
        rotation={[0.261, 0, 0]}
        scale={[0.187, 0.041, 0.008]}
      />
    </group>
  )
}


useGLTF.preload('./src/assets/bmw_m5_cs.glb')
