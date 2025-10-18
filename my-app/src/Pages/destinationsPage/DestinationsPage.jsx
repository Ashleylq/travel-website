import { destinations } from "../../data/destinations";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import styles from './destinationsPage.module.css'

export default function DestinationsPage(){
    return(
    <div className={styles.container}>
        {destinations.map((city)=>(
           <DestinationCard key={city.name} name={city.name} img={city.image} alt={`An image of ${city.name}`}/>
        ))}
    </div>)
}