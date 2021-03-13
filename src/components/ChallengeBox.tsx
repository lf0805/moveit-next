import { useContext } from 'react'
import style from '../style/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'


export function ChallengeBox() {

  const { activeChallenge, resetChallenge,completeChallenge } = useContext(ChallengesContext)
  const {resetCountdown} = useContext(CountdownContext)  
  function handleChallengeSucceeded(){
      completeChallenge()
      resetCountdown()
  } 
  function handleChallengeFailed(){
    resetChallenge()
    resetCountdown()
} 
  
  
  
  return(
    <div className={style.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={style.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
            className={style.challengeFailedButton} 
            type="button"
            onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
            className={style.challengeSucceededButton} 
            type="button"
            onClick = {handleChallengeSucceeded}
            
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}