import React, { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { MapContext } from '../context/MapContext';

export function MapView () {

    const {data} = useContext(MapContext);

    var greenIcon = L.icon({
        iconUrl: '../public/img/distmarker-icon.png',
        shadowUrl: '../public/img/distmarker-shadow.png',
    
        iconSize:     [38, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    function SetPosition () {
        const map = useMap();
        useEffect(() => {
          map.setView([data.location.lat, data.location.lng]);
        }, [data]);
        return null;
    }

    return <MapContainer center={{lat: data.location.lat, lng: data.location.lng}} zoom={13} className='z-10'>
        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'></TileLayer>
        <Marker position={{lat: data.location.lat, lng: data.location.lng}} icon={greenIcon}/>
        <SetPosition/>
    </MapContainer>
}
