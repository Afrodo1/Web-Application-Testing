import React from 'react';

const Display = (props) => {
    return (
        <div className='scoreboard'>
        <div className='topRow'>
          <div className='inning Box'>
            <h1>INNING</h1>
            <div className='inning Count'>{props.inning}</div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='ballCount Box'>
            <h1 className='ballName'>BALL</h1>
            <div className='ball Count'>{props.balls}</div>
          </div>
          <div className='strike Box'>
            <h1 className='strikeName'>STRIKE</h1>
            <div className='strike Count'>{props.strikes}</div>
          </div>
          <div className='out Box'>
            <h1 className='outName'>OUT</h1>
            <div className='out Count'>{props.outs}</div>
          </div>
        </div>
      </div>
    )
}

export default Display;