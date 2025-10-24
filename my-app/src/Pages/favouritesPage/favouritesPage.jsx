import { useEffect , useState } from "react";
import { destinations } from "../../data/destinations";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import styles from './favouritesPage.module.css';

export default function FavouritesPage(){
    const [favourites, setFavourites] = useState([])
    useEffect(() => {
        const stored = localStorage.getItem("favourites")
        if(stored){
          const favs = JSON.parse(stored)
          const arr = [];
          for(let destination of destinations){
            if(favs[destination.name]){
                arr.push(destination)
            }
          }
          setFavourites(arr)
        }
        else {
            const arr = {
                Rome : false,
                Bologna : false,
                Venice : false,
                Turin : false,
                Verona : false,
                Florence : false,
                Milan : false,
                Naples : false
            }
            localStorage.setItem("favourites", JSON.stringify(arr))
        }
    }, [])
    return (
        <div className={styles.container}>
        {favourites.map((a) => (
            <DestinationCard key={a.id} name={a.name} img={a.image} alt={`An image of ${a.name}`}/>
        ))}
        </div>
    )
}