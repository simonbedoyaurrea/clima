import React, { useEffect, useState } from 'react'
import '../estilos/info-card.css'
import { FaTemperatureHigh } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";
import { IoRainy } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { IoIosCloudy } from "react-icons/io";
import { TbUvIndex } from "react-icons/tb";
import { MdFoggy } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export default function InfoCard({climaCiudad}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/airquality'); // Redirige a la ruta /airquality
      };
    
    const [uvColor, setUvColor]= useState('color-verde')
    const [uvtext,setUvText]=useState('bajo')
    const [polution,setPolution]=useState('Buena')

     useEffect(()=>{
        console.log('Datos de climaCiudad:', climaCiudad);

        if(climaCiudad.current.uv>=0 && climaCiudad.current.uv<=2 ){
            setUvColor('color-verde')
            setUvText('Bajo')
        }
        else if(climaCiudad.current.uv>=3 && climaCiudad.current.uv<=5){
            setUvColor('color-amarillo')
            setUvText('Moderado')
        }
        else if(climaCiudad.current.uv>=6 && climaCiudad.current.uv<=7){
            setUvColor('color-naranja')
            setUvText('Alto')
        }
        else if(climaCiudad.current.uv>=8 && climaCiudad.current.uv<=10){
            setUvColor('color-rojo')
            setUvText('¡Muy Alto!  ¡protegete del sol!')
        }

        if(climaCiudad.current.air_quality['us-epa-index']==1){
            setPolution('Buena')
        }
        else if(climaCiudad.current.air_quality['us-epa-index']==2){
            setPolution('Moderada')
        }
        else if(climaCiudad.current.air_quality['us-epa-index']==3){
            setPolution('No Saludable Para Grupos Sensibles')
        }
        else if(climaCiudad.current.air_quality['us-epa-index']==4){
            setPolution('No Saludable')
        }
        else if(climaCiudad.current.air_quality['us-epa-index']==5){
            setPolution('Muy No Saludable')
        }
        else if(climaCiudad.current.air_quality['us-epa-index']==6){
            setPolution('Peligrosa')
        }
        else{
            setPolution('No Data')
        }
    },[climaCiudad]) 
    

    return (
    <>
    <div></div>
    <div className='mas-info-container'>
        <div className='sensacion-termica icono-card-info'>
            <p>Sensacion Termica</p>
            <div className='icono-info'>
                <FaTemperatureHigh className="icon" />
                <p>{climaCiudad.current.feelslike_c} C°</p>
            </div>
        </div>
        <div className='precipitacion icono-card-info'>
            <p>Precipitación</p>
            <div className='icono-info'>
                <IoRainy className="icon" />
                <p>{climaCiudad.current.precip_mm} mm</p>
            </div>
        </div>
        <div className='velocidad-viento icono-card-info'>
            <p>Viento</p>
            <div className='icono-info'>
                <FaWind className="icon"/>
                <p>{climaCiudad.current.wind_kph} kph</p>
            </div>
        </div>
        <div className='presion-atmosferica icono-card-info'>
            <p>Presion Atmosferica</p>
            <div className='icono-info'>
                <WiBarometer className="icon" />
                <p>{climaCiudad.current.pressure_mb} mb</p>
            </div>
        </div>
        <div className='humedad icono-card-info'>
            <p>Humedad</p>
            <div className='icono-info'>
                <WiHumidity  className="icon" />
                <p>{climaCiudad.current.humidity} %</p>
            </div>
        </div>
        <div className='nubosidad icono-card-info'>
            <p>Nubosidad</p>
            <div className='icono-info'>
                <IoIosCloudy className="icon" />
                <p>{climaCiudad.current.cloud} %</p>
            </div>
        </div>
        <div className='radiacion icono-card-info'>
            <p>Rayos UV</p>
            <div className='icono-info'>
                <TbUvIndex className="icon"/>
                <p>{climaCiudad.current.uv}</p>
            </div>
            <span className='uv-texto'>{uvtext}</span>
            <div className={`color-uv ${uvColor}`}></div>
        </div>
        <div className='calidad-aire icono-card-info' onClick={handleClick}>
            <p>Calidad del Aire</p>
            <MdFoggy className="icon" />
            <span>{polution}</span>
            <div className='more-info-air'><span>ver más información</span></div>
        </div>


        
    </div>
    </>
    )
    }
