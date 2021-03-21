import { useState } from 'react';
import LotteryNumber from 'Components/LotteryNumber';
import NumberSelect from 'Components/NumberSelect';
import {
  getWinnings,
  NUMBERS_AVAILABLE,
  randomiseNumbers,
} from 'Helpers/LottoHelper';

const LotteryContainer = (): JSX.Element => {
  const [arePlayerNumbersSelected, setPlayerNumbersSelected] = useState(false);
  const [isGamePlayed, setGamePlayed] = useState(false);

  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);
  const [playerNumbers, setPlayerNumbers] = useState([] as number[]);

  const [winnings, setWinnings] = useState('');

  const textStyle = {
    margin: '10px',
    fontSize: '20px',
  };

  const selectPlayersNumber = (selectedPlayersNumber: number[]): void => {
    setPlayerNumbers(selectedPlayersNumber);
    setPlayerNumbersSelected(selectedPlayersNumber.length === 6);
  };

  const playGame = (): void => {
    const generatedNumbers = randomiseNumbers(lottoNumbers);

    setLottoNumbers(generatedNumbers.sort((a, b) => a - b));
    setGamePlayed(true);

    const winnings = getWinnings(lottoNumbers, playerNumbers);
    setWinnings(winnings.toString());
  };

  const resetGame = (): void => {
    setLottoNumbers([0, 0, 0, 0, 0, 0]);
    setPlayerNumbers([]);

    setPlayerNumbersSelected(false);
    setGamePlayed(false);

    setWinnings('');
  };

  return (
    <>
      <div>
        {lottoNumbers.map((lottoNumber, index) => {
          return (
            <LotteryNumber
              key={index}
              ballNumber={lottoNumber}
              ballHeaderNumber={`BALL ${(index + 1).toString()}`}
            />
          );
        })}
      </div>
      <br />
      <div style={textStyle}>
        Select your numbers from the list or play
        <NumberSelect
          numbersToSelect={NUMBERS_AVAILABLE}
          selectPlayerNumbers={selectPlayersNumber}
          isGamePlayed={isGamePlayed}
          lottoNumbers={lottoNumbers}
        />
      </div>
      <br />
      <div
        style={{ fontSize: '20px' }}
      >{`Selected numbers: ${playerNumbers.join(' - ')}`}</div>
      <div>
        <button
          style={textStyle}
          onClick={playGame}
          disabled={!arePlayerNumbersSelected || isGamePlayed}
        >
          PLAY!
        </button>
        <button style={textStyle} onClick={resetGame} disabled={!isGamePlayed}>
          RESET GAME
        </button>
      </div>
      <div style={{ fontSize: '40px' }}>
        {winnings.length > 0 && <p>{winnings}</p>}
      </div>
    </>
  );
};

export default LotteryContainer;
