import React from 'react'
import Card from './Card';
import Imagen from './Imagen';
import "../estilos/Principalcard.css"
import InfoCard from './InfoCard';

export default function PrincipalCard({climaCiudad}) {

return (
    <>
    {
        climaCiudad && 
        <>
        <div className="app-container">
        <Imagen />
        <Card climaCiudad={climaCiudad}/>
        </div>
        <InfoCard climaCiudad={climaCiudad}/>
        </>

    }
    </>
  )
}
