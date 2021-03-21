import { useEffect, useState } from 'react';
import SelectableNumber from 'Components/SelectableNumber';
import { randomiseNumbers } from 'Helpers/LottoHelper';

interface INumberSelectProps {
  numbersToSelect: number[];
  isGamePlayed: boolean;
  lottoNumbers: number[];
  selectPlayerNumbers: (slectedNumbers: number[]) => void;
}

const NumberSelect = (props: INumberSelectProps): JSX.Element => {
  const [selectedPlayerNumbers, setSelectedPlayerNumbers] = useState(
    [] as number[]
  );
  const {
    numbersToSelect,
    selectPlayerNumbers,
    isGamePlayed,
    lottoNumbers,
  } = props;

  useEffect(() => {
    selectPlayerNumbers(selectedPlayerNumbers);
  });

  const selectNumber = (selectedNumber: number): void => {
    if (selectedPlayerNumbers.length < 6) {
      setSelectedPlayerNumbers([...selectedPlayerNumbers, selectedNumber]);
    }

    if (selectedPlayerNumbers.includes(selectedNumber)) {
      const currentlySelectedNumbers = [...selectedPlayerNumbers];
      const index = currentlySelectedNumbers.indexOf(selectedNumber);

      if (index > -1) {
        currentlySelectedNumbers.splice(index, 1);
      }

      setSelectedPlayerNumbers([...currentlySelectedNumbers]);
    }
  };

  const areNumbersSelected = (numberToSelect: number): boolean => {
    return (
      selectedPlayerNumbers.length === 6 &&
      !selectedPlayerNumbers.includes(numberToSelect + 1)
    );
  };

  const playLuckyDip = (): void => {
    const luckyDipNumbers = randomiseNumbers(lottoNumbers);
    setSelectedPlayerNumbers(luckyDipNumbers);
  };

  return (
    <>
      <button
        style={{ margin: '10px', fontSize: '20px' }}
        onClick={playLuckyDip}
        disabled={isGamePlayed}
      >
        luck dip
      </button>
      <form>
        {numbersToSelect.map((numberToSelect) => (
          <SelectableNumber
            key={numberToSelect}
            areNumbersSelected={areNumbersSelected(numberToSelect)}
            selectableNumber={numberToSelect + 1}
            selectNumber={selectNumber}
            isGamePlayed={isGamePlayed}
            selectedPlayerNumbers={selectedPlayerNumbers}
          />
        ))}
      </form>
    </>
  );
};

export default NumberSelect;
