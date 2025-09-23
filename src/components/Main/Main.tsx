import React from 'react'
import './Hero.css'
import RotatingText from '../ReactBitsComponents/rotatingText.tsx'

function Main() {
  return (
    <div className='hero'>
      <h1 >
        <span style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          I am a
          <RotatingText
            texts={['Developer', 'Designer', 'Student']}
            style={{ color: "#FD2A39" }} 
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: 0 , opacity: 1 }}
            exit={{ y: "-50%" , opacity: 0 }}
            staggerDuration={0.05}
            //splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 1000 }}
            rotationInterval={2500}
          />
        </span>
      </h1>
    </div>
  )
}

export default Main