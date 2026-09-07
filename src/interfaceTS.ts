// ======================================================
// 1. TYPE ALIAS
// ======================================================

// ChaiOrder ek custom type hai.
// Is type ka object banane ke liye ye 3 properties required hain.
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};


// ======================================================
// 2. FUNCTION USING TYPE
// ======================================================

function makeChai(order: ChaiOrder): void {
    console.log(
        `Making ${order.type} chai with ${order.sugar} sugar`
    );

    if (order.strong) {
        console.log("Making strong chai");
    } else {
        console.log("Making normal chai");
    }
}


// Same ChaiOrder type doosri function mein bhi use kar sakte hain.
function serveChai(order: ChaiOrder): void {
    console.log(`Serving ${order.type} chai`);
}


// Actual object
const order: ChaiOrder = {
    type: "Masala",
    sugar: 2,
    strong: true
};


// Functions ko order pass kar rahe hain
makeChai(order);
serveChai(order);


// ======================================================
// 3. INTERFACE
// ======================================================

// Interface bhi rules/contract define karta hai.
// Jo class TeaRecipe ko implement karegi,
// usme water aur milk hona compulsory hai.
interface TeaRecipe {
    water: number;
    milk: number;
}


// ======================================================
// 4. IMPLEMENTS
// ======================================================

// MasalaChai bol rahi hai:
// "Main TeaRecipe ke rules follow karungi."

class MasalaChai implements TeaRecipe {

    water = 100;
    milk = 20;

}


// Object create kar rahe hain
const masalaChai = new MasalaChai();

console.log(masalaChai);


// ======================================================
// 5. INTERFACE WITH LITERAL TYPE
// ======================================================

// CupSize interface ka rule:
// size sirf "small" ya "large" ho sakta hai.
interface CupSize {
    size: "small" | "large";
}


// Chai class CupSize ke rules follow karegi.
class Chai implements CupSize {

    size: "small" | "large" = "large";

}


// Object create
const chai = new Chai();

console.log(chai.size);