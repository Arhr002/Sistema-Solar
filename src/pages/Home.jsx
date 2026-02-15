import { Link } from 'react-router-dom'
import planets from '../data/planets.json'
import PlanetCard from '../components/PlanetCard'

function Home() {
    return (
        <div className="home">
            <div className="planet-list">
                {planets.map(planet => (
                    <PlanetCard key={planet.id} planet={planet} />
                ))}
            </div>
        </div>
    )
}

export default Home;