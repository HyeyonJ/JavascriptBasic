/////////////////////////////////////////////////////////////// 변수, 상수
//var 
//let     // 대부분의 변수
//const   // 상수형(한번 값이 들어가고 바뀔일이 없는 경우)


//let num = 10;
let num;
num = 20;
num = num + 30;

const num2 = 30;
//num2 = 40; // 이렇게 값을 담고 나서 바뀌면 안됨.

////////////////////////////////////////////////////////////// 암시적 형변환
let num3 = 10;
let strNum3 = "10";
if(num == strNum3) { // 문자열을 숫자형으로 형 변환
    console.log('equals');
}

////////////////////////////////////////////////////////////// 명시적 형변환
let num4 = 10;
let strNum4 = "10";
if(String(num4) == strNum4) { // 문자열을 숫자형으로 명시적 형 변환
    console.log('equals');
}

////////////////////////////////////////////////////////////// 조건문 다루기
// if(조건식(숫자, 문자열, undefined, null)){ 조건식이 참이면 실행 }

for(let i=1; i<=5; i++) { //오류 끝날때 까지 i는 1 이어야함.
    console.log(i);
}

// if 문
let num5 = 10;
if(num5 % 2 === 0){
    console.log("변수 num5에 할당된 숫자는 짝수입니다.");
}

// else 문
let num6 = 5;
if(num6 % 2 === 0){
    console.log("변수 num6에 할당된 숫자는 짝수입니다.");
} else {
    console.log("변수 num6에 할당된 숫자는 홀수입니다.")
}

// else-if문
let num7 = 0;
if(num7 > 0){
    console.log("양수");
} else if (num < 0){
    console.log("음수");
} else {
    console.log("0");
}

// switch
let food = "melon";
switch(food){
    case "melon":
        console.log("fruit");
        break;
    case "apple":
        console.log("fruit");
        break;
    case "banana":
        console.log("fruit");
        break;
    case "carrot":
        console.log("vegetable");
        break;
    default:
        console.log("It's not fruits and vegetables.");
        break;
}

// if문과 조건식
let score = 90;
if(score >= 90) {
    console.log("A++ 학점");
}

// 무한 반복문
let num8 = 1;
while(num8 <= 9999){
    console.log(num8);
     num8++; // 코드가 한 번 반복될 때마다 num8 변수를 1씩 증가
}

let num9 = 1;
while(true) {
    console.log(num9);
    if(num9 > 5) {
        breakl
    }
    num9++;
}

// do while 문
// do {//블록문} while(조건식);

do {
    console.log("무조건");
    console.log("한 번은 실행");
} while(false);

// for문과 배열
let arr = ["banana", "apple", "orange"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// for .. in 
// for(가변수 in 배열/객체 리터럴){//블록문}
let obj1 = {name: "철수", age:"20"};
for(let key in obj1){
    console.log(key + ":" + obj1[key]);
}

let obj = {
    name: "철수", 
    age:"20", 
    phone:"01012345678"
};
// 반복문을 통해서 obj 안에 있는 값들을 다 출력 가능
console.log(obj.phone);
console.log(obj.age);
console.log(obj.name);

for (let key in obj) {
    console.log(key);
}

// 배열을 반복
let arr2 = ["orange", "banana", "apple"];
for(let index in arr2){
    console.log(index + ":" + arr[index]);
}

// break : 반복문 종료
for(let i = 0; i < 10; i++){
    console.log(i);
    if(i === 5) break;
}

// continue 문 : 반복문 건너뛰고 실행하는 명령
for(let i = 1; i <= 10; i++){
    if(i % 2 === 1) continue;
    console.log(i);
}