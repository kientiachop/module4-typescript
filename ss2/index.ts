console.log("Hello World!");

/* 10. type alias (kiểu bí danh) */

type Code= string|number;
function statusCode(code:Code):void {
  console.log(`status code is ${code}`);
  
}
statusCode(404);
statusCode("404");

