import { cn } from '../../lib/utils'
import React from 'react'

function PinCards({title, description, index, imgUrl, bgColor}) {
  return (
    <div className='pinCards relative ' id={`card-${index + 1}`}>
        <div className={cn(`cardInner relative will-change-transform w-[100%] h-[100%] p-[2em] flex gap-4 bg-[${bgColor}]`)}>
            <div className="cardContent flex-3/4">
                <h1 className='text-[4rem] font-bold mb-[2.5em] leading-tighter'>{title}</h1>
                <p className='text-[2rem] font-extralight'>{description}</p>
            </div>
            <div className="cardImage flex-1/4 aspect-video rounded-[0.75em] overflow-hidden">
                <img src={imgUrl} alt={`${title} image`} className='h-[100%] w-[100%] object-cover' />
            </div>
        </div>
    </div>
  )
}

export default PinCards