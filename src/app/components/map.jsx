import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-extra-markers/dist/js/leaflet.extra-markers.min.js'
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'

export default function Mapa() {
  const extraMarkerIcon = L.ExtraMarkers.icon({
    icon: 'fa-location-dot',
    markerColor: 'blue',
    shape: 'circle',
    prefix: 'fa',
  })

  return (
    <MapContainer
      className="2xl:w-[1700px] max-w-[1000px] 2xl:max-w-[800px] w-full max-h-[573px] h-[500px] xl:h-auto mb-5 xl:mb-0 "
      center={[-23.616595683387494, -46.55813227977169]}
      zoom={103}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={extraMarkerIcon}
        position={[-23.616595683387494, -46.55813227977169]}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
