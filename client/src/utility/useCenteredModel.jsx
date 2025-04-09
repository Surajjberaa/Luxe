import { useEffect, useRef } from "react"
import { Box3, Vector3 } from "three"

/**
 * Adjusts the position of a model so it's horizontally centered
 * and vertically placed at the desired floor height.
 * 
 * @param // {THREE.Object3D} object - The loaded GLTF scene or mesh
 * @param // {number} targetY - The Y position you want the model to sit on (e.g., garage floor)
 */
export const useCenteredModel = (object, targetY = 0) => {
  useEffect(() => {
    if (!object) return

    const box = new Box3().setFromObject(object)
    const center = new Vector3()
    box.getCenter(center)

    // Center it horizontally
    object.position.x -= center.x
    object.position.z -= center.z

    // Ground it vertically
    object.position.y -= box.min.y // Brings bottom to y = 0
    object.position.y += targetY   // Then moves to your platform
  }, [object, targetY])
}
