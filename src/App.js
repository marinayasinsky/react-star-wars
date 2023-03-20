import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';

import Starships from './components/Starships';

import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  const [starships, setStarships] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      const fetchedStarships = await getAllStarships();
      console.log(fetchedStarships);

      setStarships(fetchedStarships);
    };
    fetchStarships();
  }, []);

  return (
    <div className='App'>
      <h1>STAR WARS STARSHIPS</h1>
      <Container>
        {starships && <Starships starships={starships} />}
      </Container>
    </div>
  );
}

export default App;