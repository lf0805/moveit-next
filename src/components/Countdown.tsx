import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/components/Countdown.module.css';
import {CountdownContext} from '../contexts/CountdownContext'


export function Countdown() {
  const { resetCountdown, startCountdown, minutes, seconds, isActive, hasFinished } = useContext(CountdownContext)
  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  

  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
        disabled
        className={style.countdownButton}
        > 
          Ciclo encerrado
        </button>
      ) : (
        <>
        { isActive ? (
          <button 
          type="button" 
          className={`${style.countdownButton} ${style.countdownButtonActive}`}
          onClick={resetCountdown}
          > 
            Abandonar ciclo
          </button>
        ) : (
          <button 
          type="button" 
          className={style.countdownButton}
          onClick={startCountdown}
          > 
            Iniciar um ciclo
          </button>
        )}
        </>
      ) }
 
    </div>
  )
}