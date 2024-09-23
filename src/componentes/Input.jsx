import React, { useContext,useRef} from 'react'
import { CityContext } from '../App';
import '../estilos/input.css'
import { CiLocationOn } from "react-icons/ci";

export default function Input() {
    const inputRef = useRef(null);

    const { setCiudad} = useContext(CityContext);

    const handleChange=(e)=>{
        e.preventDefault()
        setCiudad(inputRef.current.value)
    }
return (
    <>
    <div className='contenedor-input'>
        <input type="text" className='input-ciudad'  ref={inputRef}/>
        <button onClick={handleChange}><CiLocationOn className='ubicacion' /></button>

    </div>

    </>
)
}
