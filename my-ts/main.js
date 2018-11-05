var myName = "bbubbush";
// myName = 22;
var myAge = 29;
// myAge = "29";
var isHeCome = true;
// isHeCome = 1;
// 이렇게 변수만 선언하고 값을 할당하지 않으면 어떤 형태의 값이든 넣을 수 있다. But 권장하지 않는 방법
var hisBag;
hisBag = 22;
hisBag = true;
hisBag = "bag";
// array 
var heroes = ['Batman', 'Captain America', 'Iron Man'];
// tuple
var classB = ['Students', 20];
classB = ["Teachers", 40];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Black"] = 10] = "Black";
    Color[Color["Blue"] = 11] = "Blue"; // value = 11
})(Color || (Color = {}));
var color1 = Color.Red;
var color2 = Color.Green;
var color3 = Color.Black;
var color4 = Color.Blue;
console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);
// any
var batmanCar = "K5";
batmanCar = { maker: "KIA", manufactured: 2017 };
// function return type
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// function argments type 
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(3, 10));
