// ======================================================
// VOID
// ======================================================

// void ka matlab:
// Function koi value RETURN nahi karega,
// lekin function normally complete ho jayega.

function greet(): void {
    console.log("Hello Tarun");
}

greet();

// Output:
// Hello Tarun

// Function ka kaam complete ho gaya.
// Isliye iska return type = void.


// ------------------------------------------------------
// void function ke andar return; bhi kar sakte hain
// ------------------------------------------------------

function checkUser(): void {
    console.log("Checking user...");

    return; // Sirf function ko yahin stop kar raha hai
}

checkUser();

// Output:
// Checking user


// IMPORTANT:
// return; = function ko stop karo
// void    = function koi value return nahi karega



// ======================================================
// NEVER
// ======================================================

// never ka matlab:
// Function NORMAL way se kabhi complete nahi hoga.

// Example 1: Error throw karna

function throwError(): never {
    throw new Error("Something went wrong!");
}

throwError();

// Function yahan tak normally nahi pahunchta.
// throw ke baad function terminate ho jata hai.
// Isliye return type = never.


// ------------------------------------------------------
// Example 2: Infinite Loop
// ------------------------------------------------------

function infiniteLoop(): never {
    while (true) {
        console.log("Running forever...");
    }
}

// infiniteLoop();

// Agar ise call karoge,
// function continuously chalta rahega
// aur kabhi normally finish nahi hoga.



// ======================================================
// VOID vs NEVER
// ======================================================

function normalFunction(): void {
    console.log("Function finished");
}

function errorFunction(): never {
    throw new Error("Function never finishes normally");
}

// normalFunction()
// → kaam karta hai
// → function finish ho jata hai
// → koi value return nahi karta
// → void


// errorFunction()
// → error throw karta hai
// → function normally finish nahi hota
// → never



// ======================================================
// EASY MEMORY TRICK
// ======================================================

// void  = "Kuch return nahi kiya, BUT function finish ho gaya."
//
// never = "Function normally finish HI nahi hua."


// void
function printName(): void {
    console.log("Tarun");
}


// never
function crashApp(): never {
    throw new Error("App crashed");
}