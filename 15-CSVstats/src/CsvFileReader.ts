import fs from 'fs';
 
export class CsvFileReader {
  data:string[][] = [];
  
  constructor(public filename:string){}

  read(): void {
    //encoding utf-8 results in a returned string instead of a buffer
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map(
      (row:string): string[] => {
      return row.split(',');
      }
    )
  }
}
