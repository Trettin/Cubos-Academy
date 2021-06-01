import './App.css';
import configIcon from './assets/icon-settings.svg'
import { useState, useEffect } from 'react';

function App() {
  const [actualMode, setMode] = useState('pomodoro');

  const minutos = 25;
  const segundos = 0;


  return (
    <div className="App">
      
      <h1 className='pomodoro'>pomodoro</h1>

      <div className="buttons">
        <button className={actualMode === 'pomodoro' ? 'header-button selected' : 'header-button'} onClick={()=> setMode('pomodoro')}>pomodoro</button>
        <button className={actualMode === 'short break' ? 'header-button selected' : 'header-button'} onClick={()=> setMode('short break')}>short break</button>
        <button className={actualMode === 'long break' ? 'header-button selected' : 'header-button'} onClick={()=> setMode('long break')}>long break</button>
      </div>

      <div className="clock">
        <div className='clock-bg'>
          <div className="time">
           {minutos}:{segundos}
          </div>
          <button className='pause'>pause</button>
        </div>
      </div>

      <button className="config"><img src={configIcon} alt="Settings icon" /></button>

    </div>
  );
}

export default App;
