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

