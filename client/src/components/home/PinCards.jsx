import { cn } from '../../lib/utils'
import React from 'react'

function PinCards({ title, description, index, imgUrl, bgColor, specs }) {


  return (
    <div className='pinCards relative md:h-[70vh] h-[100vh] w-[100vw] ' id={`card-${index + 1}`}>
      <div className={cn(`cardInner relative will-change-transform w-[100%] h-[100%] p-[2em] flex flex-col md:flex-row gap-4 bg-[${bgColor}]`)}>
        <div className="cardContent flex-1/4 md:flex-3/4">
          <h1 className='md:text-[4rem] text-[2rem] font-bold mb-[.5em] leading-tighter'>{title}</h1>
          <div className='flex flex-col '>
            <p className='md:text-[1.7rem] text-[1rem] font-extralight opacity-80 '>{description}</p>
            <div className={` backdrop-blur-md hidden md:block rounded-xl p-4  w-[80%] mt-10 hover:shadow-accent transition-shadow duration-500 ease-in-out
 `}>
              <div>
                {/* <h2 className='text-4xl font-[halimun] mb-10 text-center'>Car Specs</h2> */}
                <div className='grid grid-cols-3 mt-30'>
                  <h1 className='text-md font-extralight flex flex-col text-start mb-9 '><span className='opacity-50 font-[halimun]'>Engine  </span><span>{specs?.engine}</span></h1>
                  <h1 className='text-md font-extralight flex flex-col text-start mb-9 '><span className='opacity-50 font-[halimun]'>Horsepower  </span><span>{specs?.horsepower}</span></h1>
                  <h1 className='text-md font-extralight flex flex-col text-start mb-9 '><span className='opacity-50 font-[halimun]'>Top Speed </span><span>{specs?.topSpeed}</span></h1>
                  <h1 className='text-md font-extralight flex flex-col text-start mb-9 '><span className='opacity-50 font-[halimun]'>Acceleration </span><span>{specs?.acceleration}</span></h1>
                  <h1 className='text-md font-extralight flex flex-col text-start mb-9 '><span className='opacity-50 font-[halimun]'>Weight </span><span>{specs?.weight}</span></h1>
                  <h1 className='text-md font-extralight flex flex-col text-start mb-9 '><span className='opacity-50 font-[halimun]'>Price </span><span>{specs?.price}</span></h1>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="cardImage flex-3/4 md:flex-1/4 aspect-video rounded-[4.95em] md:rounded-[0.7em] overflow-hidden">
          <img src={imgUrl} alt={`${title} image`} className='md:h-[100%] h-[80%] w-[100%] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default PinCards