import React from 'react'
import { useParams } from 'react-router-dom'

function Studio() {

    const {carId} = useParams()

  return (
    <div>Studio</div>
  )
}

export default Studio