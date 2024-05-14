//bài tập 1
type Obj = {
  name: string,
  age: number,
  job: string
}

let obj:Obj = {
  name: "Kiên",
  age: 25,
  job: "Nhân viên văn phòng"
}
//bài tập 2
let userName:string = "hehehe";
// userName = 21'
/* báo về kết quả error => vì khai báo biến gán kiểu dữ liệu là string thì biến chỉ nhận giá trị string, khai báo là số sẽ lỗi*/
// bài tập 3
let so1:number = 1;
let so2:number = 2;
let so3:number = so1 + so2;
console.log(so3);

//bài tập 4
let isSth:boolean = true;
if (isSth == true) {
  console.log("xin chào");
} else {
  console.log("tạm biệt");
}

//bài tập 5
let bien1:undefined = undefined;
let bien2:number = 2;
let bien3 = "linh tinh";
console.log(bien1,bien2,bien3);
/* in ra cả 3 biến đều hiện kết quả bởi mỗi biến có 1 kiểu dữ liệu khác nhau nên khi in ra hiển thị giá trị sau khi gán */

//bài tập 6
let bien11:string = "2";
let bien22:number = 2;
// if (bien11 === bien22) {
//   console.log("kết quả so sánh");
// }
/* hai biến khác giá trị, 1 kiểu là string, 1 kiểu number nên khi đưa ra so sánh không trùng kiểu dữ liệu nên eror */
 
//bài tập 7
let num1:number = 4;
let num2:number = 3;
// let num3:number = num1-num2;
// console.log(num3);
// let num3:number = num1+num2;
// console.log(num3);
/* ban đầu kiểu dữ liệu của num1, num2 là number. sau khi thay đổi kiểu dữ liệu
của num1:string và num2:boolean thì giá trị không phù hợp với kiểu dữ liệu
=> các phép tính không thực hiện được */

//bài tập 8
let firstName:string = "Hoho";
let lastName:string = "Hehe";
let fullName1 = firstName + " " + lastName
console.log(fullName1);

//bài tập 9
let word:string = "banana";
let uniqueWord:string ="";
for (let i = 0; i < word.length; i++) {
  if (uniqueWord.indexOf(word[i]) === -1) {
      uniqueWord += word[i]
  }
}
console.log(uniqueWord);

