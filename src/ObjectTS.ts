// ======================================================
// 1. TYPE INFERENCE
// ======================================================

// Humne yahan type explicitly nahi diya.
// TypeScript khud samajh gaya:
//
// name   → string
// price  → number
// isHot  → boolean

const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};

// ======================================================
// 2. INLINE OBJECT TYPE
// ======================================================

// Yahan humne type ko directly variable ke saath define kiya.
// Isko Inline Object Type kehte hain.
//
// tea ke andar 3 properties compulsory hain:
// name   → string
// price  → number
// isHot  → boolean

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

// Ab tea mein wahi structure wala object dena hoga.
tea = {
  name: "Ginger Tea",
  price: 30,
  isHot: true,
};

// ======================================================
// 3. TYPE ALIAS
// ======================================================

// Same object structure ko baar-baar likhne ke bajaye
// hum ek custom type bana sakte hain.
//
// Tea ab ek custom type hai.

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

// Ab Tea type ko use kar sakte hain.
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

// ingredients: string[]
// ↑
// Matlab array ke andar sirf strings honi chahiye.

// ======================================================
// 6. USER TYPE
// ======================================================

// User ka custom structure define kiya.

type User = {
  username: string;
  password: string;
};

// User type ke according object create kiya.

const u: User = {
  username: "chaiwala",
  password: "123",
};

// username → string
// password → string

// ======================================================
// 7. NESTED TYPES
// ======================================================

// Item ka structure

type Item = {
  name: string;
  quantity: number;
};

// Address ka structure

type Address = {
  street: string;
  pin: number;
};

// Order ke andar doosre custom types use kar rahe hain.
//
// id      → string
// items   → Item objects ka array
// address → Address object

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// Example:

const order: Order = {
  id: "ORD001",

  items: [
    {
      name: "Masala Chai",
      quantity: 2,
    },
    {
      name: "Samosa",
      quantity: 3,
    },
  ],

  address: {
    street: "Main Road",
    pin: 123456,
  },
};

// Yahan types ke andar types use ho rahe hain:
//
// Order
//  ├── id
//  ├── items → Item[]
//  │            ├── name
//  │            └── quantity
//  │
//  └── address → Address
//                 ├── street
//                 └── pin

