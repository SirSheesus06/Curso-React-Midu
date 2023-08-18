import { TwitterFollowCard } from "./TwitterFllowCard.jsx";


export default function App () {

    return (
        <section className="App">
            <TwitterFollowCard 
                name={'Juanma Vivas'}
                userName={'Sheesus3'}
                isFollowing
                >
            </TwitterFollowCard>
            <TwitterFollowCard 
                name={'Juanma Vivas'}
                userName={'Sheesus3'}
                isFollowing={false}
                >
            </TwitterFollowCard>
        </section>
        
    )
}