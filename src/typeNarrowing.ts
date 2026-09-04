// Union Type: chai ki value string ya number ho sakti hai
function getChai(kind: string | number) {

    // Type Narrowing using typeof: check kar rahe hain ki kind string hai
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }

    return `Making ${kind} chai`;
}


// Optional Parameter: msg dena optional hai, isliye ? use kiya
function serveChai(msg?: string) {

    // Type Narrowing: check kar rahe hain ki msg ki value available hai
    if (msg) {
        return `Serving ${msg}`;
    }

    return `Serving default masala chai`;
}


// Literal Type + Union Type:
// size sirf "small", "medium", "large" ya number ho sakta hai
function orderChai(size: "small" | "medium" | "large" | number) {

    // Literal Type Narrowing
    if (size === "small") {
        return `small cutting chai`;
    }

    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }

    return `Chai order #${size}`;
}

// console.log(orderChai(4));


// Class: object banane ke liye blueprint
class kulhadchai {
    serve() {
        return `serving kulladchai`;
    }
}

class Masalachai {
    serve() {
        return `serving Masalachai`;
    }
}


// Union Type: chai kulhadchai ya Masalachai dono mein se koi ek ho sakti hai
function serve(chai: kulhadchai | Masalachai) {

    // instanceof: check karta hai ki object kulhadchai class ka instance hai
    // Ye Type Narrowing bhi karta hai
    if (chai instanceof kulhadchai) {
        return chai.serve();
    }

    // Check karta hai ki object Masalachai class ka instance hai
    if (chai instanceof Masalachai) {
        return chai.serve();
    }
}


// new: class se naya object/instance create karta hai
console.log(serve(new kulhadchai()));


// Type Alias: custom object type banaya
type chaiorder = {
    type: string;
    suger: number;
};


// Custom Type Guard:
// "obj is chaiorder" TypeScript ko batata hai ki true hone par obj chaiorder hai
function ischaiorder(obj: any): obj is chaiorder {

    // Object ka actual structure check kar rahe hain
    return (
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number"
    );
}
function serveOrder(item: chaiorder | string) {
    if (ischaiorder(item)) {
        return `Serving ${item.type} chai with ${item.suger} Suger`
    }
    return `Serving custom chai: ${item}`
}

type MAsalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MAsalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
        case "elaichi":
            return `Elaichi`
            break;
        default:
            break;
    }

}

function brew(order:MAsalaChai | GingerChai){
    if("spicelevel" in order){
      //
    }
}

// function isStringArray(arr:unknown):arr is string[]{
// //
// }