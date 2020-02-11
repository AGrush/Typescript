import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// //ARRAY
// const numbersCollection = new NumbersCollection([10, 3 , -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// //STRING
// const charactersCollection = new CharactersCollection('XouaheSoijhdsf');
// charactersCollection.sort();
// console.log(charactersCollection.data)

//LINKEDLIST
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(30);
linkedList.add(12);
linkedList.sort();
linkedList.print();