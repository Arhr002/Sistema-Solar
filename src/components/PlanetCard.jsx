import { Link } from 'react-router-dom';
function PlanetCard({ planet }) {
    const cardStyle = {
        '--i': planet.color,
        '--clr': planet.color
    };
    const ballStyle = {
        '--imagen-fondo': `url(/img/${planet.image})`,
        '--sombra': `inset 0 0 20px rgba(0,0,0,1), 0 0 50px ${planet.color}`
    };
    return (
        <article className="item" style={cardStyle}>
            <h4>{planet.name}</h4>
            <div 
                className={`bola ${planet.id === 'saturno' ? 'saturno-anillos' : ''}`} 
                style={ballStyle}
            ></div>
            <Link 
                to={`/planets/${planet.id}`} 
                className="informacion"
                style={{'--clr': planet.color, textDecoration: 'none'}}>
                    <span>Información</span><i></i>
            </Link>
        </article>
    )
}

export default PlanetCard;