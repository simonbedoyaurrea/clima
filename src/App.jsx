import { createContext, useState ,useContext} from 'react';
import './App.css';

import Input from './componentes/Input';
import PrincipalCard from './componentes/PrincipalCard';


export  const CityContext = createContext();

function App() {


  const [ciudad,setCiudad]=useState('miami')


  return (
    <>
   
      <CityContext.Provider value={{ciudad,setCiudad}}>
      <Input />
      <PrincipalCard />
      </CityContext.Provider>
    </>
  );
}

export default App;

