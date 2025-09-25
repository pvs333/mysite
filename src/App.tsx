import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Waves from './components/WavesBg/Waves'

const App = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Waves
        lineColor="#334941ff"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={20}
        xGap={12}
        yGap={36}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar/>
        <Main/>
      </div>
    </div>
  )
}

export default App