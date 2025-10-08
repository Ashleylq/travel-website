import styles from './Navbar.module.css';

function Navbar(){
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <p><span style={{color: 'green'}}>Bella</span> <span style={{color: 'red'}}>Italia</span></p>
                <p>Travel. Discover. Live.</p>
            </div>
            <p>Home</p>
            <p>Destinations</p>
            <p>Favourites</p>
        </nav>
    )
}

export default Navbar;