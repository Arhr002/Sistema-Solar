import { useParams, Link } from 'react-router-dom';
import planets from '../data/planets.json';

function PlanetDetail() {
    const { id } = useParams();
    const planet = planets.find(p => p.id === id);

    if (!planet) {
        return <div>Planeta no encontrado</div>;
    }

    const ballStyle = {
        '--imagen-fondo': `url(/img/${planet.image})`,
        '--sombra': `inset 0 0 20px rgba(0,0,0,1), 0 0 50px ${planet.color}`,
    };

    const backButtonStyle = {
        '--i': `inset 0 0 20px rgba(0,0,0,1), 0 0 50px ${planet.color}, 0 0 50px ${planet.color}`,
        '--color': planet.color,
    };

    return (
        <section className="noticia">
            <div className="bola" style={ballStyle}></div>
            <h1>{planet.emoji} {planet.name}</h1>
            <p>{planet.description}</p>
            
            <ul>
                {planet.facts.map((fact, index) => (
                    <li key={index}>
                        <strong style={{'--color': planet.color}}>{fact.label}:</strong> {fact.value}
                    </li>
                ))}
            </ul>
            
            <Link to="/" className="volver" style={backButtonStyle}>
                Volver
            </Link>
        </section>
    );
}

export default PlanetDetail;