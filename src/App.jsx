import { createContext, useState ,useContext,useEffect} from 'react';
import './App.css';
import AirQuality from './componentes/AirQuality';
import Input from './componentes/Input';
import PrincipalCard from './componentes/PrincipalCard';
import Title from './componentes/Title';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Loader from './componentes/Loader';


export  const CityContext = createContext();

function App() {
  const [ciudad, setCiudad] = useState('miami');
  const [climaCiudad, setClimaCiudad] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);  

    fetch(`http://api.weatherapi.com/v1/current.json?key=74ca412cbbb341b886042346240409&q=${ciudad}&aqi=yes`)
      .then(response => response.json())
      .then(data => {
        setClimaCiudad(data);
        setLoading(false);  
      })
  }, [ciudad]);

  return (
    <>
      <Title />
      <BrowserRouter>
        <CityContext.Provider value={{ ciudad, setCiudad }}>
          <Routes>
            <Route path="/" element={
              <>
                <Input />
                {loading ? ( 
                  <Loader />
                ) : (<>
                  <PrincipalCard climaCiudad={climaCiudad} />
                  </>
                )}
              </>
            } />
            <Route path="/airquality" element={<AirQuality climaCiudad={climaCiudad} />} />
          </Routes>
        </CityContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

