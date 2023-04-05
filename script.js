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

/*
/letrr = ["banana", "apple", "orange"];
let arr2 = [10, 20, 30, 40, 50];
//           0   1   2  3   4    for in
//           10  20  30  40 50   for of
//자바 for (Stirng s : arrays) >> arrays 안에 있는 값이
// JS for ( const item in arr ) >> arr 값이 x , 인덱스 0 1 2


for (const item of arr) {
    //특정 범위를 지정하지는 않았지만 알아서 그 갯수만큼 
    // arr에 들어있는 값을 차례대로 item에 넣어줍니다. (그리고 반복)
}
for (const item in arr) {
    //
}
// in 대신에 of 가능
//arr for(String s : arrs) {출력}
for(const item of arr) {
    console.log(arr[item]);
}


//arr2 for(String s : arrs) {출력}
for(const item of arr2) {
    console.log(arr2[item]);
}

//arr for(String s : arrs) {출력}
for(const item in arr) {
    console.log(arr[item]);
}
*/
/*
//arr2 for(String s : arrs) {출력}
for(const item in arr2) {
    console.log(arr2[item]);
}
*/
/*
for(let i =0; i < ; i++) {
    console.log(arr[i]);
}

//arr2
for(let i= 0; i< ; i++) {
    console.log(arr[i]);
}
*/

// 0~ 20 까지의 수 중에서 홀수만 큰수부터 차례로 출력
// for 문
/*for(let i = 20; i>=0; i--) {
    if ( i%2 === 1) {
        console.log(i);
    }
} 
*/

// 9.5 반복문 다루기
// do while은 그냥 한번 실행하고나서 나중에 참인지 거짓인지 따진다.
/*do {
    console.log('do while 문 내부');
}while(false);

while(조건식) {
    실행할 코드 
    무한이 아닌 이상 조건식이 거짓이 되는 케이스가 발생하게끔 만들어주기.
}
*/
// 1~ 100 출력, 1~100 까지의 합 출력 while문

//선생님 풀이
/*
let sum = 0; //영향 없게 0으로 해줘야하는 것이다.
let num = 1;
while(num <=100) {
    console.log(num);
    sum = sum + num;
    num++;   
}
console.log(sum);
*/

//내 풀이
/*let sum = 0; //영향 없게 0으로 해줘야하는 것이다.
let num = 1;
while(num <=100) {
    sum += num;
    num++;   
}
console.log(sum);
*/



/* 내가 짠 코드
let num = 1;
while (num <=100) {
    console.log(num);
//    let sum;
    num++;
    let sum = num;
    console.log(sum);
}
*/



// if문
// 양수, 음수, 0
/*let num = 0;
if(num>0){ 
    console.log("양수");
}else if(num<0){
    console.log("음수");
} else {
    console.log("0");
}
    

//짝수, 홀수
let num2 = 0;
if( num2 % 2 === 0){
    console.log("짝수");
} else {
    console.log('홀수');
}

// 90 ~ 94 : A , 95 ~ 100 : A+
// switch문
let score = 96;
switch(score) {
    case 90 :
    case 91 :
    case 92 :
    case 93 :
    case 94 :
    case 95 :
        console.log("A")
        break;
    case 96 :
    case 97 :
    case 98 :
    case 99 :
    case 100 :
        console.log("A+")
        break;
}
*/
/*let score = 96;
switch(score) {
    case "90< score && 94>= score" :
        console.log("A");
        break;
    case "95< score && 100>= score" :
        console.log("A+");
        break;
}*/


//9.3 연산자
// let num = -10;
// num = -num;         //-(-10)  = +10
// console.log(num);   //  10

// let incre = 10;
// console.log(incre++);   //10
// console.log(++incre);   //12
// console.log(incre--);   //12
// console.log(--incre);   //10

// let nNum = 10; // 숫자형
// let strNum = '10'; //문자형
// if(nNum == strNum) {           // 자료형을 암시적으로 바꿔버린 것이라, 동일한 타입이 된것이담.
//     console.log('같습니다.');
// } else {
//     console.log('다릅니다.');
// }

// if(nNum === strNum) {            // === 이게 같다? 라는 뜻. === 타입까지 포함해서 같으냐
//     console.log('같습니다.');
// } else {
//     console.log('다릅니다.');
// }

// // 명시적 변환? 그런거 // 형변환하기!~~!
// let sum = 10 + 10; 
// console.log(sum);

// let sum2 = 10 + "10"; 
// console.log(sum2);

// let sum3 = 10 + Number("10"); // 20
// console.log(sum3);

// let sum4 = 10 + String(10); //1010
// console.log(sum4);


// //삼항 연산자
// let score = 90;
// let grade = score >= 90 ? 'A' : 'B';
// console.log(grade);

/*console.log('CodeRunner 로 실행하기'); //ctrl+Alt+N 콘솔에 창이 뜨게 됩니다.

//c언어에서
function func() {
    구현부분
}

/*var a;

a; // 준비가 안되어있는데 있는거 처럼 보고 사용

var a = 10; //old
var a = 20;

let b = 20; // new
const c = 30; // new

// 호이스팅의 개념

console.long(a)
console.long(b)
console.long(c)*/

// let num = 10;
// let str1 = "큰따옴표 '작은따옴표' 문자열";
// let str2 = '작은따옴표 \'큰따옴표\' "큰따옴표" 문자열';
//let str3 = '백틱 "큰따옴표" '작은따옴표' 문자열';
// let str4 = num + "더하기" + num + "은" + (num+num) + "이다";
// let str5 = ` ${num}  더하기 ${num}dms ${num+num}이다`;

// console.log(str4);
// console.log(str5);

// let bool1 = true;
// let bool2 = false;
// let bool3 = 10 > 5;

// console.log(str1);
// console.log(str2);

// let num1 = 10;
// let num2 = 0.5;
// console.log(num1);
// console.log(num2);

// console.log(bool1);
// console.log(bool2);
// console.log(bool3);

// let empty1 = null;
// let empty2;
// console.log(empty1);
// console.log(empty2);

//배열 인덱스
// let arrScores = [10, 20, 50, 80];
// console.log( arrScores[0]);
// console.log( arrScores[1]);
// console.log( arrScores[2]);
// console.log( arrScores[3]);

// let studentScore = {
    // koreanScore:80,
    // englishScore:70,
    // mathScore:90,
    // sienceScore:60
// }; 

// console.log(studentScore.englishScore);
// console.log(studentScore.koreanScore);
// console.log(studentScore['sienceScore']);

