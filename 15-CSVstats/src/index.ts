import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';


//INHERITANCE
// const reader = new MatchReader('football.csv');
// reader.read()

//COMPOSITION
// Create an abject that satisfies the 'DataReader interface
const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

console.log(matchReader.matches[0][1])

let manUnitedWins = 0;
for (let match of /*reader.data*/ matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('manu wins ' + manUnitedWins)