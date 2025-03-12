function Calculator() {
  this.result = 0; // 계산결과 (기본값 : 0)

  // 숫자를 더하는 메서드
  this.add = function(number) {
    this.result += number;
  };

  // 숫자를 빼는 메서드
  this.subtract = function(number) {
    this.result -= number;
  };

// 계산결과를 초기화하는 메서드
this.clear = function() {
  this.result = 0;
};
}

// Calculator 생성자 함수를 사용하여 객체 생성
const calc = new Calculator();

calc.add(5);
calc.subtract(3);
console.log(calc.result);
calc.add(2);
console.log(calc.result);
calc.clear();
console.log(calc.result);