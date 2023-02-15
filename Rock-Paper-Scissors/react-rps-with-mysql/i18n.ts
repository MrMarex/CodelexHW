import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          loading: 'Loading...',
          title: 'RPS Game.',
          home: 'Home',
          game: 'Game',
          allPlayers: 'All players',
          statistics: 'Statistics',
          gameInfo: `Rock paper scissors (also known by other 
            orderings of the three items, with "rock" sometimes being called 
            "stone," or as Rochambeau, roshambo, or ro-sham-bo) is a 
            hand game, usually played between two people, in which each player 
            simultaneously forms one of three shapes with an outstretched hand. 
            These shapes are "rock" (a closed fist), "paper" (a flat hand), and 
            "scissors" (a fist with the index finger and middle finger extended,
             forming a V). The earliest form of "rock paper scissors"-style game 
             originated in China and was subsequently imported into Japan, where 
             it reached its modern standardized form, before being spread 
             throughout the world in the early 20th century.`,
          instructions: `Rock beats scissors. Scissors beat paper. Paper beats rock.`,
          victory: 'Victory!',
          lose: 'OMG, You lost to a bot!',
          tie: 'You tied!',
          gametitle: 'Rock Paper Scissors.',
          enterName: 'Enter your name:',
          chooseWeapon: 'Choose your weapon:',
          chose: 'chose',
          pcChose: 'The computer chose',
          listAllPlayers: 'List of all players.',
          id: 'ID',
          username: 'USERNAME',
          gamesPLayed: 'GAMES PLAYED',
          playersName: 'Enter players name:',
          win: 'WON',
          lost: 'LOST',
          tied: 'TIED',
          weaponRock: 'Rock',
          weaponPaper: 'Paper',
          weaponScissors: 'Scissors',
        },
        
      },
      lv: {
        translation: {
          loading: 'Notiek ielāde...',
          title: 'Spēle RPS.',
          home: 'Sākums',
          game: 'Spēle',
          allPlayers: 'Visi spēlētāji',
          statistics: 'Statistika',
          gameInfo: `Akmens, šķēres, papīrīts ir roku spēle, kas parasti tiek spēlēta
          starp diviem cilvēkiem, kurā katrs spēlētājs vienlaikus veido vienu no trim 
          formām ar izstieptu roku. Šīs formas ir "akmens" (aizvērta dūre), "papīrs" (plakana roka) un
          "šķēres" (dūre ar izstieptu rādītājpirkstu un vidējo pirkstu,
           veidojot V). Agrākā "akmens, šķēres, papīrīts" stila spēles forma
           izcelsme ir Ķīnā un pēc tam tika importēta Japānā, kur
           tas sasniedza savu moderno standartizēto formu, pirms tika izplatīts
           visā pasaulē 20. gadsimta sākumā.`,
          instructions: `Akmens uzvar šķēres. Šķēres uzvar papīru. Papīrs uzvar akmeni.`,
          victory: 'Uzvara!',
          lose: 'Ak Dievs, Tu zaudēji botam!',
          tie: 'Neizšķirts!',
          gametitle: 'Akmens, šķēres, papīrīts.',
          enterName: 'Ievadi savu vārdu:',
          chooseWeapon: 'Izvēlies savu ieroci:',
          chose: 'izvēlējās',
          pcChose: 'Dators izvēlējās',
          listAllPlayers: 'Visu spēlētāju saraksts.',
          id: 'ID',
          username: 'LIETOTĀJVĀRDS',
          gamesPLayed: 'IZSPĒLĒTAS SPĒLES',
          playersName: 'Ievadiet spēlētāja vārdu:',
          win: 'UZVARĒJA',
          lost: 'ZAUDĒJA',
          tied: 'NEIZŠĶIRTS',
          weaponRock: 'Akmens',
          weaponPaper: 'Papīrs',
          weaponScissors: 'Šķēres',
        }
      },
      ru: {
        translation: {
          loading: 'Загрузка...',
          title: 'Игра RPS.',
          home: 'Начало',
          game: 'Игра',
          allPlayers: 'Все игроки',
          statistics: 'Статистика',
          gameInfo: `Камень-ножницы-бумага (также известные под другим порядком трех 
            предметов, где «камень» иногда называют «камнем», или как Рошамбо, 
            рошамбо или ро-шам-бо) — это ручная игра, в которую обычно играют два 
            человека в в котором каждый игрок одновременно образует одну из трех фигур 
            вытянутой рукой. Это «камень» (сжатый кулак), «бумага» (плоская рука) и 
            «ножницы» (кулак с вытянутыми указательным и средним пальцами, образующими 
            букву V). Самая ранняя форма игры в стиле «камень-ножницы-бумага» 
            возникла в Китае и впоследствии была импортирована в Японию, 
            где достигла своей современной стандартизированной формы, а 
            затем распространилась по всему миру в начале 20 века.`,
          instructions: `Камень побеждает ножницы. Ножницы побеждают бумагу. Бумага побеждает камень.`,
          victory: 'Победа!',
          lose: 'ОМГ, ты проиграл боту!',
          tie: 'Ничья!',
          gametitle: 'Камень Hожницы Бумага.',
          enterName: 'Введите ваше имя:',
          chooseWeapon: 'Выберите ваше оружие:',
          chose: 'выбрал',
          pcChose: 'Компьютер выбрал',
          listAllPlayers: 'Список всех игроков.',
          id: 'ИД',
          username: 'ИМЯ ПОЛЬЗОВАТЕЛЯ',
          gamesPLayed: 'ИГР СЫГРАНО',
          playersName: 'Введите имя игрока:',
          win: 'ВЫИГРАЛ',
          lost: 'ПРОИГРАЛ',
          tied: 'НИЧЯ',
          weaponRock: 'Камень',
          weaponPaper: 'Бумага',
          weaponScissors: 'Ножницы',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
