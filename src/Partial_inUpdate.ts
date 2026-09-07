
// ======================================================
// 8. PARTIAL<T>
// ======================================================

// Chai ka complete structure

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

// Normally Chai type use karoge to
// teeno properties required hongi.

let chaiwala: Chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// Lekin update karte time humein usually
// saari properties nahi chahiye.
//
// Example:
// Sirf price update karna hai.
//
// Yahan Partial<Chai> use kiya hai.

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with", updates);
  chaiwala={...chaiwala,...updates}
};

// Partial<Chai> ka matlab:
//
// Chai ki SAARI properties OPTIONAL bana do.
//
// Original:
//
// type Chai = {
//     name: string;
//     price: number;
//     isHot: boolean;
// };
//
// Partial<Chai>:
//
// {
//     name?: string;
//     price?: number;
//     isHot?: boolean;
// }

// Isliye sirf price de sakte ho.

updateChai({
  price: 25,
}); // ✅

// Sirf isHot bhi de sakte ho.

updateChai({
  isHot: false,
}); // ✅

// Sirf name bhi de sakte ho.

updateChai({
  name: "Ginger Chai",
}); // ✅

// Ek se zyada bhi de sakte ho.

updateChai({
  price: 30,
  isHot: true,
}); // ✅

// Empty object bhi technically allowed hai,
// kyunki Partial ne sab properties optional bana di hain.

updateChai({}); // ✅