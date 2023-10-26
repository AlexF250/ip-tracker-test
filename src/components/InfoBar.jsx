import { useContext } from "react"
import { MapContext } from "../context/MapContext"



function InfoBar() {

const {data} = useContext(MapContext);



  return (
              <div className="grid p-6 bg-slate-50 w-9/12 mx-auto mt-32 rounded-xl z-40 relative md:text-justify text-center md:grid-cols-4">
            <div className="border-e-slate-200 md:border-e-2 border-e-0 md:ps-0 ps-4">
              <h6 className="text-xs uppercase text-slate-400 font-bold">ip address</h6>
              <p className="text-2xl">{data.ip}</p>
            </div>
            <div  className="border-e-slate-200 md:border-e-2 border-e-0 ps-4">
              <h6 className="text-xs uppercase text-slate-400 font-bold">location</h6>
              <p className="text-2xl">{data.location.region}</p>
            </div>
            <div  className="border-e-slate-200 md:border-e-2 border-e-0 ps-4">
              <h6 className="text-xs uppercase text-slate-400 font-bold">timezone</h6>
              <p className="text-2xl">{data.location.timezone}</p>
            </div>
            <div  className="ps-4">
              <h6 className="text-xs uppercase text-slate-400 font-bold">isp</h6>
              <p className="text-2xl">{data.isp}</p>
            </div>
          </div>
  )
}

export default InfoBar