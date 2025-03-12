// 강아지 정보를 담는 생성자 함수
function Dog(name, breed, age) {
this.name = name; // 이름
this.breed = breed; // 품종
this.age = age; // 나이
this.isSleeping = false; // 잠자는 여부 (기본값: false)

// 강아지가 짖는 메서드
this.bark = function() {
  console.log("왈왈!");
};

// 강아지를 잠자는 상태로 변경하는 메서드
this.sleep = function() {
  this.isSleeping = true;
  console.log(`${this.name}이(가) 잠자리에 들었습니다.`);
};

}
// Dog 생성자 함수를 사용하여 객체 생성
const dog1 = new Dog("두부", "포메라니안", 2);
const dog2 = new Dog("인절미", "진돗개", 3);

dog1.bark();
dog2.sleep() ; 