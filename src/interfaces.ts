// =====================================================
// INTERFACE IN TYPESCRIPT
// =====================================================


// -----------------------------------------------------
// 1. BASIC INTERFACE
// -----------------------------------------------------

// Interface object ka structure define karta hai
interface chai {
  flavour: string;
  price: number;

  // ? = optional property
  milk?: boolean;
}

// Object ko chai interface follow karna hoga
const masala: chai = {
  flavour: "masala",
  price: 35
};


// -----------------------------------------------------
// 2. READONLY PROPERTY
// -----------------------------------------------------

interface Shop {
  // readonly = value assign hone ke baad change nahi kar sakte
  readonly id: number;

  name: string;
}

const s: Shop = {
  id: 1,
  name: "Chaicode cafe"
};

// s.id = 2;  // Error: readonly property change nahi kar sakte
s.name = "New Cafe"; // Allowed


// -----------------------------------------------------
// 3. FUNCTION INTERFACE
// -----------------------------------------------------

// Interface function ka structure define kar raha hai
// Input: number
// Output: number
interface DiscountCalculator {
  (price: number): number;
}

// Function ko DiscountCalculator ka structure follow karna hoga
const apply50: DiscountCalculator = (p) => p * 0.5;


// -----------------------------------------------------
// 4. METHOD INTERFACE
// -----------------------------------------------------

// Interface class/object ke methods ka contract define kar raha hai
interface TeaMachine {
  start(): void;
  stop(): void;
}

// Object ko start() aur stop() dono methods dene honge
const machine: TeaMachine = {
  start() {
    console.log("start");
  },

  stop() {
    console.log("stop");
  }
};


// -----------------------------------------------------
// 5. INDEX SIGNATURE
// -----------------------------------------------------

// [flavor: string] = koi bhi string key ho sakti hai
// Har key ki value number honi chahiye
interface chaiRatings {
  [flavor: string]: number;
}

const ratings: chaiRatings = {
  masala: 4.5,
  ginger: 4.5
};


// -----------------------------------------------------
// 6. DECLARATION MERGING
// -----------------------------------------------------

// Same interface ko dobara define kar sakte hain
interface User {
  name: string;
}

// Dono interfaces merge ho jayenge
interface User {
  age: number;
}

// Final User interface mein name + age dono hain
const u: User = {
  name: "Tarun",
  age: 21
};


// -----------------------------------------------------
// 7. INTERFACE EXTENDS
// -----------------------------------------------------

// A mein 'a' property hai
interface A {
  a: string;
}

// B mein 'b' property hai
interface B {
  b: string;
}

// C, A aur B dono ko extend kar raha hai
// Isliye C mein a + b dono properties hongi
interface C extends A, B {
}