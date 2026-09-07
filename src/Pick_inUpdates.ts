type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
};


// Existing data
let TarunChai: Chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
    ingredients: ["tea leaves", "ginger"]
};


// Pick = Chai mein se sirf name aur price select karo
type BasicChaiInfo = Pick<Chai, "name" | "price">;


// Sirf name aur price ka data function mein aa sakta hai
const updateChai = (newData: BasicChaiInfo) => {

    // Existing TarunChai ko new data ke saath merge kar rahe hain
    TarunChai = {
        ...TarunChai,
        ...newData
    };
};


// Pick ki wajah se name aur price dono dene padenge
updateChai({
    name: "Lemon Chai",
    price: 30
});


console.log(TarunChai);