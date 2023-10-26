import { useContext, useEffect } from "react"
import InfoBar from "./InfoBar"
import { MapView } from "./MapView"
import { MapContext } from "../context/MapContext"



export function Layout() {

  const {HandleSubmit, HandleInput} = useContext(MapContext);

    useEffect(()=>{
      HandleSubmit()
    },[])
    
    return(
  
  
      <div>
        <div className="banner w-full text-center">
          <h1 className="text-slate-50 text-xl font-semibold pt-4">IP Address Tracker</h1>
            <form className=" mt-6 " onSubmit={(e)=>e.preventDefault()}>
              <input type="text" className="w-2/5 p-2 rounded-s-md focus:outline-0" placeholder="Search for any IP address or domain" onChange={HandleInput}/>
              <button className="bg-slate-800 p-3 snButton rounded-e-md" onClick={HandleSubmit}><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button>
            </form>
            <InfoBar/>
        </div>
      <MapView />
      </div>
  
    )
  }