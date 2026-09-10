// ==========================================
// 1. Array of strings
// ==========================================

// string[] means:
// "This array can contain ONLY strings"

const students: string[] = ["Tarun", "Rahul"];

// ❌ Not allowed
// students.push(20);
 

// ==========================================
// 2. Array of numbers
// ==========================================

// number[] means:
// "This array can contain ONLY numbers"

const rollno: number[] = [10, 23, 30];

// ❌ Not allowed
// rollno.push("40");


// ==========================================
// 3. Array<number> syntax
// ==========================================

// Array<number> is another way of writing number[]

// Both are exactly the same:
// number[]
// Array<number>

const marks_inMath: Array<number | string> = [4,"tarun",3,"rahul"];


// ==========================================
// 4. Array of objects using a type
// ==========================================

// Creating a custom type called "student"

type student = {
    name: string;
    age: number;
};

// student[] means:
// "An array containing student objects"

const attendance_Book: student[] = [
    { name: "Tarun", age: 10 },
    { name: "Rahul", age: 15 },
    { age: 20, name: "raju" }
];

// Every object MUST follow the student type.

// ❌ Missing age
// { name: "Aman" }

// ❌ age must be a number
// { name: "Aman", age: "20" }


// ==========================================
// 5. readonly array
// ==========================================

// readonly means:
// We can READ the array,
// but we cannot MODIFY it.

const cities: readonly string[] = ["Delhi", "Jaipur"];

// ❌ Not allowed
// cities.push("Pune");

// ❌ Not allowed
// cities[0] = "Mumbai";


// ==========================================
// 6. Two-dimensional array
// ==========================================

// number[][] means:
// An array containing arrays of numbers.
//
// Think of it like a table/matrix.

const table: number[][] = [
    [1, 2, 4, 6],
    [4, 5, 6, 7]
];

// table[0] → [1, 2, 4, 6]
// table[0][1] → 2


// ==========================================
// 7. Tuple
// ==========================================

// Tuple defines:
// 1st position → string
// 2nd position → number

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];

// ✅ Correct
// index 0 → string
// index 1 → number

// ❌ Wrong order
// chaiTuple = [20, "Masala"];


// ==========================================
// 8. Optional value in tuple
// ==========================================

// ? means the third value is OPTIONAL.
//
// Position 0 → string
// Position 1 → number
// Position 2 → boolean (optional)

let userInfo: [string, number, boolean?];

userInfo = [
    "tarun",
    20
];

// Third value is optional, so this is also valid.

userInfo = [
    "raju",
    13,
    true
];


// ==========================================
// 9. readonly tuple
// ==========================================

// readonly tuple means:
// The values and their positions cannot be changed.

const location: readonly [number, number] = [28.66, 32.44];

// location[0] = 30; ❌
// location.push(40); ❌


// ==========================================
// 10. Named tuple elements
// ==========================================

// name:string → first value must be string
// price:number → second value must be number

const chaiItems: [name: string, price: number] = ["Masala", 25];

// The names "name" and "price" are mainly for readability.
// They do NOT change the tuple's behavior.


enum CupSize{
SMALL,
MEDIUM,
LARGE
}
const size = CupSize.LARGE
console.log(size);
// enum = related fixed values ka group
enum ChaiType {

    // MASALA enum member hai
    // Iski actual value "masala" hai
    MASALA = "masala",

    // GINGER enum member hai
    // Iski actual value "ginger" hai
    GINGER = "ginger"
}


// type: ChaiType
// Matlab function mein sirf ChaiType enum ki values pass kar sakte hain
function makeChai(type: ChaiType) {

    // type ki value console mein print kar rahe hain
    console.log(`Making: ${type}`);
}


// ChaiType enum mein se GINGER member pass kar rahe hain
makeChai(ChaiType.GINGER);

// =====================================================
//        ARRAY vs TUPLE
// =====================================================


// ARRAY
// Array mein generally same type ke multiple values hote hain
// Array ki length fixed nahi hoti
// Naye elements add ya remove kar sakte hain

let flavours: string[] = ["Masala", "Ginger", "Elaichi"];

flavours.push("Lemon"); // ✅ Allowed



// TUPLE
// Tuple mein fixed structure define hota hai
// Har position ka type pehle se define hota hai
// Example: first value string aur second value number

let chaiInfo: [string, number] = ["Masala", 25];


// =====================================================
// DIFFERENCE
// =====================================================

// Array
// → LIST of values
// → Usually same type
// → Length flexible
// → Example: string[]

// Tuple
// → FIXED FORMAT of values
// → Different types ho sakte hain
// → Position aur type important
// → Example: [string, number]


// MEMORY TRICK
// Array = LIST
// Tuple = FIXED FORMAT