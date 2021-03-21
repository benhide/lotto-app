interface ISelectableNumberProps {
  selectableNumber: number;
  areNumbersSelected: boolean;
  isGamePlayed: boolean;
  selectedPlayerNumbers: number[];
  selectNumber: (slectedNumber: number) => void;
}

const SelectableNumber = (props: ISelectableNumberProps): JSX.Element => {
  const {
    selectableNumber,
    selectNumber,
    areNumbersSelected,
    isGamePlayed,
    selectedPlayerNumbers,
  } = props;

  const checked = selectedPlayerNumbers.includes(selectableNumber);

  return (
    <>
      <label
        style={{
          textAlign: 'left',
          marginRight: '10px',
          marginBottom: '5px',
          width: '100px',
          display: 'inline-block',
          border: '1px solid black',
          background: 'white',
        }}
      >
        <input
          style={{
            marginRight: '10px',
          }}
          type="checkbox"
          value={selectableNumber}
          disabled={areNumbersSelected || isGamePlayed}
          checked={checked}
          onChange={() => selectNumber(selectableNumber)}
        />
        {selectableNumber}
      </label>
      {selectableNumber % 6 === 0 ? <br /> : ''}
    </>
  );
};

export default SelectableNumber;
