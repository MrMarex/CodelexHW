import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './GamePage.css'

function GamePage() {
  const { t } = useTranslation();
  const [userChoice, setUserChoice] = useState<string>('');
  const [computerChoice, setComputerChoice] = useState<string>('');
  const [username, setUsername] = useState('');
  const [result, setResult] = useState<string>('');

  const victoryText = 'W';
  const loseText = 'L';
  const tieText = 'T';

  function getGameResult(): string {
    if (userChoice === computerChoice) {
      return tieText;
    }
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return victoryText;
    }
    return loseText;
  }

  async function handleUserChoice(choice: string) {
    event?.preventDefault();
    setUserChoice(choice);
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setComputerChoice(randomChoice);
    
    const gameResult = getGameResult();
    setResult(gameResult);

    let isVictory;
    if (gameResult === victoryText) {
      isVictory = 1;
    } else if (gameResult === tieText) {
      isVictory = 3;
    } else {
      isVictory = 2;
    }

    const datePlayed = new Date();

    const data = {
      username,
      weapon: choice,
      is_victory: isVictory,
      date_played: datePlayed.toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3004/user_moves", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(await response.text());
    } catch (error) {
      console.error(error);
    }
  }

  function getWeaponText(choice: string): string {
    let resultText = '';

    if (choice === 'rock') {
        resultText = `${t('weaponRock')}`;
    }
    else if (choice === 'paper') {
        resultText = `${t('weaponPaper')}`;
    }
    else {
        resultText = `${t('weaponScissors')}`;
    }

    return resultText;
  }

  function getResultText(result: string): string {
    let resultText = '';

    if (result === 'W') {
        resultText = `${t('victory')}`;
    }
    else if (result === 'L') {
        resultText = `${t('lose')}`;
    }
    else {
        resultText = `${t('tie')}`;
    }

    return resultText;
  }

  return (
    <div>
      <h1 className='title title--heading'>{t('gametitle')}</h1>
      <p className='title player-name'>{t('enterName')}</p>
      <form action="">
      <input
        required
        className='username-input'
        type="text"
        placeholder='UltimateGamer...'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <p className='title title--weapons'>{t('chooseWeapon')}</p>
      <button className='btn btn--rock' onClick={() => handleUserChoice('rock')}></button>
      <button className='btn btn--paper' onClick={() => handleUserChoice('paper')}></button>
      <button className='btn btn--scissors' onClick={() => handleUserChoice('scissors')}></button>
      </form>
      {userChoice && (
        <p className='result-text'>
          {username} {t('chose')} {getWeaponText(userChoice)}. {t('pcChose')} {getWeaponText(computerChoice)}.
        </p>
      )}

      {result && <p className='result'>{getResultText(result)}</p>}
    </div>
  );
}

export default GamePage;
