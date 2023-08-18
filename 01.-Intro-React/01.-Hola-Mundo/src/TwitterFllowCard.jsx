import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard ( {name, userName}) {

    const [isFollowing, setIsFollowing] = useState(false)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    const imgSrc = `https://unavatar.io/twitter/${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Profile Pricture" 
                    src={imgSrc}></img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    {textButton}
                </button>
            </aside>
            
        </article>
    )
}