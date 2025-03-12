// 책 정보를 담는 생성자 함수
function Book(title, author, page) {
  // this를 사용하여 객체의 속성을 정의합니다.
  this.title = title; // 책 제목
  this.author = author; // 저자
  this.page = page; // 페이지 수
  this.read = false; // 읽음 여부 (기본값: false)

  // 책 정보를 출력하는 메서드
  this.info = function() {
    return `${this.title}은(는) ${this.author} 작가의 책이며, 총 ${this.page} 페이지입니다.`;
  };

  // 책을 읽음으로 표시하는 메서드
  this.markAsRead = function() {
    this.read = true;
  };
}

// Book 생성자 함수를 사용하여 객체 생성
const book1 = new Book("어린 왕자", "생텍쥐페리", 96);
const book2 = new Book("해리 포터", "조앤 롤링", 336);

console.log(book1.info()); // "어린 왕자는 생텍쥐페리 작가의 책이며, 총 96 페이지입니다."
book2.markAsRead(); // book2를 읽음으로 표시
console.log(book2.read); // true