class SomeAPI {

  //생성자 = methodType
  constructor(methodType, url, ) {
    this.methodType = methodType;
    this.url = url;
  }

  set methodType(methodType){
    if(typeof(methodType) === "String"){
      if(methodType === "GET"){
        this._methodeType = methodType;
      } else {
        console.error("GET 요청 아님 저리가셈")
      }
    } else {
      console.error("문자열 아님 저리가셈")
    }
  }

  set url(url){
    if(typeof(url) === "string"){
      if(url.includes("https://")){
        this._url = url;
      } else {
        console.log("http:// 없음 저리가셈")
      }
    }
  }

  get methodType() {
    return this._methodType;
  }

  get url () {
    return this._url;
  }

}

const apiData = new SomeAPI("POST", "heep://");
const test = new SomeAPI("GET", "https://pokeapi.co/api/v2/pokemon/ditto")
// console.log(apiData);
console.log(test);
console.log(test.methodType);
console.log(test.url);