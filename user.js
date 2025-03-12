class User{
  constructor(username, email, password){
    this.username = username; // 사용자 이름
    this.email = email; // 이메일
    this.password = password; // 비밀번호(실제 서비스에서는 암호화 필수)
    this.loggedIn = false; // 로그인 상태
  }

  // 로그인 메서드
  Login (password){
    if (this.password === password){
      this.loggedIn = true;
      console.log(`${this.username}님, 로그인되었습니다.`);
    } else {
      console.log("비밀번호가 일치하지 않습니다.");
    }
  }

  // 로그아웃 메서드
  logout() {
    this.loggedIn = false;
    console.log(`${this.username}님, 로그아웃되었습니다.`)
  }

  // 사용자 정보 출력 메서드
  disPlayUserInfo() {
    console.log(`사용자 이름: ${this.username}, 이메일: ${this.email}, 로그인 상태 : ${this.loggedIn}`)
  }
}

const user1 = new User("홍길동", "hong@gmail.com", "password123")
const user2 = new User("춘향이", "chun@gmail.com", "password234")

user1.Login("password123");
user2.Login("wrongPassword")
user1.logout();
user2.disPlayUserInfo();