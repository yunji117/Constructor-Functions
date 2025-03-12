
//? HTML은 
//? 잘 모아놓기만 하면 이게 나만의 라이브러리가 될 수 있다.
// 로직을 매일 짜야되는 상황이면 이렇게 안써도 되는데
// 비슷한 거푸집이 필요하면 쓸 필요가 있다. 

class HTMLmake {
  constructor(head, body) {
    this.head = head;
    this.body = body;
  }

  set head(head) {
    if(typeof(head) === "string") {
      this._head = `<head>${head}</head>`;
    }
  }

  set body(body) {
    if(typeof(body) === "string") {
      this._body = `<body>${body}</body>`;
    }
  }

  get head() {
    return this._head;
  }

  get body() {
    return this._body;
  }

  assemble() {
    return`
    <!DOCTYPE html>
    <html>
    ${this._head}
    ${this._body}
    </html>
    `;
  }
}

const test = new HTMLmake("머리", "몸");
console.log(test.assemble());

