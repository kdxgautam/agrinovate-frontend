import { TrendsCard } from '@/app/(components)/TrendsCard'
import React from 'react'

export default function Trends() {
  return (
    <div className='flex flex-wrap  justify-evenly my-10'>
        <TrendsCard/>
        <TrendsCard/>
        <TrendsCard/>
        <TrendsCard/>
        <TrendsCard/>
        <TrendsCard/>

    </div>
  )
}
