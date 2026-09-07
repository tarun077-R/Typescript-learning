type ChaiOrder ={
    type:string;
    sugar:number;
    strong:boolean
}
function makeChai(order:ChaiOrder){
    console.log(order);
}

function  serveChai(order:ChaiOrder){
    console.log(order)
}

type TeaRecipe={
    water:number;
    milk:number
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk=20;
}
interface CupSize {size:"small"|"large"}
class Chai implements CupSize{
size: "small" | "large"="large";
}