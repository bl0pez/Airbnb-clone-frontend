import { useCallback, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = "pk.eyJ1IjoiYnJ5YW5sb3BlenMiLCJhIjoiY2t0OHN2cmxsMTVqazJ2bzBsejU1eGljayJ9.pyMD9IYlVEq7dftXQ3_19g";

const puntoInicial = {
    lng: -105.0178157,
    lat: 39.737925,
    zoom: 12
}


export const MapBox = () => {

    
    
    const mapRef = useRef(null);
    const mapa = useRef(null);
    const [coords, setCoords] = useState(puntoInicial)
    const [address, setAddress] = useState('');

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [coords.lng, coords.lat],
            zoom: puntoInicial.zoom
        });

        const geoCoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            placeholder: 'Enter an address or place name',
        });

        map.addControl(geoCoder, 'top-left');

        geoCoder.on('result', (e) => {
            setAddress(e.result.place_name);
            setCoords({
                lng: e.result.geometry.coordinates[0],
                lat: e.result.geometry.coordinates[1],
                zoom: 15
            })
        })

        mapa.current = map;

        return () => map.remove();

    }, []);

    //Creamos marcador
    useEffect(() => {
        const marker = new mapboxgl.Marker();
        marker.setLngLat([coords.lng, coords.lat]);
        marker.addTo(mapa.current);

        //Agregamos al buscador la dirección
        

    }, [coords]);


    return (
      <div className='-z-10 relative'>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Mapbox</h1>
            <p className="text-sm">Lat: {coords.lat} | Lng: {coords.lng}</p>
            <p className="text-sm">Dirección: {address}</p>
        </div>
      <div
            className="w-full h-96 rounded-lg shadow-md mt-4"
            ref={mapRef}
        ></div>
      </div> 
    )
}
