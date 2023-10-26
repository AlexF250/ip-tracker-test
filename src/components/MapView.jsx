import React, { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { MapContext } from '../context/MapContext';

export function MapView () {

    const {data} = useContext(MapContext);

    function SetPosition () {
        const map = useMap();
        useEffect(() => {
          map.setView([data.location.lat, data.location.lng]);
        }, [data]);
        return null;
    }

    return <MapContainer center={{lat: data.location.lat, lng: data.location.lng}} zoom={13} className='z-10'>
        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'></TileLayer>
        <Marker position={{lat: data.location.lat, lng: data.location.lng}} />
        <SetPosition/>
    </MapContainer>
}