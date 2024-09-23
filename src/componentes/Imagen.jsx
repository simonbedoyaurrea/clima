import React, { useContext, useEffect, useState } from 'react'
import { CityContext } from '../App';
import '../estilos/imagen.css'

export default function Imagen() {

    const [imagen,setImagen]=useState(null)
    const{ciudad} = useContext(CityContext)

    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?query=${ciudad}&client_id=3k3ygIB2g2RGefQ8uf0C5GUNnmv6156f1CgmGHoHUFw`)
        .then(response=>response.json())
        .then(data=>{
        let nroImg = Math.floor(Math.random() * data.results.length);
        setImagen(data.results[nroImg])
        })
    },[ciudad])

  return (
    <>
   { imagen &&
   <div className='contenedor-imagen' style={{ backgroundImage: `url(${imagen.urls.regular})` }}>
        
    </div>
    }
    </>
  
  )
}
