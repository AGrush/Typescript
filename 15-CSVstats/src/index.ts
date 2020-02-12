import fs from 'fs';

//encoding utf-8 results in a returned string instead of a buffer
const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
})
.split('\n')
.map((row:string): string[] => {
  return row.split(',');
})


// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('manu wins ' + manUnitedWins)