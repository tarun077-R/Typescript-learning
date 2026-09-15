// Generic function: T input ka type automatically decide karega
function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala"); // T = string → string[]
wrapInArray(42); // T = number → number[]
wrapInArray({ flavour: "Ginger" }); // T = object → object[]


// Multiple Generics: A aur B alag-alag types ho sakte hain
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("Tarun", { age: 24 }); // A = string, B = object
pair("masala", 20); // A = string, B = number
pair("rahul", { age: 26 });


// Generic Interface: T content ka type baad mein decide hoga
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = {
  content: 10
};


// Generic API response: data ka type flexible hai
interface ApiPromise<T> {
  status: number;
  data: T;
}

// Yahan T = { flavor: string }
const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: {
    flavor: "masala"
  }
};