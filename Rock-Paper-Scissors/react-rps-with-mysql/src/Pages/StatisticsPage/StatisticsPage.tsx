import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './StatisticsPage.css'

type PLayersHistory = {
    move_id: number,
    weapon: string,
    is_victory: number,
    username: string,
    date_played: string,
    user_id: number
}

const StatisticsPage = () => {
    const { t } = useTranslation();

    const endpoint = 'http://localhost:3004/user_moves';
    const [searchInput, setSearchInput] = useState('');

    const { data, status } = useQuery(['user_moves'], async () => {
        const response = await axios.get(endpoint);
        return response.data;
    });

    if (status === 'loading') {
        return <div className='loading-title'>{t('loading')}</div>;
    }

    const filteredData = data.filter((player: PLayersHistory) => player.username.toLowerCase().includes(searchInput.toLowerCase()));

    function getVictoryText(vicotryStatus: number): string {
        let resultText = '';

        if (vicotryStatus === 1) {
            resultText = `${t('win')}`;
        }
        else if (vicotryStatus === 2) {
            resultText = `${t('lost')}`;
        }
        else {
            resultText = `${t('tied')}`;
        }

        return resultText;
    }

    function getWeaponText(weapon: string): string {
        let resultText = '';

        if (weapon === 'rock') {
            resultText = `${t('weaponRock')}`;
        }
        else if (weapon === 'paper') {
            resultText = `${t('weaponPaper')}`;
        }
        else {
            resultText = `${t('weaponScissors')}`;
        }

        return resultText;
    }

    return (
        <div className='statistics'>
            <h1 className="title title--statistics">{t('statistics')}.</h1>
            <div className="search-box">
                <span className="player-name">{t('playersName')}</span>
                <input
                    className="search--name"
                    type="text"
                    id="search-name"
                    placeholder="UltimatePlayer..."
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                />
            </div>
            <div className="table">
                {filteredData.map((player: PLayersHistory) => (
                    <div key={player.move_id} className='player-card'>
                        <div className="player-info player-move-id">{player.move_id}</div>
                        <div className="player-info player-id">{player.username}</div>
                        <div className="player-info player-weapon">
                            {getWeaponText(player.weapon)}
                        </div>
                        <div className="player-info player-is-victory">
                            {getVictoryText(player.is_victory)}
                        </div>
                        <div className="player-info player-date-played">{(player.date_played).slice(0, -5)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatisticsPage;