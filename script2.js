///////////////////////////////// 함수 //////////////////////////////

// 함수 : 어떤 목적을 가지고 작성한 코드를 모아 둔 블록문 (여러줄 코드 한번에 실행)
// 필요할 때 마다 코드를 새로 작성할 필요 없이 정의한 함수를 호출하기 만 하면 된다.

function gugudan() { // 함수 시작
    for(let i = 1; i <= 9; i++){
        console.log(`3*${i}` = `${3*i}`);
    }
}  // 함수 끝


// 1. 함수 선언문으로 함수 정의

function gugudan(){
    for(let i = 1; i <= 9; i++){
        console.log(`3*${i}= ${3*i}`);
    }
}
// gugudan(); -- 이렇게 하면 불려져서 사용할 수 있다.

// 구구단의 매개변수로 맞게 받아서 출력하기.
//함수의 경우 가로 열고 닫고 해줘야된다.
function gugudan3(dan) {
    for(let i = 1; i <=9; i++) {
        console.log(`3 * ${i} = ${dan * i}`);
    }
}
gugudan3(3);

const funcGugudan1 = (dan) => { //함수에 담는거 처럼!
    for(let i = 1; i <=9; i++) {
        console.log(`${dan} * ${i} = ${dan *i}`);
    }
};
funcGugudan6(1);


// 2. 함수 표현식으로 함수 정의하기
// 함수 : 객체에서 파생된 자료형.
// 함수도 변수에 할당 가능함. 이를 이용한 함수 정의 방법 -> 함수 표현식
// const 변수명 = function(){}; 익명함수
// const 변수명 = function 식별자(){}; 네이밍 함수 // 변수명으로 호출하기

const gugudan2 = function gugudan(){
    for(let i = 1; i<=9; i++){
        console.timeLog(`3*${3*i}`);
    }
};
gugudan2(); // 함수 호출

// 3. 화살표 함수로 함수 정의하기 () => {};

const gugudan5 = () => {
    for(let i = 1; i <= 9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};
gugudan5();

///// 함수 확장하기

// 1. 매개변수와 인수
function gugudan6(){
    for(let i; i<= 9; i++){
        console.log(`5*${i} = ${5*i}`);
    }
}
function gugudan8(){
    for(let i=1; i<= 9; i++){
        console.log(`8 * ${i} = ${8*i}`);
    }
}


// 매개변수 처리하는 방법
// num1, num2 파라미터? 라는거 사용법에 맞게 sum이라는 것을 호출 시 부르는
// n1, n2 인수가 2개라는 것.
function sum(num1, num2) {
    let result = num1 + num2;
    console.log("sum =" + result);
}
let n1 = 10;
let n2 = 20;
sum(n1, n2);


// 인수가 2개 들어간다.
function sum(num1, num2) {
    let result = num1 + num2;
    console.log("sum =" + result);
}
sum(10, 20);

// script.js 이런 표기법은 좋지 않아.
// script_main.js
// script_common.js
// int a, b, c 이런거도 안돼. 의미 있게 써야한다.

function gugudan3() {//함수의 경우 가로 열고 닫고 해줘야된다.
    for(let i = 1; i <=9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
gugudan3();

const funcGugudan4 = function gugudan4() { //함수에 담는거 처럼!
    for(let i=1; i <=9; i++) {
        console.log(`4 * ${i} = ${4 * i}`);
    }
};
funcGugudan4(); //함수 만들어서 호출하듯이.

const funcGugudan5 = function() { //함수에 담는거 처럼!
    for(let i = 1; i <=9; i++) {
        console.log(`5 * ${i} = ${5 *i}`);
    }// 함수 자체가 이게 정의되고 나서 바뀔 일이 거의 없기 때문에, const
};
funcGugudan5();

const funcGugudan6 = () => { //함수에 담는거 처럼!
    for(let i = 1; i <=9; i++) {
        console.log(`6 * ${i} = ${6 *i}`);
    }
};
funcGugudan6();
///////////////////////////////////////////////////////////////////////
/*
function gugudan3() {//함수의 경우 가로 열고 닫고 해줘야된다.
    for(let i = 1; i <=9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
gugudan3();

let funcGugudan4 = function gugudan4() { //함수에 담는거 처럼!
    for(let i=1; i <=9; i++) {
        console.log(`4 * ${i} = ${4 * i}`);
    }
};
funcGugudan4(); //함수 만들어서 호출하듯이.

let funcGugudan5 = function() { //함수에 담는거 처럼!
    for(let i = 1; i <=9; i++) {
        console.log(`5 * ${i} = ${5 *i}`);
    }
};
funcGugudan5();

let funcGugudan6 = () => { //함수에 담는거 처럼!
    for(let i = 1; i <=9; i++) {
        console.log(`6 * ${i} = ${6 *i}`);
    }
};
funcGugudan6();
*/