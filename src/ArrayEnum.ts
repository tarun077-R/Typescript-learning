// =====================================================
//                  ARRAYS & TUPLES
// =====================================================


// 1. ARRAY
// Array = same type ki multiple values ki list
// Length flexible hoti hai

const students: string[] = ["Tarun", "Rahul"];
const marks: number[] = [80, 90, 75];


// Array<number> bhi number[] ka same syntax hai

const scores: Array<number | string> = [90, "A", 85];


// 2. ARRAY OF OBJECTS
// Custom type ke objects ki array

type Student = {
    name: string;
    age: number;
};

const studentsList: Student[] = [
    { name: "Tarun", age: 20 },
    { name: "Rahul", age: 21 }
];


// 3. READONLY ARRAY
// Array ko read kar sakte hain, modify nahi

const cities: readonly string[] = ["Delhi", "Jaipur"];


// cities.push("Pune");      // ❌
// cities[0] = "Mumbai";     // ❌


// 4. TWO-DIMENSIONAL ARRAY
// Array ke andar arrays
// number[][] = rows and columns

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];


// 5. TUPLE
// Tuple = fixed position + fixed type
// Har position ka type define hota hai

let person: [string, number] = ["Tarun", 20];


// 6. OPTIONAL TUPLE VALUE
// ? = optional value

let user: [string, number, boolean?];

user = ["Tarun", 20];
user = ["Rahul", 21, true];


// 7. READONLY TUPLE
// Values ko modify nahi kar sakte

const coordinates: readonly [number, number] = [28.6, 77.2];


// 8. NAMED TUPLE
// Names sirf readability ke liye hain

const product: [name: string, price: number] = ["Laptop", 50000];


// =====================================================
//              ARRAY vs TUPLE
// =====================================================

// Array = LIST
// → Length flexible
// → Usually same type
// → Example: string[]

// Tuple = FIXED FORMAT
// → Position fixed
// → Har position ka type fixed
// → Example: [string, number]


// =====================================================
//                     ENUM
// =====================================================

// enum = related fixed values ka named group

enum Direction {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

const direction = Direction.UP;


// Numeric enum automatically 0 se start hota hai

enum Status {
    PENDING,
    SUCCESS,
    FAILED
}

const status = Status.SUCCESS; // 1


// =====================================================
//                  ENUM vs TYPE
// =====================================================

// ENUM
// → Named fixed values
// → Runtime par exist karta hai
// → Example: Direction.UP

enum Role {
    ADMIN = "admin",
    USER = "user"
}

const role: Role = Role.ADMIN;


// TYPE
// → Allowed values ya data structure define karta hai
// → Compile hone ke baad type runtime par exist nahi karta
// → Union, object, tuple etc. define kar sakta hai

type RoleType = "admin" | "user";

const userRole: RoleType = "admin";


// MEMORY TRICK
// enum = NAMED FIXED VALUES
// type = ALLOWED VALUES / DATA SHAPE