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

// interface TeaRecipe {
//     water: string;
//     milk: number;
// }


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

//basically class ka liya interface use krta ha but
//  kabhi kabhi type bhi kaam kar jta ha 

// type Response={ok:true}|{ok:false}
// class myRes implements Response{

// }// ======================================================
// 1. LITERAL TYPE + UNION TYPE
// ======================================================

// TeaType ek custom type hai.
// Isme sirf 3 exact values allowed hain:
// "masala" OR "ginger" OR "lemon"

// "masala", "ginger", "lemon" = Literal Types
// | = Union, matlab in options mein se koi ek

type TeaType = "masala" | "ginger" | "lemon";


function orderChai(t: TeaType) {

    console.log(t);

}


// Sirf ye values allowed hain:
orderChai("masala");  // ✅
orderChai("ginger");  // ✅
orderChai("lemon");   // ✅

// orderChai("coffee"); // ❌ coffee TeaType ka part nahi hai



// ======================================================
// 2. INTERSECTION TYPE (&)
// ======================================================

// BaseChai mein teaLeaves property hai
type BaseChai = {
    teaLeaves: number;
};


// Extra mein masala property hai
type Extra = {
    masala: number;
};


// & = Intersection Type
//
// MasalaChais mein BaseChai + Extra
// dono ki properties aa jayengi.
//
// Matlab:
// teaLeaves bhi chahiye
// masala bhi chahiye

type Masalachais = BaseChai & Extra;


// Masalachais ke rules follow karne ke liye
// teaLeaves aur masala dono dena compulsory hai.

const cup: Masalachais = {

    teaLeaves: 2,
    masala: 1

};



// ======================================================
// 3. OPTIONAL PROPERTY (?)
// ======================================================

type User = {

    username: String;

    // ? = optional property
    // bio dena compulsory nahi hai
    // bio ho sakta hai ya nahi bhi ho sakta

    bio?: string;

};


// bio nahi diya → ✅ valid
const u1: User = {
    username: "Hitesh"
};


// bio diya → ✅ valid
const u2: User = {
    username: "Tarun",
    bio: "tarun.io"
};



// ======================================================
// 4. READONLY
// ======================================================

type Config = {

    // readonly = value ko create karne ke baad
    // change nahi kar sakte

    readonly appName: String;

    version: number;
};


// Object create karte time value set kar sakte hain
const cfg: Config = {

    appName: "Tarunji",
    version: 4

};


// ❌ ERROR
// appName readonly hai,
// isliye create hone ke baad iski value change nahi kar sakte.

// cfg.appName = "Raju";