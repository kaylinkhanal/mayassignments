import Link from 'next/link'
import React from 'react'

const Channel = () => {
  return (
    <div>
      <h1>Channel</h1>

     <Link href='/channel/main' className='color text-red-700'>Go to main</Link>
    </div>
  )
}

export default Channel
