import React from 'react'
import Furniture2 from './Furniture2'
import Furniture3 from './Furniture3'
import Furniture4 from './Furniture4'

function FurnitureCard({ furniture }) {
  return (
    <div className='h-60 w-96 relative bg-white rounded-xl shadow-xl'>
        <div className='absolute bg-black/0 w-full -top-60 h-96'>
            {furniture.id === "1" ? <Furniture2 /> : furniture.id === "2" ? <Furniture3 /> : <Furniture4 />}
        </div>
        <div className='absolute bottom-0 text-center w-full text-4xl p-5 flex flex-col space-y-4'>
        <h3>{furniture.name}</h3>
        <h4>{furniture.price}</h4>
        </div>
    </div>
  )
}

export default FurnitureCard