class Todo {
  constructor(task, dueDate, priorrity) {
    this.task = task; // 할 일 내용
    this.dueDate = dueDate; // 마감일
    this.priorrity = priorrity; // 우선순위
    this.completed = false; // 완료 여부
  }

  // 할 일 정보 출력 메서드
  displayTodoInfo() {
    console.log(`할 일: ${this.task}, 마감일 : ${this.dueDate}, 우선순위 : ${this.priorrity}, 완료 여부 : ${this.completed ? "완료" : "미완료"}`);
  }

  // 할 일 완료 표시 메서드
  markAsCompleted() {
    this.completed = true ;
    console.log(`${this.task}을(를) 완료했습니다.`);
  }
}

const todo1 = new Todo("과제 제출", "2025-04-01", "높음");
const todo2 = new Todo("책반납하기", "2025-03-25", "쉬움")

todo1.displayTodoInfo();
todo2.displayTodoInfo();
todo2.markAsCompleted();

