import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CityContext } from '../App';
import Card from './Card';
import Imagen from './Imagen';
import "../estilos/Principalcard.css"

export default function PrincipalCard() {
    const{ciudad} = useContext(CityContext);

    const [climaCiudad, setClimaCiudad]=useState(null)
    
    useEffect(()=>{
    
        fetch(`http://api.weatherapi.com/v1/current.json?key=74ca412cbbb341b886042346240409&q=${ciudad}&aqi=no`)
        .then(response=>response.json())
        .then(data=>{
        setClimaCiudad(data)
        })
    },[ciudad])
return (
    <>
    {
        climaCiudad &&
        <div className="app-container">
        <Imagen />
        <Card climaCiudad={climaCiudad}/>
        </div>

    }
    </>
  )
}
