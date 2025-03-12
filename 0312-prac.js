class Student {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  set name(name) {
    if(typeof(name) === "string"){
      this._name = name;
    }
  }

  set age(age){
    let num = Number(age); // * 문자열을 숫자로 변환
    if(isNaN(num) === false){ //* Not a Number / boolean
      if(num > 20){ //* 20살을 초과하는지 확인
        this._age = num;
        this._isAdult = true; //* 성인으로 설정
      } else {
        this._age = num;
        this._isAdult = false; //* 미성년자로 설정
      }
    }
  }

  set job(job) {
    if(typeof(job) === "string"){
      this._job = job;
    }
  }

  get name() {
    return this._name;
  }

  get nameLenght() {
    return this._name ? this._name.length : 0; //* 이름의 길이 반환
  }

  get isAdult () {
    return this._isAdult; //* 성인 여부 반환
  }

  ulLiAssemble() {
    return`
    <ul>
    <li>name : ${this._name}</li>
    <li>age : ${this._age}</li>
    <li>job : ${this._job}</li>
    <li>Adult : ${this._isAdult ? 'adult' : 'minor'}</li>

    </ul>
    `;
  }
}

// test 예제
const gong = new Student("gongukjea", "40", "anginier");
console.log(`name: ${gong.name}, length : ${gong.nameLenght}, adult: ${gong.isAdult}, job: ${gong.job}`)
console.log(gong.ulLiAssemble());

const minji = new Student("kimminji", "19", "student");
console.log(`name : ${minji.name}, length : ${minji.nameLenght}, adult: ${minji.isAdult}, job : ${minji.job}`)
console.log(minji.ulLiAssemble());