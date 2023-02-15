import axios from 'axios';
import './AllPlayersPage.css';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

type Player = {
    user_id: number,
    username: string,
    game_count: number
}

const AllPlayersPage = () => {
    const { t } = useTranslation();
    const endpoint = 'http://localhost:3004/players';

    const { data, status } = useQuery(['all-players'], async () => {
        const response = await axios.get(endpoint);
        return response.data;
    });

    if (status === 'loading') {
        return <div className='loading-title'>{t('loading')}</div>;
    }

    return (
        <div className="list">
            <h1 className='title title--heading'>{t('listAllPlayers')}</h1>
            <div className="all-players">
                <div className='player-card'>
                    <div className="player-info player-id">{t('id')}</div>
                    <div className="player-info player-username">{t('username')}</div>
                    <div className="player-info player-game-count">{t('gamesPLayed')}</div>
                </div>
                {data.map((player: Player) => (
                    <div key={Math.random()} className='player-card'>
                        <div className="player-info player-id">{player.user_id}</div>
                        <div className="player-info player-username">{player.username}</div>
                        <div className="player-info player-game-count">{player.game_count}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPlayersPage;