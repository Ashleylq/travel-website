import styles from './DestinationCard.module.css';

export default function DestinationCard({name, img}){
    return(
        <div className={styles.container}>
            <img src={img} className={styles.img}/>
            <p className={styles.text}>{name}</p>
        </div>
        )
}