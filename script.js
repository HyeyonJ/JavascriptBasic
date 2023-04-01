// 변수, 상수
//var 
//let     // 대부분의 변수
//const   // 상수형(한번 값이 들어가고 바뀔일이 없는 경우)


//let num = 10;
let num;
num = 20;
num = num + 30;

const num2 = 30;
//num2 = 40; // 이렇게 값을 담고 나서 바뀌면 안됨.

///////////////////////////////////////////////////////////// 암시적 형변환
let num3 = 10;
let strNum3 = "10";
if(num == strNum3) { // 문자열을 숫자형으로 형 변환
    console.log('equals');
}

//////////////////////////////////////////////////////////// 명시적 형변환
let num4 = 10;
let strNum4 = "10";
if(String(num4) == strNum4) { // 문자열을 숫자형으로 명시적 형 변환
    console.log('equals');
}

//////////////////////////////////////////////////////////// 조건문 다루기
for(let i=1; i<=5; i++) { //오류 끝날때 까지 i는 1 이어야함.
    console.log(i);
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
