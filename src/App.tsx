import './App.css';

import LotteryContainer from 'Components/LotteryContainer';

const App = (): JSX.Element => {
  return (
    <div>
      <header
        style={{ fontSize: '46px', padding: '20px', background: '#0099ff' }}
      >
        Lotto
      </header>
      <div
        style={{
          background: '#0099ff',
          paddingTop: '20px',
          paddingBottom: '20px',
          minHeight: '775px',
        }}
      >
        <LotteryContainer />
      </div>
    </div>
  );
};

// <div className="App">
//   <header className="App-header">Lotto</header>

export default App;
