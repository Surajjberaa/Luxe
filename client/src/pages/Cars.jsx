import { Cards } from '../components/aceternity/Cards'
import React from 'react'

const CarsInfo = [
  {
    id: 1,
    title: 'BMW M5',
    imgUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743748638/bmw-m5_xjyxcf.jpg',
    gifUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743749225/bmw-m5_e4rtca.webp',
    description: 'A powerful, luxurious, high-performance sports sedan.',
    link: '/studio/bmw'
  },
  {
    id: 2,
    title: 'Buggati Tourbillon',
    imgUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743750625/buggatiTourbillon_rfgv5u.webp',
    gifUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1743750329/buggati-tourbillon_upy7qa.webp',
    description: 'Futuristic, ultra-luxurious, high-performance hypercar.',
    link: "/studio/buggati"
  },
  {
    id: 3,
    title: 'Rolls Royce Ghost',
    imgUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1744100311/rolls-royce-_mxztle.jpg',
    gifUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1744101004/rollsRoyce_v01kuv.gif',
    description: 'Elegant, ultra-luxurious, smooth and powerful sedan.',
    link: "/studio/rollsRoyce"
  },
  {
    id: 4,
    title: 'Porsche 911 Turbo S',
    imgUrl: 'https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/images/Porsche%20911%20Turbo%20S.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUG9yc2NoZSA5MTEgVHVyYm8gUy5qcGciLCJpYXQiOjE3NDQ3NTU3NjUsImV4cCI6MjA2MDExNTc2NX0.SjSJtOi48VYGFl4kd__BXQyRdUUSYoMq4TRl8j3moIY',
    gifUrl: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1744755954/porsche911_dymjlx.gif',
    description: 'Elegant, ultra-luxurious, smooth and powerful sedan.',
    link: "/studio/porsche911"
  },
  
]

function Cars() {
  return (
    <div className='flex justify-center items-center h-full w-full flex-col px-4 py-4'>
      <div className='font-[serif] text-4xl'>Explore Cars</div>
      <div>

        <div className='sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex flex-col  gap-4 px-4 py-4'>

          {
            CarsInfo.map((car) => (
              <div className=' w-full h-full flex justify-center items-center' key={car.title}>
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