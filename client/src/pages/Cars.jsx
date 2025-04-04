import { Cards } from '../components/aceternity/Cards'
import React from 'react'

const CarsInfo = [
  {
    title: 'BMW M5',
    imgUrl: '/assest/images/bmw-m5.jpg',
    gifUrl: '/assets/videos/bmw-m5.webp',
    description: 'A powerful, luxurious, high-performance sports sedan.',
    link: '/experience'
  },
  {
    title: 'Buggati Tourbillon',
    imgUrl: '/assets/images/buggatiTourbillon.webp',
    gifUrl: '/assets/videos/buggati-tourbillon.webp',
    description: 'Futuristic, ultra-luxurious, high-performance hypercar.',
    link: "/experience"
  },
  
]

function Cars() {
  return (
    <div className='flex justify-center items-center h-full w-full flex-col px-4 py-4'>
      <div className='font-[serif] text-4xl'>Explore Cars</div>
      <div>

        <div className='md:grid md:grid-cols-4 flex flex-col  gap-4 px-4 py-4'>

          {
            CarsInfo.map((car, index) => (
              <div className=' w-full h-full flex justify-center items-center'>
                <Cards key={index} title={car.title} imgUrl={car.imgUrl} gifUrl={car.gifUrl} description={car.description} link={car.link}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cars