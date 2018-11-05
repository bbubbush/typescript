let myName: string = "bbubbush";
// myName = 22;

let myAge: number = 29;
// myAge = "29";

let isHeCome: boolean = true;
// isHeCome = 1;

// 이렇게 변수만 선언하고 값을 할당하지 않으면 어떤 형태의 값이든 넣을 수 있다. But 권장하지 않는 방법
let hisBag: any;
hisBag = 22;
hisBag = true;
hisBag = "bag";

// array
let heroes: string[] = ['Batman', 'Captain America', 'Iron Man'];

// tuple
let classB: [string , number] = ['Students', 20];
classB = ["Teachers", 40];

// enum
enum Color {
    Red,        // value = 0
    Green,      // value = 1
    Black = 10, // value = 10
    Blue        // value = 11
}

let color1 = Color.Red;
let color2 = Color.Green;
let color3 = Color.Black;
let color4 = Color.Blue;
console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);

// any
let batmanCar: any = "K5";
batmanCar = {maker: "KIA", manufactured: 2017};