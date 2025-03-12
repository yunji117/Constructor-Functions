// Student 클래스 정의
class Student {
  constructor(order, name, likedFoods, hatedFoods) {
    this.order = order;
    this.name = name;
    this.food = {
      like: likedFoods || [], // 기본값 설정
      hate: hatedFoods || [], // 기본값 설정
    };
  }

  // 좋아하는 음식 추가 메서드
  addLikedFood(food) {
    if (this.food.like.includes(food) === false) {
      this.food.like.push(food);
    }
    return this; // 메서드 체이닝을 위한 반환
  }

  // 싫어하는 음식 추가 메서드
  addHatedFood(food) {
    if (this.food.hate.includes(food) === false) {
      this.food.hate.push(food);
    }
    return this; // 메서드 체이닝을 위한 반환
  }
}

// 가능한 음식 목록
const availableFoods = [
  "짜장면",
  "짬뽕",
  "피자",
  "햄버거",
  "초밥",
  "라면",
  "떡볶이",
  "파스타",
  "김밥",
  "치킨",
  "불고기",
  "비빔밥",
  "된장찌개",
  "김치찌개",
  "삼겹살",
  "갈비탕",
  "냉면",
];

// 배열에서 랜덤하게 n개의 항목을 선택하는 함수
// * 알고리즘이 어려우므로 '적당히' 고른 좋아하는 음식과 싫어하는 음식을 반환하는 것으로 갈음
function getRandomItems(array, n) {
  // 원본 배열을 변경하지 않도록 복사
  const shuffled = (() => {
    const copyArray = [];
    array.forEach((item) => {
      return copyArray.push(item);
    });
    return copyArray.sort(() => 0.5 - Math.random());
  })();
  // 처음 n개 항목 반환
  return shuffled.slice(0, n);
}

// 빈 학생 배열 생성
const students = [];

// 학생 데이터 추가 함수
function addStudent(order, name) {
  // 좋아하는 음식 2~3개 랜덤 선택
  const numLikedFoods = Math.floor(Math.random() * 2) + 2; // 2 또는 3 로 선택하기 위해 사용한 수학적 표현
  const likedFoods = getRandomItems(availableFoods, numLikedFoods);

  // 싫어하는 음식은 좋아하는 음식 제외하고 1~2개 랜덤 선택
  const availableToHate = availableFoods.filter((food) => {
  
    if (likedFoods.includes(food)) {
        return false;
    } else {
        return true;
    }
  });
  const numHatedFoods = Math.floor(Math.random() * 2) + 1; // 1 또는 2 로 선택하기 위해 사용한 수학적 표현
  const hatedFoods = getRandomItems(availableToHate, numHatedFoods);

  // 새로운 Student 객체 생성
  const student = new Student(order, name, likedFoods, hatedFoods);

  // 배열에 추가
  students.push(student);

  // 추가된 학생 객체 반환 (필요시 사용)
  return student;
}

// 학생 데이터 추가

const studentNames = [
  "김민지",
  "김요훈",
  "김윤지",
  "김재승",
  "손정민",
  "안은별",
  "윤종환",
  "최정민",
  "최현준",
  "전선일"
];

//* 어마어마한 퍼포먼스를 내는 부분

studentNames.forEach((name, index) => {
  addStudent(index + 1, name);
});


console.log(students);

console.log(students[2]); // 3번 학생은 인덱스 2에 저장됨

//* 추가적으로 작성한 함수로 '융통성'이 생김
students[0].addLikedFood("갈비탕")
students[0].addHatedFood("냉면");
console.log(students[0]);

students.forEach((student) => {
  console.log(student.name, "좋아하는 음식:", student.food.like, "싫어하는 음식:", student.food.hate);
  });

  const pizzaLovers = students.filter((student) => student.food.like.includes("피자"));
console.log("피자를 좋아하는 학생:", pizzaLovers);