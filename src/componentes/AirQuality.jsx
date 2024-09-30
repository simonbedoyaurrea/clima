import React from 'react'
import { MdFoggy } from "react-icons/md";
import '../estilos/air-quality.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function AirQuality({climaCiudad}) {
return (
    <>{climaCiudad && 
    <div className='air-quality'>
        <div className='back-button' >
            
            <button>
                <Link className='link-atras' to="/"><IoIosArrowBack/></Link>
            </button>
        </div>

        <div className='air-info-container'>
            <div className='title-icon-container'>
                < MdFoggy className='icon-air'/>
                <h2>Calidad Del Aire</h2>
            </div>
            <div className='air-info'>
                <div className="quimico">
                    <p>Monóxido de carbono</p>
                    <span>{climaCiudad.current.air_quality.co} µg/m³</span>
                </div>
                <div className="quimico">
                    <p>Dióxido de nitrógeno</p>
                    <span>{climaCiudad.current.air_quality.no2} µg/m³</span>
                </div>
                <div className="quimico">
                    <p>Ozono troposférico</p>
                    <span>{climaCiudad.current.air_quality.o3} µg/m³</span>
                </div>
                <div className="quimico">
                    <p>Dióxido de azufre</p>
                    <span>{climaCiudad.current.air_quality.so2} µg/m³</span>
                </div>
                <div className="quimico">
                    <p>PM10</p>
                    <span>{climaCiudad.current.air_quality["pm2_5"]} µg/m³</span>
                </div>
                <div className="quimico">
                    <p>PM2.5</p>
                    <span>{climaCiudad.current.air_quality.pm10} µg/m³</span>
                </div>
                
                
                
                
                
                
            </div>
        </div>
        </div>
        }
    </>

    
)
}
