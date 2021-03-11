// // // // let n: any = 1;

// // // // n = 'Robb';

// // // let isWinter: boolean = false;
// // // // isWinter = 123;

// // // let count: Number = 5;
// // // let name: String = 'Bran';

// // // let names: any[] = ['Jon', 'Rickon', 'Arya', 5];

// // // enum Starks {
// // //   Jon,
// // //   Bran,
// // //   Eddard,
// // //   Catlyn,
// // // }

// // // let cat: Starks = Starks.Catlyn;

// // // function getName(): void {
// // //   console.log('Winter is coming!');
// // // }

// // interface Stark {
// //   name: string;
// //   age?: number;
// // }

// // function printName(stark: Stark) {
// //   console.log(stark.name);
// // }

// // printName({ name: 'Eddard' });
// // printName({ name: 'joe' });

// class Stark {
//   name: string = 'Brandon';
//   static castle: string = 'Winterfell!';
//   saying: string;

//   constructor() {
//     this.saying = 'Winterfell!';
//   }

//   hello(person: string) {
//     console.log('Hello ' + person);
//   }
// }

// let ned = new Stark();
// ned.saying = 'Winter is coming!';
// // console.log(Stark.castle);
// ned.hello('Robbert');

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  dance() {
    console.log(this.name + ' is dancing!');
  }
}

let bran = new Person('Bran');

bran.dance();

class AwesomePerson extends Person {
  dance() {
    console.log('SO AWESOME!!');
    super.dance();
  }
}

let robb = new AwesomePerson('Robb');
robb.dance();
