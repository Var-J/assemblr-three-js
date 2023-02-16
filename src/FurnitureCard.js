import React from 'react'
import Furniture2 from './Furniture2'

function FurnitureCard() {
  return (
    <div className='h-60 w-96 relative bg-white rounded-xl shadow-xl'>
        <div className='absolute bg-black/0 w-full -top-40 h-60'>
            <Furniture2 />
        </div>
        <div className='absolute bottom-0 text-center w-full text-4xl p-5 flex flex-col space-y-4'>
        <h3>Chair</h3>
        <h4>$160.00</h4>
        </div>
    </div>
  )
}

export default FurnitureCard