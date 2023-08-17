import './App.css'

export default function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-img'
                    alt="Profile Pricture" 
                    src="https://pbs.twimg.com/profile_images/1279975466305191936/OuIZ6Z3S_400x400.jpg"></img>
                <div className='tw-followCard-info'>
                    <strong>Juanma Vivas</strong>
                    <span className='tw-followCard-infoUserName'>@username</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
            
        </article>
    )
}