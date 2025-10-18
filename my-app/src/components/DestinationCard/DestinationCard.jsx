import styles from './DestinationCard.module.css';

export default function DestinationCard({name, img, alt}){
    return(
        <div className={styles.container}>
            <img src={img} className={styles.img} alt={alt}/>
            <p className={styles.text}>{name}</p>
        </div>
        )
}