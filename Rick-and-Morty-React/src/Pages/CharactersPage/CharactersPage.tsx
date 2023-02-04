import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CharacterResults } from '../../Models/CharacterModel';
import './CharactersPage.css';
import { useQuery } from '@tanstack/react-query';

const CharactersPage = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'all' | 'alive' | 'dead' | 'unknown'>('all');
  const [characters, setCharacters] = useState<CharacterResults[]>([]);

  const { data } = useQuery(['characters', status], async () => {
    try {
      const apiUrl = `https://rickandmortyapi.com/api/character/?status=${status === 'all' ? '' : status}`;
      const response = await axios.get(apiUrl);
      return response.data.results;
    } catch (error) {
      navigate('/');
    }
  });

  useEffect(() => {
    setCharacters(data || []);
  }, [data]);

  return (
    <section className="SectionCharacters">
      <h1>Characters</h1>
      <div className="Characters__Buttons--Status">
        <button onClick={() => setStatus('all')} className="Button">All</button>
        <button onClick={() => setStatus('alive')} className="Button Button--Alive">Alive</button>
        <button onClick={() => setStatus('dead')} className="Button Button--Dead">Dead</button>
        <button onClick={() => setStatus('unknown')} className="Button Button--Unknown">Unknown</button>
      </div>
      <div className="BlockCharacters">
        {
          characters.map(({ image, name, id }) => (
            <div className="CardCharacters" key={Math.random()}>
              <div className="CardCharacters--info">
                <div className="CardCharacters--BlockImage">
                  <img
                    src={image}
                    alt="avatar"
                    className="Avatar"
                  />
                </div>
                <div className="CardCharacters--BlockName">
                  <span>
                    Name :
                    {' '}
                    {name}
                  </span>
                </div>
                <br />
                <button onClick={() => navigate(`/characters/${id}`)} className="Button">Read More</button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default CharactersPage;
