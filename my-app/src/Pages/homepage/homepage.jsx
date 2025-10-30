import styles from './homepage.module.css';
import { Link } from 'react-router-dom';

export default function Homepage(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Discover The Timeless Beauty Of Italy</h1>
            <p className={styles.details}>From the ancient ruins of Rome to the romantic canals of Venice, Italy is a country where history, art, food, and natural beauty come alive. Explore iconic cities, hidden gems, and breathtaking landscapes — all in one unforgettable journey.</p>
            <Link to='/destinations'><button className={styles.callToAction}>Explore Now</button></Link>
        </div>
    )
}