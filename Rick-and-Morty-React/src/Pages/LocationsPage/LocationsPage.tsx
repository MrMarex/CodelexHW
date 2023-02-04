import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CharacterLocation } from '../../Models/CharacterModel';
import './LocationsPage.css';

const LocationsPage = () => {
  const [locations, setLocations] = useState<CharacterLocation[]>();
  const navigate = useNavigate();

  const getLocation = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/location');
      setLocations(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('Finally');
    }
  };

  useEffect(() => {
    getLocation().then();
  }, []);

  return (
    <div className="LocationSection">
      <h1>Series Locations</h1>
      <div className="LocationBlock">
        {locations && locations.map((location) => (
          <div key={Math.random()}>
            <div className="location-name">
              <h4>{location.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;