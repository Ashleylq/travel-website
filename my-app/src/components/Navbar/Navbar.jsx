import styles from './Navbar.module.css';

function Navbar(){
    return(
        <div className={styles.nav}>
            <div className={styles.logo}>
                <p><span style={{color: 'green'}}>Bella</span> <span style={{color: 'red'}}>Italia</span></p>
                <p>Travel. Discover. Live.</p>
            </div>
            <p>Home</p>
            <p>Destinations</p>
            <p>Favourites</p>
        </div>
    )
}

export default Navbar;