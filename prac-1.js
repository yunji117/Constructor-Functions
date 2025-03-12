class Student {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  // 1차 set이다. set에서 name 값을 검사한다. 
  set name(name){
    if(typeof(name) ==="string"){
      // set을 거쳤다라는 의미로 _(undervar)를 사용한다. 
      this._name = name;
    }
  }
  set age(age) {
    let num = Number(age); //* 문자열을 숫자로 변환
    if(isNaN(num) === false) { // * Not a Number / boolean
      this._age = num;
    }



    // if(typeof(age) === "number" ){
    //   this._age = age;
    // }
  }
 
set job (job) {
  if(typeof(job) === "string"){
    this._job = job;
  }
}


get name() {
  return this._name + "ser";

}

ulLiAssemble () {
return `
<ul>
<li>이름: ${this._name}</li>
<li>나이: ${this._age}</li>
<li>직업: ${this._job}</li>

</ul>
`;
}

}

const test = new Student('김재승', 39, '띱');

 console.log(test.ulLiAssemble());

console.log(test);
console.log(test._age);
console.log(test.name);
console.log(this._job);

// const obj = {
//   name : '김재승',
//   age : 39, 
//   job : '띱'

// }