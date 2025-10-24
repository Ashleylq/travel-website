import styles from './details.module.css'
import { useEffect, useState } from 'react'
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import CityMap from '../../components/Map/Map';

export default function DetailsPage({city}){
    const [isFavourited, setFavouriteItem] = useState(false);
    const [highlights, setHighlights] = useState([]);
    const [weather, setWeather] = useState({});
    function changeFavourite(oldState){
        const newState = !oldState;
        const stored = JSON.parse(localStorage.getItem("favourites"));
        const newItem = {...stored, [city.name] : newState};
        localStorage.setItem("favourites", JSON.stringify(newItem));
        setFavouriteItem(newState)
    }
    useEffect(() => {
       const stored = localStorage.getItem("favourites");
       if(stored){
           const favourited = JSON.parse(stored);
           const isCityFavourited = favourited[city.name];
           setFavouriteItem(isCityFavourited);
       } else {
           const cities = {
            Rome : false,
            Venice : false,
            Naples : false,
            Bologna : false,
            Turin : false,
            Verona : false,
            Milan : false,
            Florence : false
           }
           localStorage.setItem("favourites", JSON.stringify(cities))
       }
       async function fetchWeather(){
        const response = await fetch(`
            https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.name}?unitGroup=metric&key=566NKT6ACPXXCK4J29G7PNWKK&contentType=json`);
        const weatherJSON = await response.json();
        const weather = {
            icon : weatherJSON.days[0].icon,
            feelsLike : weatherJSON.days[0].feelslike,
            conditions : weatherJSON.days[0].description,
            precipitation : weatherJSON.days[0].precip,
            lat : weatherJSON.latitude,
            lon : weatherJSON.longitude
        }
        setWeather(weather);
       }
       async function fetchHighlights(){
        let arr = [];
        for(let highlight of city.highlights){
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${highlight} ${city.name}italy&per_page=1&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`);
            const resJSON = await response.json();
            arr.push({
                name : highlight,
                img : resJSON.results[0].urls.regular,
                alt : resJSON.results[0].alt_description
            })
        }
        setHighlights(arr);
       }
       fetchWeather();
       fetchHighlights();
    }, [])
    return(
        <div className={styles.container}>
            <span className={`${styles.arrow} material-symbols-outlined`}>arrow_back</span>
            <span className={`${styles.fav} material-symbols-outlined ${isFavourited ? styles.favourited : ''}`} onClick={() => changeFavourite(isFavourited)}>favorite</span>
            <img className={styles.img} src={city.image} alt={`An image of ${city.name}`}/>
            <div style={{margin : '0 1.465vw'}} className={styles.textContainer}>
                <h1 className={styles.name}>{city.name}</h1>
                <p className={styles.description}>{city.description}</p>
            </div>
            <div className={styles.weatherContainer}>
                <img className={styles.weatherimg} src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/3rd%20Set%20-%20Color/${weather.icon}.svg`}/>
                <p className={styles.temperature}>{weather.feelsLike}&deg;C</p>
                <p style={{gridColumn : '1/ span 2', marginTop : '0.48vw'}}>{weather.conditions}</p>
                <p style={{gridColumn : '1/ span 2', marginTop : '0.48vw'}}>Chances for precipitation: {weather.precipitation}%</p>
            </div>
            <div className={styles.highlightsContainer}>
            {highlights.length !== 0 ? (highlights.map(a => {
                return(<DestinationCard name={a.name} img={a.img} alt={a.alt}/>)
            })) : (<p></p>)}
            </div>
            <div style={{minHeight : '39vw', minWidth : '100%', gridColumn : '1/ span 3'}}>
            {weather.lat && weather.lon ? (
            <CityMap lat={weather.lat} lon={weather.lon} city={city.name} />
            ) : (<p></p>)}
            </div>
        </div>
    )
}