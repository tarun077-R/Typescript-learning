type Chai = {
    name?: string;
    price?: number;
    isHot?: boolean;
};


// Existing data
let TarunChai: Chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};


// Required<Chai>
// Saari properties ko required bana deta hai
const updateChai = (newChai: Required<Chai>) => {

    // Existing TarunChai ko newChai ke data se update kar rahe hain
    TarunChai = {
        ...TarunChai,
        ...newChai
    };
};


// Required ki wajah se teeno properties deni compulsory hain
updateChai({
    name: "Ginger Chai",
    price: 30,
    isHot: false
});


console.log(TarunChai);