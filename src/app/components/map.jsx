import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet";
import "leaflet-extra-markers/dist/js/leaflet.extra-markers.min.js";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";


export default function Mapa() {

  const extraMarkerIcon = L.ExtraMarkers.icon({
    icon: 'fa-location-dot', // Ícone FontAwesome 'location-dot'
    markerColor: 'blue', // Cor do marcador
    shape: 'circle', // Formato do marcador: 'circle' ou 'square'
    prefix: 'fa' // Prefixo do ícone (por padrão é 'fa')
  });


  return (
    <MapContainer className='w-full h-[567px]' center={[-23.616595683387494, -46.55813227977169]} zoom={103} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={extraMarkerIcon}  position={[-23.616595683387494, -46.55813227977169]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}