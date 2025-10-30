import { destinations } from "../../data/destinations";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import styles from './destinationsPage.module.css'
import { Link } from "react-router-dom";

export default function DestinationsPage(){
    return(
    <div className={styles.container}>
        {destinations.map((city)=>(
        <Link to={`/details/${city.name}`} className={styles.link}><DestinationCard name={city.name} img={city.image} alt={`An image of ${city.name}`}/></Link>
        ))}
    </div>)
}