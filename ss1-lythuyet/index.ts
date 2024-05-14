console.log("Hello World");

// kiểu dữ liệu number
let age:number = 5;
// kiểu dữ liệu string
let fullName:string = "Minh Thu";
// kiểu dữ liệu null
let nullVariable:null = null;
// kiểu dữ liệu undefined
let undefinedVariable:undefined = undefined;
// trong TS k có kiểu dữ liệu NaN
// kiểu dữ liệu boolean
let isCheck:boolean = true;
//array
//giả sử  muốn khai báo 1 mảng các số
let numbers:number[] = [1,2,3,4,5];
numbers.push(6);
//giả sử muốn khai báo sinh viên
let students:string[]= ["hoa","vinh","tài"];

//khai báo kiểu dữ liệu object
//C1
// type Student={
//   name: string,
//   address: string,
//   age: number
// }
// let student:Student = {
//   name: "hoa",
//   address: "hà nội",
//   age: 25
// }
//C2: Interface
interface Student{
  name: string,
  address: string,
  age: number
}
let student: Student = {
  name: "hoa",
  address: "hà nội",
  age: 25
}

// giả sử tạo 1 cái mảng chứa các sinh viên
let students1:Student[] = [{
  name: "hoa",
  address: "hà nội",
  age: 25
},
{
  name: "thu",
  address: "đà nẵng",
  age: 24
},
]

//kiểu dữ liệu bất kì (any)
//mình làm việc TS nên hạn chế dùng TS
let a:any = 5;

//function
/* 1 kiểu dữ liệu cho tham số nhận vào
2 là kiểu dữ liệu trả về của hàm */
// đối với function mà không cần dữ liệu trả về thì để kiểu dữ liệu void
function sayHello() :void {
  console.log("xin chào!");
  
}
sayHello();

//function cần dữ liệu trả về
function tinhTong(a:number,b:number): number {
  return a + b
}