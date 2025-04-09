import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const GroundFog = () => {
  const fogTexture = useLoader(THREE.TextureLoader, '/assets/textures/fog.jpg') // Should be a soft transparent PNG

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, .9, 0]} rotateOnAxis={30} receiveShadow>
      <planeGeometry args={[16, 16]} />
      <meshBasicMaterial
      alphaMap={fogTexture}
      
        map={fogTexture}
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </mesh>
  )
}


export default GroundFog