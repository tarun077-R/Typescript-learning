let marks:string|number='1M' // its union where you can assign  multiple type
 
let apiRequestStatus :'pending'| 'success'|'error' = 'pending';
apiRequestStatus="success" // i can set the value pending , success and error.


const orders =["20","28","30","48"];

let currentorder:string|undefined;

for(let order of orders){
    if(order==="28"){             // undefined is liya ha kyuki typescript ka pta nhi ha ki 
currentorder= order;              // currentorder ko koi value assign hui ha ya nhi es liya phela hi
                                  //   undefiend type da kar bta do kar ka bta da 
    }
}
console.log(currentorder);