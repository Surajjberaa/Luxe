import { useEffect, useRef, useState } from 'react'
import { Box3, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'

const CenterAndGround = ({ targetY = -1, children }) => {
  const group = useRef()
  const [isPositioned, setIsPositioned] = useState(false)

  const [spring, api] = useSpring(() => ({
    scale: [0, 0, 0],
    position: [0, -2, 0],
    rotation: [0, Math.PI * 2, 0],
  }))

  useEffect(() => {
    api.start({
      scale: [1, 1, 1],
      position: [0.2, -.08, .2],
      rotation: [0, 1, 0],
      config: { mass: 1, tension: 80, friction: 20 },
      delay: 300,
    })
  }, [])

  useFrame(() => {
    if (group.current && !isPositioned) {
      const box = new Box3().setFromObject(group.current)
      const center = new Vector3()
      box.getCenter(center)

      group.current.position.x -= center.x
      group.current.position.z -= center.z
      group.current.position.y -= box.min.y
      group.current.position.y += targetY

      setIsPositioned(true)
    }
  })

  return (
    <a.group ref={group} {...spring}>
      {children}
    </a.group>
  )
}

export default CenterAndGround
