let response:any = "42";
// Type Assertion means ya bol rha ha typescript ko bhi bhorosa kar muj pa
let numericLength:number = (response as string).length 


type Book = {
    name: string;
};

let bookString = '{"name":"One thing"}';

// JSON string → JavaScript object
// as Book → TypeScript ko bataya ki object Book type ka hai
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);
const inputElement = document.getElementById("username") as HTMLInputElement;

// any = kuch bhi karo, TypeScript check nahi karega
let value:any
value="tarun"
value=[1,2,4,5]
value=2.5
value.toUpperCase()

// unknown = kuch bhi ho sakta hai, pehle type check/narrow karo, phir use karo
let newValue:unknown
newValue="rahul"
newValue=[1,4,6,7]
newValue=3.5
if(typeof newValue === "string"){

    newValue.toUpperCase()
}
try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message)
    }
}

const data:unknown = "code with tarun";
const sirfData :string = data as string

type Role = "admin" | "user" |"superadmin"
function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting  to user dashboard");
        return
    }
    role;

}