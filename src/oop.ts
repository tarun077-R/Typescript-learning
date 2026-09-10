class Chai {

    // Class ka property
    // Har Chai object ke paas flavour property hogi
    flavour: string;
    // Constructor object banate time automatically call hota hai
    constructor(flavour: string) {
        // Constructor se aayi value ko object ki flavour property mein store kar rahe hain
        this.flavour = flavour;
        // Current object ko console mein print kar rahe hain
        console.log(this);
    }
}


// new keyword se Chai class ka naya object bana rahe hain
// "Ginger" constructor ke flavour parameter mein jayega
const masalaChai = new Chai("Ginger");


// Object ki flavour property ko baad mein change kar rahe hain

masalaChai.flavour = "masala";


class tarun {
    // public = is property ko class ke bahar bhi access kar sakte hain
    public flavor: string = "Masala";
    // private = is property ko directly class ke bahar access nahi kar sakte
    private secretIngredients = "Cardamom";
    // Ye method class ke andar hai
    reveal() {
        // Class ke andar private property ko access kar sakte hain
        return this.secretIngredients;
    }
}

class Shop {
    // protected = class ke andar aur child class mein access kar sakte hain
    // Lekin class ke bahar directly access nahi kar sakte
    protected shopName = "Chai Corner";
}


class Branch extends Shop {
    // Branch, Shop ki child class hai
    // Isliye Branch inherited protected property ko access kar sakti hai
    getName() {
        // Parent class ki protected property access kar rahe hain
        return this.shopName;
    }
}


// Branch ka object bana rahe hain
// getName() method call kar rahe hain
new Branch().getName();

// tarun class ka object create kar rahe hain
const c = new tarun();


// reveal() public method hai
// Ye method internally private secretIngredients ko access karta hai
c.reveal();
// =====================================================
// 1. # PRIVATE PROPERTY
// =====================================================

// #property = JavaScript ka truly private field
// Class ke bahar directly access nahi kar sakte

class Wallet {

    #balance = 100;

    // Public method ke through private value return kar rahe hain
    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet();

w.getBalance(); // 100

// w.#balance; // ❌ Direct access allowed nahi



// =====================================================
// 2. READONLY
// =====================================================

// readonly = property ko sirf initialize/constructor mein set kar sakte hain
// Baad mein change nahi kar sakte

class Cup {

    readonly capacity: number = 250;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

const cup = new Cup(300);

// cup.capacity = 500; // ❌ Cannot assign to readonly property



// =====================================================
// 3. GETTER & SETTER
// =====================================================

// get = property ko read karne par automatically run hota hai
// set = property ko value assign karne par automatically run hota hai

class ModernChai {

    private _sugar = 2;

    // Getter
    get sugar() {
        return this._sugar;
    }

    // Setter
    set sugar(value: number) {

        // Value ko validate kar rahe hain
        if (value > 5) {
            throw new Error("Too sweet");
        }

        this._sugar = value;
    }
}

const s = new ModernChai();

// Setter automatically call hoga
s.sugar = 3;

// Getter automatically call hoga
console.log(s.sugar); // 3



// =====================================================
// 4. STATIC
// =====================================================

// static = property/method class ka hota hai
// Object/instance ka nahi

class EkChai {

    static shopName = "Chaicode Cafe";

    constructor(public flavour: string) {}
}


// Static property ko class ke naam se access karte hain
console.log(EkChai.shopName);


// EkChai.shopName → ✅
// object.shopName  → ❌



// =====================================================
// 5. ABSTRACT CLASS
// =====================================================

// abstract class ka direct object nahi bana sakte
// Ye child classes ke liye blueprint hoti hai

abstract class Drink {

    // Child class ko make() method banana hi padega
    abstract make(): void;
}


// Mychai Drink ko extend kar rahi hai
class Mychai extends Drink {

    // Abstract method ko implement karna zaroori hai
    make() {
        console.log("Brewing Chai");
    }
}

const chai = new Mychai();

chai.make();


// const drink = new Drink(); // ❌ Cannot create object of abstract class



// =====================================================
// 6. COMPOSITION / DEPENDENCY INJECTION
// =====================================================

// Heater ka kaam = heat karna

class Heater {

    heat() {
        console.log("Heating...");
    }
}


// ChaiMaker ko Heater ki zarurat hai
// Heater ko constructor ke through receive kar rahe hain

class ChaiMaker {

// Yahan private TypeScript ko bol raha hai:

// "Is heater ko class ki property bana do aur is property ko private rakho."
    constructor(private heater: Heater) {}

    make() {
        // Heater ka method call kar rahe hain
        this.heater.heat();
    }
}


// Heater ka object create
const heater = new Heater();


// Heater ko ChaiMaker ke andar pass kar rahe hain
const maker = new ChaiMaker(heater);

maker.make();


// =====================================================
// MEMORY TRICK
// =====================================================

// #private   = truly private field
// readonly   = once set, cannot change
// get        = read property
// set        = assign property
// static     = class ka member
// abstract   = child class ke liye blueprint
// composition = ek class doosri class ko use karti hai