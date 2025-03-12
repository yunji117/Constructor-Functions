function Car (make, model, year) {
  this.make = make; // 제조사
  this.model = model; // 모델명
  this.year = year; // 연식
  this.isRunning - false ; // 주행여부(기본값: false)

  // 자동타를 주행 상태로 변경하는 메서드
  this.start = function() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} ${this.year} 주행 시작!`)
  };

  // 자동차를 정지 상태로 변경하는 메서드
  this.stop = function() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} ${this.year} 주행 정지!`)
  };
}

// Car 생성자 함수를 사용하여 객체 생성
const car1 = new Car("현대", "소나타", 2023);
const car2 = new Car("기아", "K5", 2022);

car1.start();
car2.stop(); 