import { cn } from '../../lib/utils'
import React from 'react'

function PinCards({ title, description, index, imgUrl, bgColor, specs }) {


  return (
    <div className='pinCards relative h-[70vh] w-[100vw] ' id={`card-${index + 1}`}>
      <div className={cn(`cardInner relative will-change-transform w-[100%] h-[100%] p-[2em] flex gap-4 bg-[${bgColor}]`)}>
        <div className="cardContent flex-3/4">
          <h1 className='text-[4rem] font-bold mb-[.5em] leading-tighter'>{title}</h1>
          <div className='flex flex-col items-center'>
            <p className='text-[2rem] font-extralight opacity-50'>{description}</p>
            <div className={`${(index + 1) % 2 === 0 ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-md border  rounded-xl p-4 shadow-lg  w-[80%] mt-10 hover:shadow-accent transition-shadow duration-500 ease-in-out
 `}>
              <div>
                <h2 className='text-4xl font-[halimun] mb-6 text-center'>Car Specs</h2>
                <div className='grid grid-cols-2'>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Engine:  </span><span>{specs?.engine}</span></h1>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Horsepower:  </span><span>{specs?.horsepower}</span></h1>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Top Speed: </span><span>{specs?.topSpeed}</span></h1>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Acceleration: </span><span>{specs?.acceleration}</span></h1>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Drive Train: </span><span>{specs?.drivetrain}</span></h1>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Transmission: </span><span>{specs?.transmission}</span></h1>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Weight: </span><span>{specs?.weight}</span></h1>
                  <h1 className='text-2xl font-extralight leading-16 text-start '><span className='opacity-50'>Price: </span><span>{specs?.price}</span></h1>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="cardImage flex-1/4 aspect-video rounded-[0.75em] overflow-hidden">
          <img src={imgUrl} alt={`${title} image`} className='h-[100%] w-[100%] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default PinCards