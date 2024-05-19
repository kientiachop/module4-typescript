// đề 1
// bài 1
// Viết một hàm getShippingCost nhận một quốc gia và trả về chi phí vận chuyển:
// "VN": 10000
// "US": 20000
// "UK": 30000
type NationalType = "VN" | "US" | "UK";

function ChooseNational(national: NationalType): number {
  switch (national) {
    case "VN":
      return 10000;
    case "US":
      return 20000;
    case "UK":
      return 30000;
    default:
      return 0;
  }
}

ChooseNational("VN");

// bài 2
// Khởi tạo một biến kiểu Tuple chứa 3 giá trị kiểu number, string và bolean và gán giá
// trị cho biến đó. Sử dụng toán tử spread để lấy 3 giá trị trong đó ra và gán chúng cho
// 3 biến phân biệt.
const tuples: [number, string, boolean] = [1, "2", true];
const [var1, var2, var3] = tuples;

// bài 3
// Viết một chương trình TypeScript sử dụng alias type để:
// Định nghĩa một kiểu dữ liệu mới cho tên người dùng (username) là một string.
// Định nghĩa một kiểu dữ liệu mới cho tuổi người dùng (age) là một number.
// Sử dụng các alias type đã định nghĩa để tạo một đối tượng User với các thuộc tính username và age
type ObjType = {
  userName: string;
  age: number;
};

const Obj: ObjType = {
  userName: "Bình",
  age: 20,
};

// bài 4
// Viết một hàm nhận vào một tham số là một chuỗi.
// Hãy kiểm tra xem chuỗi đó có phải là "success" hay không.
// Nếu đúng, trả về true, ngược lại trả về false
type StringType = "success";
function StringTest(string: StringType): boolean {
  if (string === "success") {
    return true;
  }
  return false;
}

// bài 5
// Khai báo một biến person kiểu Tuple, chứa thông tin về tên và tuổi của một người
const persons: [string, number] = ["Bình", 20];

// bài 6
// Định nghĩa một Type Alias cho kiểu dữ liệu Coordinates là một Tuple chứa hai số thực,
// tương ứng với vị trí (latitude, longitude).
type Latitude = number;
type Longitude = number;
const Coordinates: [Latitude, Longitude] = [2.7, 3.5];

// bài 7 (chưa xong)
// Định nghĩa một Type Alias cho kiểu dữ liệu HTTPMethod là một Literal Type,
// chỉ có thể nhận giá trị là "GET", "POST", "PUT" hoặc "DELETE".
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

// bài 8
// Viết một hàm nhận vào một Tuple chứa thông tin về một mặt hàng (tên, giá, số lượng).
// Tính tổng tiền dựa trên giá và số lượng.
type ProductTuples = [string, number, number];
function Product(product: ProductTuples): number {
  const [productName, price, quantity] = product;
  return price * quantity;
}

const productInput1: ProductTuples = ["quần thun", 20000, 10];
console.log(Product(productInput1));

// bài 9
// Định nghĩa một Type Alias cho kiểu dữ liệu ResponseStatus,
// là một Literal Type với giá trị "success" hoặc "error",
// kèm theo một thuộc tính message kiểu chuỗi.
type ResponseLiteral = "success" | "error";
type SuccessAlias = string;
type ErrorAlias = string;