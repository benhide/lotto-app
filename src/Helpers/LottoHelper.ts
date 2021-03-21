export const NUMBERS_AVAILABLE = Array.from(Array(59).keys());

export function getWinnings(
  lottoNumbers: number[],
  playerNumbers: number[]
): string {
  const intersection = lottoNumbers.filter((numberToCheck) =>
    playerNumbers.includes(numberToCheck)
  );

  let winnings = 'Sorry you did not win this time';

  switch (intersection.length) {
    case 3:
      winnings = 'You won: £50';
      break;
    case 4:
      winnings = 'You won: £100';
      break;
    case 5:
      winnings = 'You won: £200';
      break;
    case 6:
      winnings = 'You won: £500';
      break;
  }

  return winnings;
}

export function randomiseNumbers(lottoNumbers: number[]): number[] {
  const numbersAvailable: number[] = NUMBERS_AVAILABLE.map(
    (lottoNumber) => lottoNumber
  );
  const generatedNumbers: number[] = [];

  for (let i = 0; i < lottoNumbers.length; i++) {
    const randomNumber = Math.floor(
      Math.random() * (numbersAvailable.length - 1)
    );

    generatedNumbers.push(numbersAvailable[randomNumber] + 1);
    numbersAvailable.splice(randomNumber, 1);
  }

  return generatedNumbers;
}
