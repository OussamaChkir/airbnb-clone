import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}:any) {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform dura ease-out'>
       <div className='relative w-80 h-80'>
        <Image src={img} alt={title} fill className='rounded-lg object-cover' />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3> 
    </div>
  )
}

export default MediumCard