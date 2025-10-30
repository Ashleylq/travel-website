import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <p><span style={{color: 'green'}}>Bella</span> <span style={{color: 'red'}}>Italia</span></p>
                <p>Travel. Discover. Live.</p>
            </div>
            <NavLink to='/' className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
            <NavLink to='/destinations' className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Destinations</NavLink>
            <NavLink to='/favourites' className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Favourites</NavLink>
        </nav>
    )
}

export default Navbar;