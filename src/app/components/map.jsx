
import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

export default function Mapa() {
  useEffect(() => {

    const coordenadas = [-46.55821334263446,-23.616725197264113 ];
    const coordenadasTransformadas = fromLonLat(coordenadas);
    const map = new Map({


      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: coordenadasTransformadas, // Coordenadas geográficas da Av. Goiás 1860, São Caetano do Sul
        zoom: 20 // Ajusta o zoom conforme necessário
      })
    });

    return () => {
      map.dispose(); // Limpa o mapa quando o componente é desmontado
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }} />
  );
}
