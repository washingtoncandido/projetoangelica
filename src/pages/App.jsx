import { useEffect, useState } from 'react';
import '../styles/App.css';
import { apiService } from '../services/apiService';

function App() {
  const [compartilhar, setCompartilhar] = useState()

  useEffect(() => {

    const compartilharEventos = async () => {
      //apiService.get()
      await setCompartilhar('oi')
    }
    compartilharEventos()
  }, []);


  return (

    <div className="App">
      {
        compartilhar
      }
    </div>

  );
}

export default App;
