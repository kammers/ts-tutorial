// // // // let n: any = 1;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + ' is dancing!');
    };
    return Person;
}());
var bran = new Person('Bran');
bran.dance();
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.dance = function () {
        console.log('SO AWESOME!!');
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
var robb = new AwesomePerson('Robb');
robb.dance();
