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


// Omit = Chai mein se "ingredients" ko hata do
type ChaiWithoutIngredients = Omit<Chai, "ingredients">;


// Ab newData mein:
// name, price aur isHot allowed hain
// ingredients allowed nahi hai
const updateChai = (newData: ChaiWithoutIngredients) => {

    // Existing TarunChai ko new data ke saath merge kar rahe hain
    TarunChai = {
        ...TarunChai,
        ...newData
    };
};


// name, price aur isHot update kar sakte hain
updateChai({
    name: "Ginger Chai",
    price: 30,
    isHot: false
});


console.log(TarunChai);