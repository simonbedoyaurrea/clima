
import { useState } from 'react'
import '../estilos/card.css'



export default function Card ({climaCiudad}) {

    const [grados,setGrados]=useState(true)

    const handlegrados=()=>{
        grados?setGrados(false):setGrados(true)
    }


return (
    <>
    {climaCiudad && 
<div className="contenedor-tarjeta">
    <h1 className="nombre-ciudad">{climaCiudad.location.name}, {climaCiudad.location.country}</h1>
    <div className='icono-temperatura-container'>
        <div className="icono-container"><img className='icono' src={climaCiudad.current.condition.icon} alt="" /></div>
        {grados?<p className="temperatura">{climaCiudad.current.temp_c} <button className='temperatura-medida' onClick={handlegrados}>C°</button></p>:<p className="temperatura">{climaCiudad.current.temp_f} <button className='temperatura-medida' onClick={handlegrados}>F°</button></p>} 
    </div>
</div>
    
    }
    </>
)
}
