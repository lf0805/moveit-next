import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import style from '../style/components/Profile.module.css'

export function Profile() {
  const {level} = useContext(ChallengesContext)
  return (
    <div className={style.profileContainer}>
      <img src="https://storage.live.com/Users/-3683677099853913190/MyProfile/ExpressionProfile/ProfilePhoto:Win8Static,UserTileMedium,UserTileStatic?nocache=3631" alt="Guilherme Capitão"/>
      <div>
        <strong>Lucas Franco</strong>
        
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}