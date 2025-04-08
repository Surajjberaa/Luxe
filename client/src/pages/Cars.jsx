import { Cards } from '../components/aceternity/Cards'
import React from 'react'

const CarsInfo = [
  {
    id: 1,
    title: 'BMW M5',
    imgUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743748638/bmw-m5_xjyxcf.jpg',
    gifUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743749225/bmw-m5_e4rtca.webp',
    description: 'A powerful, luxurious, high-performance sports sedan.',
    link: '/experience'
  },
  {
    id: 2,
    title: 'Buggati Tourbillon',
    imgUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743750625/buggatiTourbillon_rfgv5u.webp',
    gifUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743750329/buggati-tourbillon_upy7qa.webp',
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
            CarsInfo.map((car) => (
              <div className=' w-full h-full flex justify-center items-center' key={car.id}>
                <Cards  title={car.title} imgUrl={car.imgUrl} gifUrl={car.gifUrl} description={car.description} link={car.link}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cars