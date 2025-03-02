//this layout is specific to the landing page so it will be applied just to this component 
import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React from 'react'

//{children} is used to dynamically render whatever content is passed inside Layout
const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='h-full w-full'>
        <Navbar/>
        <main className={`h-full flex w-full flex-col`}
        style={{paddingTop:`${NAVBAR_HEIGHT}px`}}
        >
            {children}
        </main>
    </div>
  )
}

export default Layout