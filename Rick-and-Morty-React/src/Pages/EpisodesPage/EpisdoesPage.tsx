import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Episodes } from '../../Models/CharacterModel';
import './EpisodesPage.css';

const EpisodesPage = () => {
  const [episode, setEpisode] = useState<Episodes[]>();
  const navigate = useNavigate();

  const getEpisode = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/episode');
      setEpisode(response.data.results);
    } catch (error) {
      navigate('/');
    }
  };

  useEffect(() => {
    getEpisode().then();
  }, []);

  return (
    <div className="SectionEpisodes">
      <h1>Episodes</h1>
      <div className="ListEpisodes">
        {episode && episode.map((epi) => (
          <div key={Math.random()} className="BlockEpisodes">
            <div className="CardEpisodes">
              <div>
                <img className="avatar" src="https://tinyurl.com/mortyEpIco" alt="avatar" />
              </div>
              <div className="BlockInfo">
                <p className='EpisodeName'>{epi.name}</p>
                <p>{epi.episode}</p>
                <p>{epi.air_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesPage;