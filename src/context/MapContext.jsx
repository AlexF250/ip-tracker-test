
import { createContext, useState } from "react";





export const MapContext = createContext();

export function MapContextProvider (props) {

    const [data, setData] = useState({
        ip:"",
        location: {
            timezone:"",
            region:"",
            lat: "",
            lng: ""
    },
        timezone: "",
        isp: ""
    })

    const [ip, setIP] = useState("")



    function HandleInput (e) {
        setIP(e.target.value)
    }





    async function HandleSubmit (e) {
        try {
            const petition = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_RANDOMER_API_TOKEN}&ipAddress=${ip}`);
            if(!petition.ok){
                alert("something went wrong")
                throw new Error ("HTTP status error")
            }
            const location = await petition.json()
            setData(location)
        } catch (error) {
            console.log(error)
        }
        
    }

    


    return (
        <MapContext.Provider value={{
            HandleSubmit,
            HandleInput,
            data
            }}>
            {props.children}
        </MapContext.Provider>
    )
}