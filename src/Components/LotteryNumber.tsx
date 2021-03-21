interface ILotteryNumber {
  ballNumber: number;
  ballHeaderNumber: string;
}

const LotteryNumber = (props: ILotteryNumber): JSX.Element => {
  const { ballNumber, ballHeaderNumber } = props;

  const ballColour = ballNumber ? 'yellow' : 'white';

  return (
    <div
      style={{
        marginRight: '10px',
        display: 'inline-block',
        border: '1px solid black',
        width: '100px',
        borderRadius: '60px',
        background: ballColour,
      }}
    >
      <h4>{ballHeaderNumber}</h4>
      <div style={{ fontSize: '30px' }}>{ballNumber || '?'}</div>
    </div>
  );
};

export default LotteryNumber;
