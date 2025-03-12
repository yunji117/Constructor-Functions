class Product {
  constructor(name, price, category, stock){
    this.name = name; // 상품명
    this.price = price; // 가격
    this.category = category; // 카테고리
    this.stock = stock; // 재고수량
  }

  // 상품 정보를 출력하는 메서드
  displayInfo() {
    console.log(`상품명: ${this.name}, 가격: ${this.price}원, 카테고리: ${this.category}, 재고: ${this.stock}개`)
  }

  // 재고를 추가하는 메서드
  addStock(quantity){
    this.stock += quantity;
    console.log(`${this.name} 재고가 ${quantity}개 추가되었습니다. 현재 재고 : ${this.stock}개`)
  }

  // 상품을 판매하는 메서드
  sell(quantity){
    if(this.stock >= quantity){
      this.stock -= quantity;
      console.log(`${this.name} ${quantity}개가 판매되었습니다. 현재 재고 : ${this.stock}개`)
    } else {
      console.log(`재고가 부족합니다. 현재재고 : ${this.stock}개`);
    }
  }
}

const product1 = new Product("시리얼", 8000, "식품", 18);
const product2 = new Product("맨투맨", 16000, "의류", 28);

product1.displayInfo();
product2.sell(20);
product1.addStock(5);