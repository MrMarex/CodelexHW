import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { CharacterResults } from '../../Models/CharacterModel';
import './CharacterPage.css';

const CharacterPage = () => {
  const [character, setCharacter] = useState<CharacterResults>();
  const { id } = useParams();
  const navigate = useNavigate();

  const getCharacter = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('');
    }
  };

  useEffect(() => {
    if (id) {
      getCharacter().then();
    }
  }, []);

  return (
    <div className="SectionCharacter">
      {character && (
        <div className="BlockCharacter">
          <h4>Character's info</h4>
          <h1>{character.name}</h1>
          <div className="CardCharacter">
            <div>
              <img className="Avatar" src={character.image} alt="" />
              <p>{`Species: ${character.species}`}</p>
              <p>{`Gender: ${character.gender}`}</p>
              <p>{character.type !== '' ? `Type: ${character.type}` : ''}</p>
              <p>{`Status: ${character.status}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;