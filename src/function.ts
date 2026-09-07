// Function banaya
// type = string hona chahiye
// cups = number hona chahiye
function makechai(type: string, cups: number) {

    // Function ke andar values use kar rahe hain
    console.log(`Making ${cups} cups of ${type}`);
}

// Function call
makechai("Masala", 2);


// :number = function ka return value number hoga
function getChaiPrice(): number {

    // 25 return kar rahe hain
    return 25;
}


// order parameter string hona chahiye
function makeOrder(order: string) {

    // Agar order empty/falsy hai to null return karo
    if (!order) return null;

    // Agar order hai to wahi order return karo
    return order;
}


// :void = function koi value return nahi karta
function logChai(): void {

    // Sirf console mein message print kar raha hai
    console.log("chai is ready");
}


// ? = optional parameter
// type dena zaroori nahi hai
// function orderChai(type?: string) {
// }


// Default Parameter
// Agar type nahi diya to automatically "Masala" use hoga
function orderChai(type: string = "Masala") {

}


// Object ko parameter ke roop mein receive kar rahe hain
function createChai(
    order: {

        // type string hona chahiye
        type: string;

        // sugar number hona chahiye
        sugar: number;

        // size sirf "small" ya "large" ho sakta hai
        size: "small" | "large";
    }
): number {

    // Function ka return type number hai
    return 4;
}