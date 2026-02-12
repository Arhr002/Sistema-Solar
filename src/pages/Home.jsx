import { Link } from 'react-router-dom'
import planets from '../data/planets.json'
import PlanetCard from '../components/PlanetCard'

function Home() {
    return (
        <div className="home">
            <div className="planet-list">
                {planets.map(planet => (
                    <Link to={`/planets/${planet.id}`} key={planet.id} className="planet-link">
                        <PlanetCard planet={planet} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;