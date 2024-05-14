"use strict";
console.log("Hello World");
// kiểu dữ liệu number
let age = 5;
// kiểu dữ liệu string
let fullName = "Minh Thu";
// kiểu dữ liệu null
let nullVariable = null;
// kiểu dữ liệu undefined
let undefinedVariable = undefined;
// trong TS k có kiểu dữ liệu NaN
// kiểu dữ liệu boolean
let isCheck = true;
//array
//giả sử  muốn khai báo 1 mảng các số
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
//giả sử muốn khai báo sinh viên
let students = ["hoa", "vinh", "tài"];
let student = {
    name: "hoa",
    address: "hà nội",
    age: 25
};
// giả sử tạo 1 cái mảng chứa các sinh viên
let students1 = [{
        name: "hoa",
        address: "hà nội",
        age: 25
    },
    {
        name: "thu",
        address: "đà nẵng",
        age: 24
    },
];
//kiểu dữ liệu bất kì (any)
//mình làm việc TS nên hạn chế dùng TS
let a = 5;
//function
/* 1 kiểu dữ liệu cho tham số nhận vào
2 là kiểu dữ liệu trả về của hàm */
// đối với function mà không cần dữ liệu trả về thì để kiểu dữ liệu void
function sayHello() {
    console.log("xin chào!");
}
sayHello();
//function cần dữ liệu trả về
function tinhTong(a, b) {
    return a + b;
}
