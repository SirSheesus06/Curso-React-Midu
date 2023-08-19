import { TwitterFollowCard } from "./TwitterFllowCard.jsx";


export default function App () {

    return (
        <section className="App">
            <TwitterFollowCard 
                name={'Juanma Vivas'}
                userName={'Sheesus3'}
                initialIsFollowing={true}
                >
            </TwitterFollowCard>
            <TwitterFollowCard 
                name={'Goncy.js'}
                userName={'goncy'}
                initialIsFollowing={false}
                >
            </TwitterFollowCard>
        </section>
        
    )
}