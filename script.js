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

//let num = 1;
while(true) {
    console.log(num);
    if(num > 5) {
        breakl
    }
    num++;
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
