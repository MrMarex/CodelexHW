import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CharacterResults } from '../../Models/CharacterModel';
import './CharactersPage.css';
// import { useQuery } from '@tanstack/react-query/build/lib/useQuery';

const CharactersPage = () => {
  const [character, setCharacter] = useState<CharacterResults[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate = useNavigate();

  // const {
  //   status,
  //   error,
  //   data: characters
  // } = useQuery({
  //   queryKey: ["characters"],
  //   queryFn = getCharacters,
  // })

  const getAliveCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=alive');
      setCharacter(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('Finally');
    }
  };

  useEffect(() => {
    getAliveCharacters().then();
  }, []);

  const getDeadCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=dead');
      setCharacter(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('Finally');
    }
  };

  useEffect(() => {
    getDeadCharacters().then();
  }, []);

  const getUnknownCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=unknown');
      setCharacter(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('Finally');
    }
  };

  useEffect(() => {
    getUnknownCharacters().then();
  }, []);

  const getCharacters = async () => {
    try {
      const apiUrl = 'https://rickandmortyapi.com/api/character';
      const response = await axios.get(apiUrl);
      setCharacter(response.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setErrorMessage('Nothing to Show');
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage('Not Axios Error');
      }
      console.log(error);
    } finally {
      console.log('Finally');
    }
  };

  useEffect(() => {
    getCharacters().then();
  }, []);

  return (
    <section className="SectionCharacters">
      <h1>Characters</h1>
      <div className="Characters__Buttons--Status">
        <button onClick={getCharacters} className="Button">All</button>
        <button onClick={getAliveCharacters} className="Button Button--Alive">Alive</button>
        <button onClick={getDeadCharacters} className="Button Button--Dead">Dead</button>
        <button onClick={getUnknownCharacters} className="Button Button--Unknown">Unknown</button>
      </div>
      <div className="BlockCharacters">
        {
          character && character.map(({ image, name, id }) => (
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