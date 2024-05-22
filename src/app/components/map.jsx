import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-extra-markers/dist/js/leaflet.extra-markers.min.js'
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'
import { useEffect, useState } from 'react'
import initTranslations from '../i18n'

export default function Mapa({ locale }) {
  const [translate, setTranslate] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
    console.log(locale, 'mapa')
    setIsLoading(false)
  }, [])

  const center = () => {
    switch (locale) {
      case 'en':
        return [25.77778804374373, -80.30581677335653]
      case 'pt':
        return [-23.616595683387494, -46.55813227977169]
      case 'ar' || 'es':
        return [-34.612216789416735, -58.37479718820224]
      case 'mx':
        return [19.435412069659936, -99.18258374103617]
    }
  }

  const extraMarkerIcon = L.ExtraMarkers.icon({
    icon: 'fa-location-dot',
    markerColor: 'blue',
    shape: 'circle',
    prefix: 'fa',
  })

  return (
    <MapContainer
      className="2xl:w-[1700px] max-w-[1000px] 2xl:max-w-[800px] w-full max-h-[573px] h-[500px] xl:h-auto mb-5 xl:mb-0 "
      center={center()}
      zoom={103}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={extraMarkerIcon} position={center()}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
