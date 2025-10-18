import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

export default function CityMap({lat, lon, city}){
    return(
  <MapContainer style={{ height : '400px', width : '100%', gridColumn : '1/ span 3', borderRadius : '20px', boxShadow : '0 2px 5px'}} center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, lon]}>
      <Popup>
      {city}
      </Popup>
    </Marker>
  </MapContainer>)
}