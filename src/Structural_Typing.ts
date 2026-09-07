
// ======================================================
// 4. STRUCTURAL TYPING
// ======================================================

// Cup type mein sirf size required hai.

type Cup = {
  size: string;
};

// smallCup ko Cup type diya hai.
let smallCup: Cup = {
  size: "200ml",
};

// bigCup ka explicit type nahi diya.
// TypeScript automatically iska structure samajh lega:
//
// {
//     size: string;
//     material: string;
// }

let bigCup = {
  size: "500ml",
  material: "steel",
};

// bigCup ke paas "size" property hai,
// jo Cup ko required hai.
//
// material extra property hai,
// lekin Cup ko material ki zaroorat nahi hai.
//
// Isliye ye valid hai.

smallCup = bigCup; // ✅

// Important:
// Runtime mein smallCup ab bigCup wale object ko refer karega.
//
// Lekin TypeScript ke according smallCup ka type abhi bhi Cup hai,
// isliye TypeScript smallCup.material ko nahi jaanta.


// ======================================================
// 5. STRUCTURAL TYPING KA SECOND EXAMPLE
// ======================================================

type Brew = {
  brewTime: number;
};

// coffee ke paas brewTime + beans dono hain.
const coffee = {
  brewTime: 5,
  beans: "Arabica",
};

// Brew ko sirf brewTime chahiye.
// coffee ke paas brewTime already hai.
//
// beans extra property hai.
// Isliye assignment valid hai.

const chaiBrew: Brew = coffee; // ✅

// Structural Typing ka simple rule:
//
// "Required structure match hona chahiye.
// Extra properties allowed ho sakti hain."
